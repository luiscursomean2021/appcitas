import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  logoutUser() {
   
    sessionStorage.removeItem('token');
    this.route.navigate(['login']);
  }
}
