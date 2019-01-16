import { Component } from '@angular/core';

@Component({
  selector: 'app-keyup',
  template: `
    <h2>User Input</h2>
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
    <input [(ngModel)]="model">
    <p>{{model}}</p>
    <h3>Add hero</h3>
    <input #newHero
           (keyup.enter)="addHero(newHero.value); newHero.value=''"
           (blur)="addHero(newHero.value); newHero.value=''">
    <ul>
      <li *ngFor="let hero of heroes">{{hero}}</li>
    </ul>
  `
})
export class KeyupComponent {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  model: any;

  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
}
