import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/service/user.service';

@Component({
  selector: 'app-temp-signup',
  templateUrl: './temp-signup.component.html',
  styleUrls: ['./temp-signup.component.css']
})
export class TempSignupComponent {
  superForm!: FormGroup
  fname: any;
  constructor(private fb: FormBuilder, private userapi: UserService) {
    this.superForm = this.fb.group({
      fname: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*')]],
      lname: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: ['', [Validators.required]],
      pwd: ['', [Validators.required]],
      cpwd: ['', [Validators.required]],
      address1: ['', [Validators.required]],
      address2: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
      pincode: ['', [Validators.required]],


    })
  }
  get c() {
    return this.superForm.controls
  }
  signup() {
    if (this.superForm.valid) {
      this.userapi.signupUser(this.superForm.value).subscribe((res: any) => {
        console.log('success', res);

      })
    } else {
      alert('invalid details')
    }
  }
}
