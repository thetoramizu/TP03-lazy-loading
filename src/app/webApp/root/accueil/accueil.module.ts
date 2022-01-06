import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {RouterModule} from "@angular/router";
import {FilmModule} from "../film/film.module";
import {MaterialModule} from "../../../../assets/variables-globales/material/material.module";



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
        // FrameworksModule,
        MaterialModule,
    ]
})
export class AccueilModule { }
