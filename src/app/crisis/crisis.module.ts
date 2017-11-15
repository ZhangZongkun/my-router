import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisRoutingModule } from './crisis-routing.module';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisService } from './crisis.service';

@NgModule({
  imports: [CommonModule, CrisisRoutingModule],
  declarations: [CrisisListComponent, CrisisDetailComponent],
  providers: [CrisisService]
})
export class CrisisModule {
}