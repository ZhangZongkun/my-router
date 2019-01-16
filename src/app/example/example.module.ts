import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ExampleRoutingModule } from './example-routing.module';
import { ExampleComponent } from './example.component';
import { BankComponent } from './bank.component';
import { heroSwitchComponents } from './hero-switch.components';
import { SizerComponent } from './sizer.component';
import { VoterComponent } from './voter.component';
import { CountdownTimerComponent } from './countdown-timer.component';
import { VersionChildComponent } from './version-child.component';
import { NameChildComponent } from './name-child.component';
import { AsyncMessageComponent } from './async-message.component';
import { IntervalDirective } from './interval.directive';
import { UnlessDirective } from './unless.directive';
import { ExponentPipe } from './exponent.pipe';
import { FetchJsonPipe } from './fetch-json.pipe';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MissionComponent } from './mission/mission.component';
import { AstronautComponent } from './mission/astronaut.component';

@NgModule({
  imports: [SharedModule, ExampleRoutingModule],
  declarations: [ExampleComponent, BankComponent, heroSwitchComponents, SizerComponent,
    VoterComponent, CountdownTimerComponent, VersionChildComponent, NameChildComponent,
    AsyncMessageComponent, IntervalDirective, UnlessDirective, ExponentPipe, FetchJsonPipe, HeroDetailComponent, MissionComponent, AstronautComponent]
})
export class ExampleModule {
}
