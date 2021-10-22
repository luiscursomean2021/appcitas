import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IChat } from '../models/IChat';

@Injectable({
  providedIn: 'root'
})
export class ListadoChatService {

  private URL_LISTADO = "http://localhost:4000/chat";

  constructor(private http:HttpClient) { }

  getListado():Observable<any> {
    let id:any = sessionStorage.getItem("token");
    id = JSON.parse(atob(id.split(".")[1]));
    let url = `${this.URL_LISTADO}/${id}`;
    return this.http.get(this.URL_LISTADO).pipe(
      map(res => res),
      catchError(e => e)
    );
  }

  eliminarChat(chat:IChat):Observable<any> {
    let url = `${this.URL_LISTADO}/${chat.id_chat}`;
    return this.http.delete(url).pipe(
      map(res => res),
      catchError(e => e)
    );
  }

}
