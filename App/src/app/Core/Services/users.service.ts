import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../Interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient, private route: Router) { }

  url = `${environment.urlUsuarios}`;
  
  getUsers():Observable<any> {
    return this.http.get(this.url)
    .pipe(
      catchError(e => {
        console.log(e);
        return throwError(e);
      })
    );
  }

  insertUser(user:User):Observable<any>{
    return this.http.post(this.url, user, {responseType: "json"})
    .pipe(
      catchError(e => {
        console.log(e);
        return throwError(e);
      })
    );
  }

  deleteUser(id:string):Observable<any>{
    return this.http.delete(this.url + id)
    .pipe(
      catchError(e => {
        console.log(e);
        return throwError(e);
      })
    );
  }

  findUserById(id:string):Observable<any>{
    return this.http.get(this.url + id)
    .pipe(
      catchError(e => {
        console.log(e);
        return throwError(e);
      })
    );
  }

  editUser(user:User):Observable<any>{
    return this.http.put(this.url + user._id, user)
    .pipe(
      catchError(e => {
        console.log(e);
        return throwError(e);
      })
    );
  }
}
