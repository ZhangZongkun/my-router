import { NgModule } from '@angular/core';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactService } from './contact.service';

@NgModule({
  imports: [ContactRoutingModule],
  declarations: [ContactComponent],
  providers: [ContactService]
})
export class ContactModule {
}
