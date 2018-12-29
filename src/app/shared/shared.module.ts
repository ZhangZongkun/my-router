import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AwesomePipe } from './awesome.pipe';
import { HighlightDirective } from './highlight.directive';

import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  imports: [CommonModule, AlertModule.forRoot()],
  declarations: [AwesomePipe, HighlightDirective],
  exports: [CommonModule, AlertModule, FormsModule, AwesomePipe, HighlightDirective]
})
export class SharedModule {
}
