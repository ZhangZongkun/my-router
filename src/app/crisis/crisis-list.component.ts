import { Component, OnInit } from '@angular/core';

import { Crisis, CrisisService } from './crisis.service';

@Component({
  template: `
    <h3>Crisis List</h3>
    <ul class="items">
      <li *ngFor="let crisis of crises | async">
        <a routerLink="{{'../' + crisis.id}}">
          <span class="badge">{{crisis.id}}</span>{{crisis.name}}
        </a>
      </li>
    </ul>
  `
})
export class CrisisListComponent implements OnInit {
  crises: Promise<Crisis[]>;

  constructor(private crisisService: CrisisService) {
  }

  ngOnInit() {
    this.crises = this.crisisService.getCrises();
  }
}
