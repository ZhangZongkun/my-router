import { Component } from '@angular/core';

import { Hero, heroes } from './hero';

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

  fontSizePx = 16;

  agreed = 0;
  disagreed = 0;

  major = 1;
  minor = 23;

  birthday = new Date(1988, 3, 15);
  toggle = true;

  strenth = 2;
  factor = 3;

  isSpecial = true;

  names = ['Mr.IQ', '    ', '    Bombasto     '];

  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }

  deleteHero(hero: Hero) {
    console.log(`Hero deleted: ${hero.name}`);
  }

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }

  everyFiveSeconds() {
    console.log('Every five seconds.');
  }

  everySecond() {
    console.log('Every second.');
  }
}
