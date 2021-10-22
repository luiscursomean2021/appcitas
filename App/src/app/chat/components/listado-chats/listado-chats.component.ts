import { Component, OnInit } from '@angular/core';
import { IChat } from '../../models/IChat';
import { ListadoChatService } from '../../services/listado-chat.service';

@Component({
  selector: 'app-listado-chats',
  templateUrl: './listado-chats.component.html',
  styleUrls: ['./listado-chats.component.css']
})
export class ListadoChatsComponent implements OnInit {

  private idUsuario:String;
  private token:any;
  conversaciones:IChat[];

  constructor(private servicioListadoChats:ListadoChatService) {
    this.token = sessionStorage.getItem("token");
    this.token = JSON.parse(atob(this.token.split('.')[1]));
    console.log(this.token);
    this.idUsuario = this.token.id;
    console.log(this.idUsuario);
    this.conversaciones = new Array<IChat>();
    this.servicioListadoChats.getListado().subscribe(data => {
      this.conversaciones = data;
      console.log(this.conversaciones);
    });
    
  }

  ngOnInit(): void {
  }

}
