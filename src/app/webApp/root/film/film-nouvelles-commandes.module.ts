import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListeDesFilmsComponent} from './liste-des-films/liste-des-films.component';
import {HttpClientModule} from "@angular/common/http";
import {firebaseConfig} from "../../../../environments/environment";
import {MaterialModule} from "../../../../assets/variables-globales/material/material.module";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";

// Valable pour FireBase 7+
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

    // Initialisation de la connexion (via constante dans environment.ts)
    provideFirebaseApp(
    () => initializeApp(firebaseConfig),
      provideFirestore(
        () => getFirestore()
      )

)

  ],
  exports: [
    ListeDesFilmsComponent
  ]
})
export class FilmModule {
}
