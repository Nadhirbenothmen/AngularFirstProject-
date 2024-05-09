import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { CalculService } from '../services/calcul.service';
import { ConsumerProductService } from '../services/consumer-product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private cs :CalculService,private consP:ConsumerProductService){}
  priceMax!:number;
  listProduct:Product[]=[]
  alert!:number

  ngOnInit(){
    //this.listProduct=this.ps.listProduct
    this.consP.getProduct().subscribe(
      (data)=>this.listProduct=data
    )
  }
  increment(p:number){
    this.listProduct[p].like++;
  }
  buy(p:number){
    this.listProduct[p].quantity--;
  }
  supp(id:number){
    this.consP.deleteProduct(id).subscribe(
      ()=>this.ngOnInit()
    )
  }
}
