import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { ExampleComponent } from './example.component';
import { BankComponent } from './bank.component';

@NgModule({
  imports: [CommonModule, ExampleRoutingModule],
  declarations: [ExampleComponent, BankComponent]
})
export class ExampleModule {
}
