import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./webApp/root/accueil/home/home.component";
import {ListeDesFilmsComponent} from "./webApp/root/film/liste-des-films/liste-des-films.component";
import {FwLandingPageComponent} from "./webApp/root/frameworks/composants/fw-landing-page/fw-landing-page.component";
import {routesFw} from "./webApp/root/frameworks/frameworks-routing.module";
import {FormControlComponent} from "./webApp/root/form-control/form-control.component";
import {FormGroupComponent} from "./webApp/root/form-group/form-group.component";
import {FormArrayComponent} from "./webApp/root/form-array/form-array.component";
const test = import('./webApp/root/frameworks/frameworks.module');

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home-page', component: HomeComponent},
  { path: 'liste-des-films', component: ListeDesFilmsComponent},

  // 1ere méthode avec import des routes renommé et du module ( ! lazy loading)
  // { path: 'liste-des-frameworks', component: FwLandingPageComponent, chialdren: routesFw },

  //2eme méthode: Lazy Loading
  // { path: 'liste-des-frameworks', component: FwLandingPageComponent,
  //   loadChildren: () => import('./webApp/root/frameworks/frameworks.module').then((module) => module.FrameworksModule) },

  //3ème méthode: LAZY LOADING avec async/await
  { path: 'liste-des-frameworks', component: FwLandingPageComponent,
    loadChildren: async () => (await (test) ).FrameworksModule },

  { path: 'form-control', component: FormControlComponent},
  { path: 'form-group', component: FormGroupComponent},
  { path: 'form-array', component: FormArrayComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
