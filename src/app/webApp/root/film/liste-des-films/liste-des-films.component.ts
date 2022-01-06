import { Component, OnInit } from '@angular/core';
import {FilmService} from "../film.service";
import {Film} from "../../../../../assets/class/film";

@Component({
  selector: 'app-liste-des-films',
  templateUrl: './liste-des-films.component.html',
  styleUrls: ['./liste-des-films.component.scss']
})
export class ListeDesFilmsComponent implements OnInit {

  // properties
  public listFilms: Film[] = [];

  constructor(
    private filmService: FilmService
  ) { }

  ngOnInit(): void {

    this.filmService.getFilms().subscribe((films: Film[]) => {
      this.listFilms = films
    });
  }

}
