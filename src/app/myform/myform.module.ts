import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MyformRoutingModule } from './myform-routing.module';
import { HeroFormComponent } from './hero-form.component';

@NgModule({
  imports: [SharedModule, MyformRoutingModule],
  declarations: [HeroFormComponent]
})
export class MyformModule {
}
