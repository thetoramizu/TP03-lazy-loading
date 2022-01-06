import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AngularComponent} from "./composants-enfants/angular/angular.component";
import {VueComponent} from "./composants-enfants/vue/vue.component";
import {ReactComponent} from "./composants-enfants/react/react.component";
import {FwLandingPageComponent} from "./composants/fw-landing-page/fw-landing-page.component";

export const routesFw: Routes = [
  {
    path: '',
    // component: FwLandingPageComponent,
    children: [
      {path: 'angular-13', component: AngularComponent},
      {path: 'react', component: ReactComponent},
      {path: 'vue', component: VueComponent},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routesFw)],
  exports: [RouterModule]
})
export class FrameworksRoutingModule {
}
