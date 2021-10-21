import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-chats',
  templateUrl: './listado-chats.component.html',
  styleUrls: ['./listado-chats.component.css']
})
export class ListadoChatsComponent implements OnInit {

  private idUsuario:String;
  private token:any;

  constructor() {
    this.token = sessionStorage.getItem("token");
    this.token = JSON.parse(atob(this.token.split('.')[1]));
    console.log(this.token);
    this.idUsuario = this.token.id;
    console.log(this.idUsuario);
  }

  ngOnInit(): void {
  }

}
