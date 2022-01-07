import {Component, OnInit} from '@angular/core';
import {FilmService} from "../film.service";
import {Film} from "../../../../../assets/class/film";
import {CartService} from "../../../../../assets/services/cart.service";

@Component({
  selector: 'app-liste-des-films',
  templateUrl: './liste-des-films.component.html',
  styleUrls: ['./liste-des-films.component.scss']
})
export class ListeDesFilmsComponent implements OnInit {

  // properties
  public listFilms: Film[] = [];
  public listInCart: Film[] = [];
  public listCommandes: any = [];

  constructor(
    private filmService: FilmService,
    private cartService: CartService,
  ) {
  }

  ngOnInit(): void {

    this.filmService.getFilms().subscribe((films: Film[]) => {
      this.listFilms = films
    });
    // datas de firestore
    this.cartService.getCommandes().subscribe(commandes => {
      this.listCommandes = commandes;
    })

  }


  emptyBasket() {
    this.listInCart = [];
  }

  addToCart(film: Film) {
    // TODO si déjà existant ??
    this.listInCart.push(film);
  }

  deleteFilm(film: Film) {
    const index = this.listInCart.indexOf(film);
    this.listInCart.splice(index, 1);
  }

  validateCart() {
    // Jsonner les data
    const datasJson = {...this.listInCart}
    this.cartService.validateCart(datasJson).then(response => {
      console.log(response)
    })
    // Vide le panier
    this.emptyBasket();
  }

  supprCommande(commande: any) {
    this.cartService.deleteCommande(commande.payload.doc.id).then(r => console.log(r));
  }

}
