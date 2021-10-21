import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  urlBase = "http://localhost:8080/animales/";

  constructor(private http: HttpClient) { }

  getAnimales(): Observable<any> {
    return this.http.get(this.urlBase).pipe(
      map(res => res),
      catchError(e => e)
    );
  }

}
