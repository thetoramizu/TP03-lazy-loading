import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Film} from "../../../../assets/class/film";
import {map, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class FilmService {

  // injection de dépendances
  constructor(
    private _http: HttpClient,
  ) {

  }

  // Méthode
  // TODO Ecriture alternative ? !!important
  public getFilms = () => {
    const url = 'https://dev.webjs.fr/films.json';
    return this._http.get<Film[]>(url).pipe(
      // pipe pour enchainer plusieurs opérateurs RXJS
      tap(
        (responseHTTP => console.warn ('Depuis le service : ', responseHTTP))
      ),
      map(
        (res: Film[]) => {
          return res.filter(
          (data: Film) => {
            return data.id > 0;
          }
          )
        })
    )
  }


}
