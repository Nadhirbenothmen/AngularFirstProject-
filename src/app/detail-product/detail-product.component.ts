import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { ConsumerProductService } from '../services/consumer-product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
id!:number;
p!:Product
  constructor(private Act:ActivatedRoute,private ps:ProductService,private consP:ConsumerProductService){}

  ngOnInit(){
    this.id=this.Act.snapshot.params['id']
   // this.p=this.ps.listProduct[this.id]
   this.consP.getProductById(this.id).subscribe(
    (data)=>this.p=data
   )
  }

}
