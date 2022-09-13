import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class GenericService<T> {
  constructor(private http: HttpClient, public dialog: MatDialog) {}

  //-------------GENERIC API--------------//
  //GET
  getGeneric(url: string, queryString: string): Observable<T> {
    return this.http.get<T>(url + queryString).pipe(
      retry(1),
      catchError((error) => throwError(() => error))
    );
  }

  //CREATE
  createGeneric(url: string, item: T): Observable<T> {
    return this.http.post<T>(url, item).pipe(
      retry(1),
      catchError((error) => throwError(() => error))
    );
  }

  //PUT
  updateGeneric(url: string, item: T): Observable<T> {
    return this.http.put<T>(url, item).pipe(
      retry(1),
      catchError((error) => throwError(() => error))
    );
  }

  //DELETE
  removeGeneric(url: string): Observable<T> {
    return this.http.delete<T>(url).pipe(
      retry(1),
      catchError((error) => throwError(() => error))
    );
  }
}
