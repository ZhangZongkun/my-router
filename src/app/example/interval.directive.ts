import { Directive, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: 'interval-dir',
})
export class IntervalDirective {
  @Output() everyFiveSeconds = new EventEmitter();

  constructor() {
    setInterval(() => this.everyFiveSeconds.emit('event'), 5000);
  }
}
