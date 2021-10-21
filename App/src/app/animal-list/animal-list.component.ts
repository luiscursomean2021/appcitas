import { Component, OnInit } from '@angular/core';

//Interfaces
import { Animal } from '../Core/Interfaces/Animal';
import { User } from '../Core/Interfaces/User';

//Servicios
import { AnimalService } from '../Core/Services/Animal.service'
import { UsersService } from '../Core/Services/users.service'

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  listaAnimales: Animal[] = [];
  userData!: User;
  listaAnimalesUser: Animal[] = [];

  constructor(private animalService: AnimalService, private userService: UsersService) { }

  ngOnInit(): void {
    this.getUser();
  }

  //Obtenemos los datos del usuario
  getUser() {
    let token: any = sessionStorage.getItem("token");
    if (token != null) {
      token = JSON.parse(atob(token.split('.')[1]));
    }
    let idUser = token.id;

    this.userService.findUserById(idUser).subscribe(data => {
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
      this.listaAnimalesUser = data;
      this.listaAnimalesSinBloqueos();
    },
      (error) => {
        console.log(error);
      }
    );
  }

  //Filtrado de lista de animales
  listaAnimalesSinBloqueos() {
    if (this.userData !== undefined) {
      for (let i = 0; i < this.userData.bloqueos.length; i++) {
        for (let j = 0; j < this.listaAnimales.length; j++) {
          if (this.userData.bloqueos[i] == this.listaAnimales[j]._id) {
            this.listaAnimalesUser.splice(j, 1);
          }
        }
      }
    }
  }

  //Añadir a la lista de Bloqueos
  addBloqueos(i: number) {
    this.listaAnimalesUser.splice(i, 1);
  }

  //Añadir a la lista de Favoritos
  addFavoritos(idAnimal: string) {
    // let updateUser = this.userData.favoritos.push(idAnimal)
    // this.userService.editUser(this.userData._id, updateUser)
  }

}
