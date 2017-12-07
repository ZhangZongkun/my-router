import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroFormComponent } from './hero-form.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: HeroFormComponent}
  ])]
})
export class MyformRoutingModule {
}
