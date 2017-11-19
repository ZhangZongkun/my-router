import { Component, Input } from '@angular/core';

import { HeroComponent } from './hero.component';

@Component({
  template: `
    <div class="job-add">
      <h4>{{data.headline}}</h4>
      {{data.body}}
    </div>
  `
})
export class HeroJobAdComponent implements HeroComponent {
  @Input() data: any;
}
