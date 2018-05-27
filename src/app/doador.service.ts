import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Doador } from './models/doador';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DoadorService {

  private doadoresUrl = 'https://casadocaminhoserver.herokuapp.com/doadores';

  constructor(private http: HttpClient) { }

  /** GET Doador by id */
  getById(id: number): Observable<Doador> {
    const url = `${this.doadoresUrl}/${id}`;
    return this.http.get<Doador>(url).pipe(
      tap(_ => this.log(`fetched Doador id=${id}`)),
      catchError(this.handleError<Doador>(`getDoador id=${id}`))
    );
  }

  getByDocumento(documento: String): Observable<Doador> {
    const url = `${this.doadoresUrl}/documento/${documento}`;
    return this.http.get<Doador>(url).pipe(
      tap(_ => this.log(`fetched Doador documento=${documento}`)),
      catchError(this.handleError<Doador>(`getDoador documento=${documento}`))
    );
  }

  /** GET voluntarios from the server */
  getAll (): Observable<Doador[]> {
    return this.http.get<Doador[]>(this.doadoresUrl)
      .pipe(
        tap(_ => this.log(`fetched doador`)),
        catchError(this.handleError('getDoador', []))
      );
  }

  add (doador: Doador): Observable<Doador> {
    return this.http.post<Doador>(this.doadoresUrl, doador, httpOptions)
      .pipe(
        tap(_ => this.log('Doador cadastraso')),
        catchError(this.handleError<Doador>('addDoador'))
      );
  }

  update (doador: Doador): Observable<Doador> {
    return this.http.put(this.doadoresUrl, doador, httpOptions)
    .pipe(
      tap(_ => this.log(`updated Doador id=${doador.id}`)),
      catchError(this.handleError<any>('updateDoador'))
    );
  }

  delete (id: number): Observable<Doador> {
    const url = `${this.doadoresUrl}/${id}`;

    return this.http.delete<Doador>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted Doador id=${id}`)),
      catchError(this.handleError<Doador>('deleteDoador'))
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
