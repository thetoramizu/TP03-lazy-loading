import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {RouterModule} from "@angular/router";
import {FilmModule} from "../film/film.module";
import {FrameworksModule} from "../frameworks/frameworks.module";



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LandingPageComponent
  ],
  exports: [
    LandingPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    // Import de nos modules
    FilmModule,
    FrameworksModule,
  ]
})
export class AccueilModule { }
