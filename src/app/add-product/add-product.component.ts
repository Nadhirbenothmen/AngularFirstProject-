import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { ConsumerProductService } from '../services/consumer-product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private ps:ProductService, private route:Router,private conp:ConsumerProductService){}
  AddForm!:FormGroup
  ngOnInit(){
    this.AddForm = new FormGroup({
      id:new FormControl('',Validators.required),
      title:new FormControl('',[Validators.required,Validators.minLength(6)]),
      quantity:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      price:new FormControl('',Validators.required),
      like:new FormControl('',Validators.required)
    })
  }

  save(){
    // this.ps.AddProduct(this.AddForm.value)
    // this.route.navigateByUrl('/product')
    this.conp.AddProduct(this.AddForm.value).subscribe(
      ()=>this.route.navigateByUrl('/product')
    )
  }
}
