import { Component, OnInit } from '@angular/core';

import { Contact, ContactService } from './contact.service';
import { UserService } from '../core/user.service';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact;
  contacts: Contact[];
  msg = 'Loading contacts ...';
  userName = '';

  constructor(private contactService: ContactService,
              private userService: UserService) {
    this.userName = userService.userName;
  }

  ngOnInit() {
    this.contactService.getContacts()
      .then(contacts => {
        this.msg = '';
        this.contacts = contacts;
        this.contact = contacts[0];
      });
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

}
