import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bank-account',
  template: `
    <p>Bank Name: {{bankName}}</p>
    <p>Account Id: {{id}}</p>
  `
})
export class BankComponent {
  @Input() bankName: string;
  @Input() id: string;
}
