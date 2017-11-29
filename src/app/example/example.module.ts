import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ExampleRoutingModule } from './example-routing.module';
import { ExampleComponent } from './example.component';
import { BankComponent } from './bank.component';
import { heroSwitchComponents } from './hero-switch.components';
import { SizerComponent } from './sizer.component';
import { VoterComponent } from './voter.component';
import { CountdownTimerComponent } from './countdown-timer.component';
import { IntervalDirective } from './interval.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  imports: [SharedModule, ExampleRoutingModule],
  declarations: [ExampleComponent, BankComponent, heroSwitchComponents, SizerComponent,
    VoterComponent, CountdownTimerComponent, IntervalDirective, UnlessDirective]
})
export class ExampleModule {
}
