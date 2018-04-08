import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Voluntario } from './models/voluntario'; './voluntarios/voluntario';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class VoluntarioService {

  private voluntariosUrl = 'http://localhost:8080/voluntarios';

  constructor(private http: HttpClient) { }

  /** GET voluntario by id */
  getVoluntario(id: number): Observable<Voluntario> {
    const url = `${this.voluntariosUrl}/${id}`;
    return this.http.get<Voluntario>(url).pipe(
      tap(_ => this.log(`fetched voluntario id=${id}`)),
      catchError(this.handleError<Voluntario>(`getVoluntario id=${id}`))
    );
  }

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
        catchError(this.handleError<Voluntario>('addVoluntario'))
      );
  }

  updateVoluntario (voluntario: Voluntario): Observable<Voluntario> {
    return this.http.put(this.voluntariosUrl, voluntario, httpOptions)
    .pipe(
      tap(_ => this.log(`updated voluntario id=${voluntario.id}`)),
      catchError(this.handleError<any>('updateVoluntario'))
    );
  }

  deleteVoluntario (id: number): Observable<Voluntario> {
    const url = `${this.voluntariosUrl}/${id}`;

    return this.http.delete<Voluntario>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted voluntario id=${id}`)),
      catchError(this.handleError<Voluntario>('deleteVoluntario'))
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
