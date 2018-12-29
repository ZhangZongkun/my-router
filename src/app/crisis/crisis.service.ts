import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { map } from 'rxjs/operators';

export class Crisis {
  constructor(public id: number, public name: string) {
  }
}

const CRISES: Crisis[] = [
  new Crisis(1, 'Dragon Burning Cities'),
  new Crisis(2, 'Sky Rains Great White Sharks'),
  new Crisis(3, 'Giant Asteroid Heading For Earth'),
  new Crisis(37, 'Procrastinators Meeting Delayed Again')];

@Injectable()
export class CrisisService {
  private crises$ = new BehaviorSubject(CRISES);

  getCrises() {
    return this.crises$;
  }

  getCrisis(id: number | string) {
    return this.getCrises().pipe(
      map(crises => crises.find(crisis => crisis.id === +id)));
  }
}
