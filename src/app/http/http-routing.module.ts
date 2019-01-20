import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ConfigComponent } from './config/config.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'config', component: ConfigComponent}
  ])],
  exports: [RouterModule]
})
export class HttpRoutingModule {
}
