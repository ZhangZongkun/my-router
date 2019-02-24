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
      <br>
      <button type="button" class="btn btn-info"
              (click)="gotoCrises(crisis)">Crisis List
      </button>
    </div>
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

  private gotoCrises(crisis: Crisis) {
    let crisisId = crisis ? crisis.id : null;
    this.router.navigate(['../', { id: crisisId }]);
  }
}
