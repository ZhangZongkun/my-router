import { Component } from '@angular/core';

import { heroes } from './hero';

@Component({
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  color: string;
  heroes = heroes;
  hero = this.heroes[2];
  showSad = true;
  condition = false;

  everyFiveSeconds() {
    console.log('Every five seconds.');
  }

  everySecond() {
    console.log('Every second.');
  }
}
