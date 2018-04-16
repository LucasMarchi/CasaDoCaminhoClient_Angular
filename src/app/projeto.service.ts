import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Projeto } from './models/projeto';
import { Voluntario } from './models/voluntario';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProjetoService {

  private projetoesUrl = 'http://localhost:8080/projetos';

  constructor(private http: HttpClient) { }

  /** GET Projeto by id */
  getById(id: number): Observable<Projeto> {
    const url = `${this.projetoesUrl}/${id}`;
    return this.http.get<Projeto>(url).pipe(
      tap(_ => this.log(`fetched Projeto id=${id}`)),
      catchError(this.handleError<Projeto>(`getProjeto id=${id}`))
    );
  }

  /** GET voluntarios from the server */
  getAll (): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(this.projetoesUrl)
      .pipe(
        tap(_ => this.log(`fetched projeto`)),
        catchError(this.handleError('getProjeto', []))
      );
  }

  getVoluntariosNaoAssociados (id: number): Observable<Voluntario[]> {
    const url = `${this.projetoesUrl}/${id}/voluntarios/naoassociados`;
    return this.http.get<Voluntario[]>(url)
      .pipe(
        tap(_ => this.log(`fetched voluntarios nao associados`)),
        catchError(this.handleError('getVoluntariosNaoAssociados', []))
      );
  }

  add (projeto: Projeto): Observable<Projeto> {
    return this.http.post<Projeto>(this.projetoesUrl, projeto, httpOptions)
      .pipe(
        tap(_ => this.log('Projeto cadastraso')),
        catchError(this.handleError<Projeto>('addProjeto'))
      );
  }

  update (projeto: Projeto): Observable<Projeto> {
    return this.http.put(this.projetoesUrl, projeto, httpOptions)
    .pipe(
      tap(_ => this.log(`updated Projeto id=${projeto.id}`)),
      catchError(this.handleError<any>('updateProjeto'))
    );
  }

  delete (id: number): Observable<Projeto> {
    const url = `${this.projetoesUrl}/${id}`;

    return this.http.delete<Projeto>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted Projeto id=${id}`)),
      catchError(this.handleError<Projeto>('deleteProjeto'))
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
