import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginControl:FormGroup
  constructor(private auth:AuthService, private router:Router) {
    this.loginControl = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.email,
        Validators.nullValidator,
        Validators.maxLength(50),
      ]),
      pass: new FormControl("", [
        Validators.required,
        Validators.nullValidator,
        Validators.minLength(6),
        Validators.maxLength(15),
      ]),
    });
  }

  ngOnInit(): void {

  }

  login(){
    this.auth.LOGIN(this.loginControl.value.email, this.loginControl.value.pass).subscribe({
      next:async (res)=>{
        localStorage.setItem('subasterAdminToken', res.token)
        await this.router.navigate(['admin'])
      },
      error:(err)=>{

      }
    })
  }

}
