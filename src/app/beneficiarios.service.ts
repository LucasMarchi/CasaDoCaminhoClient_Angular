import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Beneficiario } from './models/beneficiario';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BeneficiarioService {

  private beneficiariosUrl = 'http://localhost:8080/beneficiarios';

  constructor(private http: HttpClient) { }

  /** GET Beneficiario by id */
  getById(id: number): Observable<Beneficiario> {
    const url = `${this.beneficiariosUrl}/${id}`;
    return this.http.get<Beneficiario>(url).pipe(
      tap(_ => this.log(`fetched Beneficiario id=${id}`)),
      catchError(this.handleError<Beneficiario>(`getBeneficiario id=${id}`))
    );
  }

  /** GET voluntarios from the server */
  getAll (): Observable<Beneficiario[]> {
    return this.http.get<Beneficiario[]>(this.beneficiariosUrl)
      .pipe(
        tap(_ => this.log(`fetched beneficiario`)),
        catchError(this.handleError('getBeneficiario', []))
      );
  }

  add (beneficiario: Beneficiario): Observable<Beneficiario> {
    return this.http.post<Beneficiario>(this.beneficiariosUrl, beneficiario, httpOptions)
      .pipe(
        tap(_ => this.log('Beneficiario cadastraso')),
        catchError(this.handleError<Beneficiario>('addBeneficiario'))
      );
  }

  update (beneficiario: Beneficiario): Observable<Beneficiario> {
    return this.http.put(this.beneficiariosUrl, beneficiario, httpOptions)
    .pipe(
      tap(_ => this.log(`updated Beneficiario id=${beneficiario.id}`)),
      catchError(this.handleError<any>('updateBeneficiario'))
    );
  }

  delete (id: number): Observable<Beneficiario> {
    const url = `${this.beneficiariosUrl}/${id}`;

    return this.http.delete<Beneficiario>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted Beneficiario id=${id}`)),
      catchError(this.handleError<Beneficiario>('deleteBeneficiario'))
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
