import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent  {

  urlAPIRegistro = `${environment.urlRegistro}`;//url en enviroments donde tengo todas las url

  registerForm = this.fb.group({//compruebo que introduce todos los datos por default es cliente el tipo de user
    email: [null, Validators.required],
    password: [null, Validators.required],
    username: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private httpClient: HttpClient, private route: Router
    ) {}
 
//#region Metodo onError
  private onError(err:any)
  {
    const error_si_existe = 409;
    if(err instanceof HttpErrorResponse)
    {
      console.log(err);
      
      if(err.status == error_si_existe)
      {
        alert("Email already exist");
      }
      else
      {
        alert("Error desconocido");
      }
    }
  }
onSubmit(): void {
    this.httpClient
    .post<any>(this.urlAPIRegistro, {
      email:this.registerForm.value.email,
      password:this.registerForm.value.password,
      username:this.registerForm.value.username
    })
    .subscribe(token => {
      this.route.navigate(["/Auth/login"]);
    },
    error => this.onError(error)
    );
  }
getBack(){
    this.route.navigate(["/Auth/login"]);
  }
}
