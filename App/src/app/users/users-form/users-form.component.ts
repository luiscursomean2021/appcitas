import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Core/Interfaces/User';
import { UsersService } from 'src/app/Core/Services/users.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent {
  
  user!: User;
  formGroup!: FormGroup;
  newUser: boolean = true;

  constructor(private userService:UsersService, private route:ActivatedRoute, private router:Router, private formBuilder: FormBuilder) {
    this.populateNewUser();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.populateNewUser();
      //Editar
      if(typeof params.id !== "undefined") {
        this.userService.findUserById(params.id).subscribe(data => {
          if(data._id === params.id) {
            this.newUser = false;
            this.user = data;
            this.buildUserForm();
          } else {
            this.router.navigate(["/users"]);
          }
        })
      }
      //Nuevo usuario
      this.buildUserForm();
    })
  }

  populateNewUser(){
    this.user = {
      username: '',
      email: '',
      password: '',
    }
  }

  buildUserForm() {
    this.formGroup = this.formBuilder.group(this.user);
  }

  save(){
    this.user = this.formGroup.value;
    let req;
    if(this.user._id){
      req = this.userService.editUser(this.user);
    }
    else{
      req = this.userService.insertUser(this.user);
    }
    req.subscribe(data => {
      if(typeof data._id !== 'undefined'){
        this.router.navigate(['users']);
      }
      else alert ('Error al crear o editar');
    });
  }
}
