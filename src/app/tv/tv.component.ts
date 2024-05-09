import { Component } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent {
    listTv:any[]=[]

    ngOnInit(){
      this.listTv=[
        {id:1,name:'tv1',price:500,quantity : 5 , like:0 , image:"../../assets/images/tv.jpg"},
        {id:2,name:'tv2',price:500,quantity : 5 , like:0 , image:"../../assets/images/tv.jpg"},
        {id:3,name:'tv3',price:500,quantity : 5 , like:0 , image:"../../assets/images/tv.jpg"}
      ]
    }

    afterRecieveData(x:any){
        alert(x)
    }

}
