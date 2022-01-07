import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListeDesFilmsComponent} from './liste-des-films/liste-des-films.component';
import {HttpClientModule} from "@angular/common/http";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireModule} from "@angular/fire/compat";
import {firebaseConfig} from "../../../../environments/environment";
import {MaterialModule} from "../../../../assets/variables-globales/material/material.module";


@NgModule({
  declarations: [
    ListeDesFilmsComponent
  ],
  imports: [
    CommonModule,
    // Important !!!
    HttpClientModule,
    MaterialModule,
    // Liaison vers l'autre store (firestore)
    AngularFirestoreModule,
    // Initialisation de la connexion (via constante dans environment.ts)
    AngularFireModule.initializeApp(firebaseConfig),

  ],
  exports: [
    ListeDesFilmsComponent
  ]
})
export class FilmModule {
}
