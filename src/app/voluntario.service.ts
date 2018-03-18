import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Voluntario } from './voluntarios/voluntario';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class VoluntarioService {

  private voluntariosUrl = 'http://localhost:8080/voluntarios/';

  constructor(private http: HttpClient) { }

  /** GET voluntarios from the server */
  getVoluntarios (): Observable<Voluntario[]> {
    return this.http.get<Voluntario[]>(this.voluntariosUrl)
      .pipe(
        tap(voluntarios => this.log(`fetched voluntarios`)),
        catchError(this.handleError('getvoluntarios', []))
      );
  }

  addVoluntario (voluntario: Voluntario): Observable<Voluntario> {
    return this.http.post<Voluntario>(this.voluntariosUrl, voluntario, httpOptions)
      .pipe(
        tap(voluntarios => this.log('voluntario cadastraso')),
        catchError(this.handleError<Voluntario>('addHero'))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log('HeroService: ' + message);
  }

}
