import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:any={};
  signupForm: FormGroup;
  constructor(private formBuilder:FormBuilder,
    private userService: UserService,
    private router:Router) {

     }

  ngOnInit() {
    //différence avec les Template Driven Form est d'ajouter les validators, si plusieurs utiliser un tableau de critères de validation
    this.signupForm = this.formBuilder.group({
      firstName:['',[Validators.minLength(3), Validators.required]],
      lastName:['',[Validators.minLength(5), Validators.required]],
      email:['',[Validators.email, Validators.required]],
      pwd:['',[Validators.minLength(8), Validators.required]],
      confirmPwd:['',[Validators.minLength(8), Validators.required]],
    });
  }
  signup(x){
    console.log('User  ',x);
    this.userService.signup(x).subscribe(
      ()=>{
        console.log('Signup avec succès ',x);
       // this.router.navigate(['admin']);
      }

    )

  }

}
