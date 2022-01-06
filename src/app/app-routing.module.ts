import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./webApp/root/accueil/home/home.component";
import {ListeDesFilmsComponent} from "./webApp/root/film/liste-des-films/liste-des-films.component";

const routes: Routes = [
  { path: '',
    component: HomeComponent},
  { path: 'home-page',
    component: HomeComponent},
  { path: 'liste-des-films',
    component: ListeDesFilmsComponent},
  // { path: '' , component: HomeComponent},
  // { path: '' , component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
