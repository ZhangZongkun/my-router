import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { ExampleComponent } from './example.component';
import { BankComponent } from './bank.component';
import { IntervalDirective } from './interval.directive';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [CommonModule, ExampleRoutingModule],
  declarations: [ExampleComponent, BankComponent, IntervalDirective, HighlightDirective]
})
export class ExampleModule {
}
