import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Researchers } from './researchers';

@Injectable({
  providedIn: 'root'
})
export class ResearchersService {

  private apiURL = "http://127.0.0.1:8000/api/orcid";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(page: number, perPage: number): Observable<Researchers[]> {
   return this.httpClient.get<Researchers[]>(this.apiURL + "/list?page=" + page + "&perPage=$"+ perPage)
   .pipe(
     catchError(this.errorHandler)
   )
   console.log(page);
 }

 create(researchers: any): Observable<Researchers> {
   return this.httpClient.post<Researchers>(this.apiURL + "/form", JSON.stringify(researchers), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(orcid: string): Observable<Researchers> {
   return this.httpClient.get<Researchers>(this.apiURL + "/" + orcid)
   .pipe(
     catchError(this.errorHandler)
   )
 }

//  update(id: string, researchers: any): Observable<Researchers> {
//    return this.httpClient.put<Researchers>(this.apiURL + id, JSON.stringify(researchers), this.httpOptions)
//    .pipe(
//      catchError(this.errorHandler)
//    )
//  }

 delete(orcid: string){
   return this.httpClient.delete<Researchers>(this.apiURL + "/delete/" + orcid, this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
   let errorMessage = '';
   if(error.error instanceof ErrorEvent) {
     errorMessage = error.error.message;
   } else {
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   return throwError(errorMessage);
 }
}
