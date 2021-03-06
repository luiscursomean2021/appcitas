import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Animal } from '../Interfaces/Animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  urlBase = `${environment.urlAnimales}`;

  constructor(private http: HttpClient) { }

  getAnimales(): Observable<any> {
    return this.http.get(this.urlBase).pipe(
      map(res => res),
      catchError(e => e)
    );
  }

  getAnimal(id: string): Observable<any> {
    let url = this.urlBase + id;
    return this.http.get(url).pipe(
      map(res => {
        console.log(res);
        return res;
      }),
      catchError(e => e)
    );
  }

  create(animal: Animal): Observable<any> {
    console.log(animal)
    return this.http.post(this.urlBase,animal,{ responseType: 'json' }).pipe(
      catchError(e => {
        console.log(e);
        return throwError(e)
      })
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