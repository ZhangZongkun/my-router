import { Component, OnInit } from '@angular/core';

import { Contact, ContactService } from './contact.service';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact;
  contacts: Contact[];

  constructor(private contactService: ContactService) {
  }

  ngOnInit(): void {
    this.contactService.getContacts()
      .then(contacts => {
        this.contacts = contacts;
        this.contact = contacts[0];
      });
  }

}
