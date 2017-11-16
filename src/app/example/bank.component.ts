import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bank-account',
  template: `
    Bank Name: {{bankName}}
    Account Id: {{id}}
  `
})
export class BankComponent {
  @Input() bankName: string;
  @Input() id: string;
}
