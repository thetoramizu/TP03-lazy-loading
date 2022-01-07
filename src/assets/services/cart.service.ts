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
   * @param datas liste films en json
   */
  public validateCart(datas: any) {

    this._firestore.collection('cart').add(datas).then(res => console.log(res));

  }

}
