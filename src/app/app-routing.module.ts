import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  {path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule'},
  {path: 'contact', loadChildren: 'app/contact/contact.module#ContactModule'},
  {path: 'example', loadChildren: 'app/example/example.module#ExampleModule'},
  {path: 'ad', loadChildren: 'app/ad/ad.module#AdModule'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
