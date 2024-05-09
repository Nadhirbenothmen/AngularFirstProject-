import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
color:string="";
title:string="welcome ProjectBi";
msg(){
  alert("welcome to ProjectBi");
  console.log("welcome to ProjectBi");
}
}
