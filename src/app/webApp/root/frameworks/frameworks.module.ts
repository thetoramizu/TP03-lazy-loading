import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrameworksRoutingModule } from './frameworks-routing.module';
import { FwLandingPageComponent } from './composants/fw-landing-page/fw-landing-page.component';
import { FwHeaderComponent } from './composants/fw-header/fw-header.component';
import { FwHomeComponent } from './composants/fw-home/fw-home.component';
import { FwFooterComponent } from './composants/fw-footer/fw-footer.component';
import { AngularComponent } from './composants-enfants/angular/angular.component';
import { ReactComponent } from './composants-enfants/react/react.component';
import { VueComponent } from './composants-enfants/vue/vue.component';


@NgModule({
  declarations: [
    FwLandingPageComponent,
    FwHeaderComponent,
    FwHomeComponent,
    FwFooterComponent,
    AngularComponent,
    ReactComponent,
    VueComponent
  ],
  imports: [
    CommonModule,
    FrameworksRoutingModule
  ],
  exports: [
    FwLandingPageComponent,
    FwHeaderComponent,
    FwHomeComponent,
    FwFooterComponent,
    AngularComponent,
    ReactComponent,
    VueComponent
  ]
})
export class FrameworksModule { }
