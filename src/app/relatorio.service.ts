import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Familiar } from './models/familiar';

@Injectable()
export class RelatorioService {

  private relatoriosUrl = 'https://casadocaminhoserver.herokuapp.com/relatorios';

  constructor(private http: HttpClient) { }

  buscarFamiliares(familiar: Familiar): Observable<Familiar[]> {
    const url = `${this.relatoriosUrl}/familiar/${familiar.idade}/${familiar.tamanhoCalcado}`;
    return this.http.get<Familiar[]>(url)
      .pipe(
        tap(_ => this.log(`fetched familiar`)),
        catchError(this.handleError('buscarFamiliar', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
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
    console.log('RelatorioService: ' + message);
  }

}
