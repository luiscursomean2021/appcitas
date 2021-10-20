import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  urlApiLogin = `${environment.urlLogin}`;//uso variable que tengo en enviroments donde tengo todas las url

  loginForm = this.fb.group({//formulario que uso para validar datos
    username: [null, Validators.required],
    password: [null, Validators.required],
  });
  constructor(private fb: FormBuilder,private httpClient: HttpClient, private route: Router) {}
  
  //#region Metodo On Error
  private onError(err: any) {
    const error_no_existe = 404;
    if (err instanceof HttpErrorResponse) {
      if (err.status == error_no_existe) {
        alert('User email not found or password invalid');
      } else {
        //aqui no meto el error 601 pero se sobreentiende que si no es ese error es el otro
        alert('User is not validated');
      }
    }
  }

  onSubmit(): void {

  this.httpClient
      .post<any>(this.urlApiLogin, {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
      })
      .subscribe(
        (token) => { 
          sessionStorage.setItem('token', JSON.stringify(token)),
          this.route.navigate(['/animal']);
        },
        (error) => this.onError(error)
      );
  }
  //#endregion
  //#region Metodo Registro
  irRegistro() {
    this.route.navigate(['/Auth/registro']);
  }
  //#endregion
}