import  { Component } from '@angular/core'
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './validateform.component.html'
})
export class ValidationFormComponent {
  fromsubmitted: boolean = false;
  formData = "";

  constructor(){}
  registerationForm = new FormGroup({
    firstname: new FormControl("", [
      Validators.required, 
      Validators.minLength(3)
    ]),
    lastname: new FormControl("", [
      Validators.required
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8)
    ]),
    address1: new FormControl("", [
      Validators.required
    ]),
    address2: new FormControl("", []),
    city: new FormControl("", [
      Validators.required
    ]),
    state: new FormControl("", [
      Validators.required
    ]),
    zip: new FormControl("", [
      Validators.required
    ]),
    iagree: new FormControl(false, [
      Validators.pattern('true')
    ]),
  })

  onRegister() {
   this.fromsubmitted = true;
   this.formData = "";
   if(this.registerationForm.valid) {
     alert("Valid Data Ready to Submit");
   }
  }
}