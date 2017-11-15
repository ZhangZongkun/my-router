import { Component, OnInit } from '@angular/core';

import { Crisis, CrisisService } from './crisis.service';

@Component({
  template: `
    <h3>Crisis List</h3>
    <div *ngFor="let crisis of crises | async">
      <a routerLink="{{'../' + crisis.id}}">{{crisis.id}} - {{crisis.name}}</a>
    </div>
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
