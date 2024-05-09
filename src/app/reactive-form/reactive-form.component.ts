import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {


  login = new FormControl('',Validators.required);
  pwd=new FormControl('',Validators.required);

  registerForm = new FormGroup({
    login : new FormControl('',[Validators.required,Validators.minLength(6)]),
    pwd :new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('^[A-Z][a-z0-9]*$')])
  })

  save(){
    console.log(this.registerForm);
  }
}
