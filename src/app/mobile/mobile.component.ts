import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {
  listMobiile:any[]=[]

  ngOnInit(){
    this.listMobiile=[
      {id:1,name:'Mobile1',price:500,quantity : 5 , like:0 , image:"../../assets/images/phone.jpg"},
      {id:2,name:'Mobile2',price:500,quantity : 5 , like:0 , image:"../../assets/images/phone.jpg"},
      {id:3,name:'Mobile3',price:500,quantity : 5 , like:0 , image:"../../assets/images/phone.jpg"}
    ]
  }
}
