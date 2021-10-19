import { Injectable } from '@angular/core';
import {Subject, Observer, Observable, observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor() { }

  private subject:Subject<MessageEvent>;

  public connect(url):Subject<MessageEvent> {
    if(!this.subject) {
      this.subject = this.create(url);
      console.log("Conectado correctamente: " + url);
    }
    return this.subject;
  }

  private create(url):Subject<MessageEvent> {
    let ws = new WebSocket(url);

    let observable = new Observable<MessageEvent>()
  }
}
