import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Crisis, CrisisService } from './crisis.service';
import { Observable } from 'rxjs/internal/Observable';
import { switchMap } from 'rxjs/operators';

@Component({
  template: `
    <h3>Crisis Detail</h3>
    <div *ngIf="crisis$ | async as crisis">
    <div>Crisis id: {{crisis.id}} - {{crisis.name}}</div>
    </div>
    <br>
    <a routerLink="../">Crisis List</a>
  `
})
export class CrisisDetailComponent implements OnInit {
  crisis$: Observable<Crisis>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private crisisService: CrisisService) {
  }

  ngOnInit() {
    this.crisis$ = this.route.paramMap.pipe(
      switchMap(params => this.crisisService.getCrisis(params.get('id')))
    );
  }
}
