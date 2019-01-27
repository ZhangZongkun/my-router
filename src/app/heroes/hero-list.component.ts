import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import { Hero, HeroService } from './hero.service';
import { zip } from 'rxjs/internal/observable/zip';
import { of } from 'rxjs/internal/observable/of';

@Component({
  template: `
    <h2>HEROES</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes$ | async"
          [class.selected]="hero.id === selectedId">
        <a [routerLink]="['/hero', hero.id]">
          <span class="badge">{{hero.id}}</span>{{hero.name}}
        </a>
      </li>
    </ul>`,
  styleUrls: ['hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  selectedId: number;

  constructor(private route: ActivatedRoute,
              private service: HeroService) {
  }

  ngOnInit() {
    this.zip();
    this.switchMap();

    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        console.log(this.selectedId);
        return this.service.getHeroes();
      }));
  }

  zip() {
    zip(of(2, 3, 7), of(7, 11, 99)
      .pipe(delay(2000)))
      .subscribe(([x, y]) => console.log(`${x} - ${y}`));
  }

  switchMap() {
    of(2, 3, 7, 11)
      .pipe(switchMap(a => {
        console.log(a);
        return of(99);
      }))
      .subscribe(b => console.log(b));
  }
}
