import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Doacao } from './models/doacao';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DoacaoService {

  private doacoesUrl = 'https://casadocaminhoserver.herokuapp.com/doacoes';

  constructor(private http: HttpClient) { }

  /** GET Doacao by id */
  getById(id: number): Observable<Doacao> {
    const url = `${this.doacoesUrl}/${id}`;
    return this.http.get<Doacao>(url).pipe(
      tap(_ => this.log(`fetched Doacao id=${id}`)),
      catchError(this.handleError<Doacao>(`getDoacao id=${id}`))
    );
  }

  /** GET voluntarios from the server */
  getAll (): Observable<Doacao[]> {
    return this.http.get<Doacao[]>(this.doacoesUrl)
      .pipe(
        tap(_ => this.log(`fetched doacao`)),
        catchError(this.handleError('getDoacao', []))
      );
  }

  add (doacao: Doacao): Observable<Doacao> {
    return this.http.post<Doacao>(this.doacoesUrl, doacao, httpOptions)
      .pipe(
        tap(_ => this.log('Doacao cadastraso')),
        catchError(this.handleError<Doacao>('addDoacao'))
      );
  }

  update (doacao: Doacao): Observable<Doacao> {
    return this.http.put(this.doacoesUrl, doacao, httpOptions)
    .pipe(
      tap(_ => this.log(`updated Doacao id=${doacao.id}`)),
      catchError(this.handleError<any>('updateDoacao'))
    );
  }

  delete (id: number): Observable<Doacao> {
    const url = `${this.doacoesUrl}/${id}`;

    return this.http.delete<Doacao>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted Doacao id=${id}`)),
      catchError(this.handleError<Doacao>('deleteDoacao'))
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
