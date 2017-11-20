import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ExampleRoutingModule } from './example-routing.module';
import { ExampleComponent } from './example.component';
import { BankComponent } from './bank.component';
import { heroSwitchComponents } from './hero-switch.components';

import { IntervalDirective } from './interval.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  imports: [SharedModule, ExampleRoutingModule],
  declarations: [ExampleComponent, BankComponent, heroSwitchComponents,
    IntervalDirective, UnlessDirective]
})
export class ExampleModule {
}
