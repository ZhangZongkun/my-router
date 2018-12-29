import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AwesomePipe } from './awesome.pipe';
import { HighlightDirective } from './highlight.directive';

import { AlertModule } from 'ngx-bootstrap/alert';
import { PopoverModule } from 'ngx-bootstrap/popover';

@NgModule({
  imports: [CommonModule, AlertModule.forRoot(), PopoverModule.forRoot()],
  declarations: [AwesomePipe, HighlightDirective],
  exports: [CommonModule, AlertModule, PopoverModule, FormsModule, AwesomePipe, HighlightDirective]
})
export class SharedModule {
}
