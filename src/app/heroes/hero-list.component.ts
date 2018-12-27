import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Hero, HeroService } from './hero.service';

@Component({
  template: `
    <h2>HEROES</h2>
    <ul class="items">
      <li *ngFor="let hero of heroes$ | async">
        <span class="badge">{{hero.id}}</span>{{hero.name}}
      </li>
    </ul>
  `
})
export class HeroListComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  // private selectedId: number;

  constructor(private route: ActivatedRoute,
              private service: HeroService) {
  }

  ngOnInit() {
    this.heroes$ = this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {
        // this.selectedId = +params.get('id');
        return this.service.getHeroes();
      }));
  }
}
