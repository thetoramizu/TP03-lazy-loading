import { Component, OnInit } from '@angular/core';
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

  constructor(
    private filmService: FilmService,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {

    this.filmService.getFilms().subscribe((films: Film[]) => {
      this.listFilms = films
    });
  }


  emptyBasket(){
    this.listInCart = [];
  }

  addToCart(film: Film){
    // TODO si déjà existant ??
    this.listInCart.push(film);
  }

  deleteFilm(film: Film){
    const index = this.listInCart.indexOf(film);
    this.listInCart.splice(index, 1);
  }

  validateCart(){
    // Jsonner les data
    console.log(...this.listInCart);
    const datasJson = {...this.listInCart}
    this.cartService.validateCart(datasJson);

  }

}
