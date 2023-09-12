import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './ui/nav-bar/nav-bar.component';
import { SliderComponent } from './ui/slider/slider.component';
import { LandingComponent } from './pages/landing/landing.component';
import { CouchsComponent } from './pages/couchs/couchs.component';
import { BedsComponent } from './pages/beds/beds.component';
import { HeadboardsComponent } from './pages/headboards/headboards.component';
import { StoragesComponent } from './pages/storages/storages.component';
import { CardsComponent } from './ui/cards/cards.component';
import { FooterComponent } from './ui/footer/footer.component';
import { CouchsViewComponent } from './pages/couchs-view/couchs-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SliderComponent,
    LandingComponent,
    CouchsComponent,
    BedsComponent,
    HeadboardsComponent,
    StoragesComponent,
    CardsComponent,
    FooterComponent,
    CouchsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
