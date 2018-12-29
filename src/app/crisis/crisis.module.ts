import { NgModule } from '@angular/core';

import { CrisisRoutingModule } from './crisis-routing.module';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisService } from './crisis.service';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule, CrisisRoutingModule],
  declarations: [CrisisCenterComponent, CrisisListComponent, CrisisDetailComponent, CrisisCenterComponent],
  providers: [CrisisService]
})
export class CrisisModule {
}
