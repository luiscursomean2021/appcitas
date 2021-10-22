import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  logoutUser() {
   
    sessionStorage.removeItem('token');
    this.route.navigate(['login']);
  }
}
