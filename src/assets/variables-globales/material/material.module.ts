import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatButtonModule} from '@angular/material/button';
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";


@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    // MatNativeDateModule,
    MatButtonModule
  ],
  exports: [
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  providers:[
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'}
  ]

})


export class MaterialModule {
}
