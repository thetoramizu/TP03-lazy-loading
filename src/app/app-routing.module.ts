import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./webApp/root/accueil/home/home.component";
import {ListeDesFilmsComponent} from "./webApp/root/film/liste-des-films/liste-des-films.component";
import {FwLandingPageComponent} from "./webApp/root/frameworks/composants/fw-landing-page/fw-landing-page.component";
import {routesFw} from "./webApp/root/frameworks/frameworks-routing.module";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home-page', component: HomeComponent},
  { path: 'liste-des-films', component: ListeDesFilmsComponent},
  { path: 'liste-des-frameworks', component: FwLandingPageComponent, children: routesFw },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
