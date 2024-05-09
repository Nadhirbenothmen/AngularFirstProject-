import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  listProduct:Product[]=[
    {id:0,title:"Iphone 12",price:1000,quantity:10,like:0},
    {id:1,title:"Iphone 13",price:1500,quantity:0,like:0},
    {id:2,title:"Iphone 14",price:2000,quantity:2,like:0},
  ]
  constructor() { }

  AddProduct(p:Product){
    this.listProduct.push(p)
  }
}
