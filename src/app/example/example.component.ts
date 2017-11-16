import { Component } from '@angular/core';

@Component({
  template: `
    <br>
    <app-bank-account bank-name="RBC" id="4747"></app-bank-account>
    <interval-dir (everyFiveSeconds)="everyFiveSeconds()"></interval-dir>
    <hr>
    <h1>My First Attribute Directive</h1>
    <p highlight>Highlight me!</p>
    <p highlight [defaultColor]="'green'">Highlight me too!</p>
  `
})
export class ExampleComponent {
  everyFiveSeconds() {
    console.log('Every five seconds.');
  }

  everySecond() {
    console.log('Every second.');
  }
}
