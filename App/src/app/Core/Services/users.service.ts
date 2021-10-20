import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient, private route: Router) { }

  url = "http://localhost:8080/";
  
  getUsers():Observable<any> {
    return this.http.get(this.url);
  }

}
