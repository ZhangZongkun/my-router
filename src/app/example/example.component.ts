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

  fontSizePx = 16;

  agreed = 0;
  disagreed = 0;

  major = 1;
  minor = 23;

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
