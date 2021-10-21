import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeUserGuardGuard implements CanActivate {
  constructor(){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let token:any = sessionStorage.getItem("token");//necesito convertirlo en any ya que sino no llega hasta el tipousuario
      if(token!=null){
      token = JSON.parse(atob(token.split('.')[1])); //hago un json parse .atob para splitear el token para comparar si es administrador o cliente
      }     
   if(token.userType=="Administrador"){
    return true;
   }else{
     return false;
   }   
  }
}