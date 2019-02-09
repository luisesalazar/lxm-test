import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Reports } from './models/reports.model';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DppaService {
  private ROOT_URL = '';

  constructor(private http: HttpClient) { }

  getSkillsReport(userId: string): Observable<Reports>  {
    const httpOptions = {
      headers: new HttpHeaders().set('', ''),
      params: new HttpParams().set('', userId)
    };
    return this.http.get<Reports>(`${this.ROOT_URL}`, httpOptions)
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
