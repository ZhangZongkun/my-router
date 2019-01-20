import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  {path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule'},
  {path: 'contact', loadChildren: 'app/contact/contact.module#ContactModule'},
  {path: 'example', loadChildren: 'app/example/example.module#ExampleModule'},
  {path: 'form', loadChildren: 'app/myform/myform.module#MyformModule'},
  {path: 'ad', loadChildren: 'app/ad/ad.module#AdModule'},
  {path: 'http', loadChildren: 'app/http/http.module#HttpModule'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
