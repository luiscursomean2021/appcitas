import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  title = "Titulo";
  user:String = "";
  room:String = "";
  messageText:String = "";
  messageArray: Array<{user:String, message:String}> = [];

  constructor(private servicioChat:ChatService) {
    this.servicioChat.newUserJoined()
      .subscribe(data => this.messageArray.push(data));
    
    this.servicioChat.userLeftRoom()
      .subscribe(data => this.messageArray.push(data));

    this.servicioChat.newMessageReceived()
      .subscribe(data => this.messageArray.push(data));
  }

  join() {
    this.servicioChat.joinRoom({user: this.user, room: this.room});
  }

  leave() {
    this.servicioChat.leaveRoom({user:this.user, room:this.room});
  }

  sendMessage() {
    this.servicioChat.sendMessage({user:this.user, room:this.room, message:this.messageText});
  }

  ngOnInit(): void {
  }

}
