import { Injectable } from '@angular/core';
import {Film} from "../class/film";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
// Necessite Firestore pour manipuler les datas
export class CartService {

  constructor(
    private _firestore: AngularFirestore
  ) { }


  /**
   * Ajouter le panier à firestore
   * @param filmsJson liste films en json
   */
  public validateCart(filmsJson: any) {
    // this._firestore.collection('cart').add(filmsJson).then(res => console.log(res));

    return new Promise(
      (resolve, reject) => {
        this._firestore.collection('cart').add(filmsJson).then(res =>
        {resolve(res)},
            err => {reject(err)});
      }
    )
  }

  /**
   * Recupere les commandes depuis le firestore
   */
  public getCommandes() {
    // snapchotChanges = temps reel
    return this._firestore.collection('cart').snapshotChanges()
  }

  /**
   * Supprime une commande du firestore
   * @param idCommande document commande
   */
  public deleteCommande(idCommande: any) {
    // return null
    return this._firestore.collection('cart').doc(idCommande).delete();
  }

  // public supp = (document: any) => {
  //   return this._firestore.collection('cart').doc()
  // }

}
