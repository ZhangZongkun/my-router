import { Component, OnInit } from '@angular/core';

import { Contact, ContactService } from './contact.service';
import { UserService } from '../core/user.service';
import { ajax, fromPromise } from 'rxjs/internal-compatibility';
import { catchError, debounce, debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { interval } from 'rxjs/internal/observable/interval';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute } from '@angular/router';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import * as $ from 'jquery';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact;
  contacts: Contact[];
  msg = 'Loading contacts ...';
  userName = '';
  num$ = interval(1000);
  time$ = new Observable(observer => {
      setInterval(() => observer.next(new Date().toString()), 1000)
    }
  );

  constructor(private contactService: ContactService,
              private activatedRoute: ActivatedRoute,
              private userService: UserService) {
    this.userName = userService.userName;
  }

  ngOnInit() {
    this.activatedRoute.url.subscribe(url =>
      console.log('The url changed to: ' + url));

    this.contactService.getContacts()
      .then(contacts => {
        this.msg = '';
        this.contacts = contacts;
        this.contact = contacts[0];
      });

    fromPromise(fetch('assets/api/heroes.json'))
      .subscribe(next => console.log(next));

    const apiData = ajax('assets/api/heroes.json').pipe(
      map(res => {
        if (!res.response) {
          throw new Error('Value expected!');
        }
        return res.response;
      }),
      catchError(err => of([]))
    );

    apiData.subscribe(next => {
        console.log('data: ', next);
      },
      err => {
        console.log('Error already caught... will not run');
      });

    const searchBox = document.getElementById('search-box');

    const typeahead = fromEvent($('#search-box'), 'input').pipe(
      map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
      filter(text => text.length > 2),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(() => ajax('assets/api/heroes.json'))
    );

    typeahead.subscribe(data => console.log(data));
  }

  onSubmit() {
    this.displayMessage('Saved ' + this.contact.name);
  }

  nextContact() {
    let ix = 1 + this.contacts.indexOf(this.contact);
    if (ix >= this.contacts.length) {
      ix = 0;
    }
    this.contact = this.contacts[ix];
  }

  newContact() {
    this.displayMessage('New contact');
    this.contact = new Contact(42, '');
    this.contacts.push(this.contact);
  }

  displayMessage(msg: string) {
    this.msg = msg;
    setTimeout(() => this.msg = '', 1500);
  }

  onOpen(event) {
    console.log(event);
  }

  onClose(event) {
    console.log(event);
  }

}
