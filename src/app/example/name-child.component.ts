import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name-child',
  template: `<h3>"{{name}}"</h3>
  <button type="button" class="btn btn-info" (click)="changeName()">Change Name</button>`
})
export class NameChildComponent {
  private _name = '';

  @Input()
  set name(name: string) {
    this._name = (name && name.trim() || '<no name set>');
  }

  get name(): string {
    return this._name;
  }

  changeName() {
    this._name = 'A hero';
  }
}
