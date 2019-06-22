import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Reports } from './models/reports.model';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DppaService {
  private endpoints = {
    resultado: 'https://dppa.lexiumonline.com/api_v1/resultados/individual',
    alumno: 'https://dppa.lexiumonline.com/api_v1/alumno'
  };

  /*private endpoints = {
    resultado: '/api_v1/resultados/individual',
    alumno: '/api_v1/alumno'
  };*/

  constructor(private http: HttpClient) { }

  getStudent(userId: string): Observable<Reports>  {
    const httpOptions = {
      headers: new HttpHeaders().append('LEXIUM-API-KEY', 'a0a175e21997eaa7dafb96981b2f605f'),
      params: new HttpParams().set('lexium_id', userId)
    };
    return this.http.get<Reports>(`${this.endpoints.alumno}`, httpOptions)
    .pipe(
      tap(
        data => console.log(data),
        error => this.handleError(error)
      )
    );
  }

  getSkillsReport(userId: string): Observable<Reports>  {
    const httpOptions = {
      headers: new HttpHeaders({
        'LEXIUM-API-KEY': 'a0a175e21997eaa7dafb96981b2f605f',
      }),
      params: new HttpParams().set('lexium_id', userId),
      withCredentials: true
    };
    return this.http.get<Reports>(`${this.endpoints.resultado}`, httpOptions)
    .pipe(
      tap(
        data => console.log(data),
        error => this.handleError(error)
      )
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
