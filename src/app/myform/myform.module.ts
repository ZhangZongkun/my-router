import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MyformRoutingModule } from './myform-routing.module';
import { KeyupComponent } from './keyup.component';
import { HeroFormComponent } from './hero-form.component';
import { FormTemplateComponent } from './form-template.component';

@NgModule({
  imports: [SharedModule, MyformRoutingModule],
  declarations: [KeyupComponent, HeroFormComponent, FormTemplateComponent]
})
export class MyformModule {
}
