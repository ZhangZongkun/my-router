import { Component } from '@angular/core';

@Component({
  template: `
    <br>
    <app-bank-account bank-name="RBC" id="4747"></app-bank-account>
    <interval-dir (everyFiveSeconds)="everyFiveSeconds()"></interval-dir>
    <hr>
    
    <h1>My First Attribute Directive</h1>
    <h4>Pick a highlight color</h4>
    <div>
      <input type="radio" name="colors" (click)="color='lightgreen'">Green
      <input type="radio" name="colors" (click)="color='yellow'">Yellow
      <input type="radio" name="colors" (click)="color='cyan'">Cyan
    </div>
    <p [appHighlight]="color">Highlight me!</p>
    <p [appHighlight]="color" [defaultColor]="'violet'">Highlight me too!</p>
    <p appHighlight="lightgray" defaultColor="orange">Highlight me in orange.</p>
  `
})
export class ExampleComponent {
  color: string;

  everyFiveSeconds() {
    console.log('Every five seconds.');
  }

  everySecond() {
    console.log('Every second.');
  }
}
