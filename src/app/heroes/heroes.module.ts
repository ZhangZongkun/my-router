import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroRoutingModule } from './heroes-routing.module';
import { HeroListComponent } from './hero-list.component';

@NgModule({
  imports: [CommonModule, FormsModule, HeroRoutingModule],
  declarations: [HeroListComponent],
  providers: []
})
export class HeroesModule {
}
