import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdComponent } from './ad.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AdComponent}
  ])],
  exports: [RouterModule]
})
export class AdRoutingModule {
}
