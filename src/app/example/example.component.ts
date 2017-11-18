import { Component } from '@angular/core';

import { heroes } from './hero';

@Component({
  templateUrl: './example.component.html'
})
export class ExampleComponent {
  color: string;
  heroes = heroes;
  hero = this.heroes[0];

  everyFiveSeconds() {
    console.log('Every five seconds.');
  }

  everySecond() {
    console.log('Every second.');
  }
}
