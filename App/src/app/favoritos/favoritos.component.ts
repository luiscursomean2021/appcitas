import { Component, OnInit } from '@angular/core';

//Interfaces
import { Animal } from '../Core/Interfaces/Animal';
import { User } from '../Core/Interfaces/User';

//Servicios
import { AnimalService } from '../Core/Services/Animal.service'
import { UserService } from '../Core/Services/User.service'

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})


export class FavoritosComponent implements OnInit {
  listaAnimales: Animal[] = [];
  userData!: User;
  listaFavoritos: Animal[] = [];

  constructor(private animalService: AnimalService, private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  //Obtenemos los datos del usuario
  getUser() {
    let idUser = sessionStorage.getItem('idUser'); //TODO
    this.userService.getUser(idUser).subscribe(data => {
      this.userData = data;
      this.getAnimales();
    },
      (error) => {
        console.log(error);
      }
    );
  }

  //Obtenemos la lista de animales
  getAnimales() {
    this.animalService.getAnimales().subscribe(data => {
      this.listaAnimales = data;
      this.listaFavoritos = data;
      this.listaAnimalesFavoritos();
    },
      (error) => {
        console.log(error);
      }
    );
  }

  //Filtrado de animales favoritos
  listaAnimalesFavoritos() {
    if (this.userData !== undefined) {
      for (let i = 0; i < this.listaAnimales.length; i++) {
        for (let j = 0; j <  this.userData.favoritos.length; j++) {
          if (this.listaAnimales[i]._id !== this.userData.favoritos[j]) {
            this.listaFavoritos.splice(j, 1);
          }
        }
      }
    }
  }

  //Quitar de la lista de Favoritos
  delFavoritos(idAnimal: string) {
    let updateUser = this.userData.favoritos.splice(idAnimal) //TODO eliminar de favoritos del usuario una pos
    this.userService.updateUser(this.userData._id, updateUser).subscribe(() => {
      this.listaAnimalesFavoritos();
    })
  }

}

