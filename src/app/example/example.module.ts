import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ExampleRoutingModule } from './example-routing.module';
import { ExampleComponent } from './example.component';
import { BankComponent } from './bank.component';
import { IntervalDirective } from './interval.directive';
import { heroSwitchComponents } from './hero-switch.components';

@NgModule({
  imports: [SharedModule, ExampleRoutingModule],
  declarations: [ExampleComponent, BankComponent, IntervalDirective,
    heroSwitchComponents]
})
export class ExampleModule {
}
