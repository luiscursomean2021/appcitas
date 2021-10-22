import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  urlImg = '../../shared/img/logosvg.svg';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private route:Router) {}


  chektoken(){
    let token:any = sessionStorage.getItem("token");
    if(token!=null){
    token = JSON.parse(atob(token.split('.')[1]));
    }     
 if(token.userType=="Administrador"){
  this.route.navigate(['/users']);
 }else{
  this.route.navigate(['/']);
 }   
  }

  logoutUser() {
   
    sessionStorage.removeItem('token');
    this.route.navigate(['login']);
  }
}
