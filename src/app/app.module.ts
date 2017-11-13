import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeroesModule } from './heroes/heroes.module';
import { ContactModule } from './contact/contact.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [BrowserModule, FormsModule, HttpModule, HeroesModule, ContactModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
