import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdRoutingModule } from './ad-routing.module';
import { AdComponent } from './ad.component';
import { AdDirective } from './ad.directive';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdService } from './ad.service';
import { AdBannerComponent } from './ad-banner.component';

@NgModule({
  imports: [CommonModule, AdRoutingModule],
  declarations: [AdComponent, HeroJobAdComponent, HeroProfileComponent, AdBannerComponent,
    AdDirective],
  entryComponents: [HeroJobAdComponent, HeroProfileComponent],
  providers: [AdService]
})
export class AdModule {
}
