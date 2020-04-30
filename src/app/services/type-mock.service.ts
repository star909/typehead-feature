import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Repo } from '../shared/models/repo';
import { User } from '../shared/models/user';
import { apiUrl } from '../entities/constant';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TypeMockService {

  constructor(private http: HttpClient) { }


  getRepoApidata(repoUrl: string, data: string): Observable<Repo> {

    return this.http.get<any>(apiUrl.url + repoUrl + data)
      .pipe(retry(1), catchError(this.handleError));
  }

  getUserApidata(repoUrl: string, data: string): Observable<User> {
    return this.http.get<any>(apiUrl.url + repoUrl + data)
      .pipe(retry(1), catchError(this.handleError));

  }

  handleError(error: HttpErrorResponse): any {
    return throwError(error.message)
  }
}
