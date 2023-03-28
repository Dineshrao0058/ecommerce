import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/service/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginForm!: FormGroup


  constructor(private us: UserService,
    private fb: FormBuilder,
    private router: Router) {

    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }
  ngOnInit(): void {

  }

  submit(f: any) {

    this.us.getUsers().subscribe((res: any) => {
      res.filter((x: any) => {
        if (f.username == x.email && f.password == x.pwd) {
          alert('login success')
          this.router.navigate(['/navbar'])
        }
      })
    })


  }







}
