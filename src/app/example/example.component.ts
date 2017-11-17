import { Component } from '@angular/core';

@Component({
  templateUrl: './example.component.html'
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
