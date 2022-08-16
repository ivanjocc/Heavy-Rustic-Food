import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselComponent } from './carousel/carousel.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { PerritosComponent } from './perritos/perritos.component';
import { WingsComponent } from './wings/wings.component';
import { PapaComponent } from './papa/papa.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HamburgerComponent,
    PerritosComponent,
    WingsComponent,
    PapaComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
