import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Animal } from '../Interfaces/Animal';

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

  getOne(animal: Animal): Observable<any> {
    let url = this.urlBase + animal._id;
    return this.http.get(url).pipe(
      map(res => res),
      catchError(e => e)
    );
  }

  create(animal: Animal): Observable<any> {
    return this.http.post(this.urlBase,animal).pipe(
      map(res => res),
      catchError(e => e)
    );
  }

  update(animal: Animal): Observable<any> {
    let url = this.urlBase + animal._id;
    return this.http.put(url, animal).pipe(
      map(res => res),
      catchError(e => e)
    )
  }
  remove(animal: Animal): Observable<any> {
    let url = this.urlBase + animal._id;
    return this.http.delete(url).pipe(
      map(res => res),
      catchError(e => e)
    )
  }


}