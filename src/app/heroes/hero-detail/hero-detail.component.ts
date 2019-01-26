import { Component, OnInit } from '@angular/core';
import { Hero, HeroService } from '../hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero$: Observable<Hero>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: HeroService) {
  }

  ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
      switchMap(params => this.service.getHero(params.get('id')))
    );
  }

  gotoHeroes(hero: Hero) {
    let heroId = hero ? hero.id : null;
    this.router.navigate(['/heroes', {id: heroId, foo: 'foo'}]);
  }

}
