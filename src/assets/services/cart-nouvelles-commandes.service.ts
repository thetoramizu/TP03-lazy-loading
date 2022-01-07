import { Injectable } from '@angular/core';
import {addDoc, collection, Firestore} from "@angular/fire/firestore";

// Valable pour FireBase 7+
@Injectable({
  providedIn: 'root'
})
// Necessite Firestore pour manipuler les datas
export class CartService {

  constructor(
    private _firestore: Firestore
  ) { }


  /**
   * Ajouter le panier à firestore
   * @param filmsJson liste films en json
   */
  public validateCart(filmsJson: any) {

    // this._firestore.collection('cart').add(filmsJson).then(res => console.log(res));


  }

  public addPanier = async (datas: any) => {

    try {
      await addDoc(collection(this._firestore, 'cart'), datas)
    }
    catch (e) {
      console.warn(e)
    }
  }

  /**
   * Recupere les commandes depuis le firestore
   */
  public getCommandes() {
    // snapchotChanges = temps reel
    // return this._firestore.collection('cart').snapshotChanges()
  }

  /**
   * Supprime une commande du firestore
   * @param idCommande document commande
   */
  public deleteCommande(idCommande: any) {
    // return null
    // return this._firestore.collection('cart').doc(idCommande).delete();
  }

  // public supp = (document: any) => {
  //   return this._firestore.collection('cart').doc()
  // }

}
