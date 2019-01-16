import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactService } from './contact.service';
import { ZippyComponent } from './zippy/zippy.component';

@NgModule({
  imports: [SharedModule, ContactRoutingModule],
  declarations: [ContactComponent, ZippyComponent],
  providers: [ContactService]
})
export class ContactModule {
}
