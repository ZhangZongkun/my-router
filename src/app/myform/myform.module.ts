import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { MyformRoutingModule } from './myform-routing.module';
import { KeyupComponent } from './keyup.component';
import { HeroFormComponent } from './hero-form.component';
import { FormTemplateComponent } from './form-template.component';
import { FormReactiveComponent } from './form-reactive.component';

@NgModule({
  imports: [SharedModule, ReactiveFormsModule, MyformRoutingModule],
  declarations: [KeyupComponent, HeroFormComponent, FormTemplateComponent,
    FormReactiveComponent]
})
export class MyformModule {
}
