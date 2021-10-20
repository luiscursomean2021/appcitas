import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  private URL_CHAT = "http://localhost:8080";
  private socket = io.io(this.URL_CHAT, {
    withCredentials: true,
  });

  joinRoom(data:any) {
    this.socket.emit("join", data);
  }

  newUserJoined() {
    let observable = new Observable<{user:String, message:String}>(observer => {
      this.socket.on("new user joined", (data) => {
        observer.next(data);
      });
      return () => {this.socket.disconnect();}
    });

    return observable;
  }

  leaveRoom(data:any) {
    this.socket.emit("leave", data);
  }

  userLeftRoom() {
    let observable = new Observable<{user:String, message:String}>(observer => {
      this.socket.on("left room", (data) => {
        observer.next(data);
      });
      return () => {this.socket.disconnect();};
    });

    return observable;
  }

  sendMessage(data:any) {
    this.socket.emit("message", data);
  }

  newMessageReceived() {
    let observable = new Observable<{user:String, message:String}>(observer => {
      this.socket.on("new message", (data) => {
        observer.next(data);
      });
      return () => {this.socket.disconnect();}
    });

    return observable;
  }

}
