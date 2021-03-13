import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any={};
  loginForm:FormGroup;
  constructor(
    private fb:FormBuilder,
    private router:Router,
    private userService:UserService
    ) { }//pour créer les inputs

  ngOnInit() {
    this.loginForm=this.fb.group({
      email:[''],
      pwd:['']
    })
  }
login(){
    alert('BTN Clicked ');
    console.log('Here the team object : ');
   this.userService.login(this.user).subscribe(
      (data)=>{
        console.log('Autentification ',data);
      }
    )
  }

}
