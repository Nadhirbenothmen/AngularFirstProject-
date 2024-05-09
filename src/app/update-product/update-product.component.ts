import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsumerProductService } from '../services/consumer-product.service';
import { Product } from '../model/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  id!:number
  p!:Product
  AddForm!:FormGroup
  constructor(private act:ActivatedRoute,private consP:ConsumerProductService,private route :Router){}
  ngOnInit(){
    this.AddForm = new FormGroup({
      id:new FormControl('',Validators.required),
      title:new FormControl('',[Validators.required,Validators.minLength(6)]),
      quantity:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      price:new FormControl('',Validators.required),
      like:new FormControl('',Validators.required)
    })
    //1-récupper l'id depuis l'url
    this.id=this.act.snapshot.params['id']
    //2- recuperer l'objet
    this.consP.getProductById(this.id).subscribe(
      (data)=>{
        this.p=data
        //-3 affectation p dans formulaire
        this.AddForm.patchValue(this.p)
      })
  }

  save(){
    //-la mise a jour
    this.consP.updateProduct(this.id,this.AddForm.value).subscribe(
        ()=>this.route.navigateByUrl('/product')
    )
  }
}
