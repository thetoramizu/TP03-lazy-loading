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

  // 1ere méthode avec import des routes renommé et du module ( ! lazy loading)
  // { path: 'liste-des-frameworks', component: FwLandingPageComponent, chialdren: routesFw },

  //2eme méthode: Lazy Loading
  // { path: 'liste-des-frameworks', component: FwLandingPageComponent,
  //   loadChildren: () => import('./webApp/root/frameworks/frameworks.module').then((module) => module.FrameworksModule) },

  //3ème méthode: LAZY LOADING avec async/await
  { path: 'liste-des-frameworks', component: FwLandingPageComponent,
    loadChildren: async () => (await  import('./webApp/root/frameworks/frameworks.module')).FrameworksModule },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
