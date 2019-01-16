import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-zippy',
  template: `
    <div>
      <button type="button" class="btn btn-info" (click)="toggle()">Toggle</button>
      <div [hidden]="!visible">
        <ng-container><strong>Toggle visibility</strong></ng-container>
      </div>
    </div>`
})
export class ZippyComponent {
  visible = true;
  @Output()
  open = new EventEmitter<any>();
  @Output()
  close = new EventEmitter<any>();

  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit('visible');
    } else {
      this.close.emit('invisible');
    }
  }

}
