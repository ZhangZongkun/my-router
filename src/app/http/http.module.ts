import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ConfigComponent } from './config/config.component';
import { HttpRoutingModule } from './http-routing.module';
import { ConfigService } from './config/config.service';

@NgModule({
  declarations: [ConfigComponent],
  imports: [
    SharedModule, HttpRoutingModule
  ],
  providers: [ConfigService]
})
export class HttpModule {
}
