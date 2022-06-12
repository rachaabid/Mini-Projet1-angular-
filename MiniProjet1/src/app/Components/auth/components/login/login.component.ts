import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm?: FormGroup;
  submitted = false;
  
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.userForm = new FormGroup ({
     
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
     
    })
  }

  onLogin(){
    this.auth.login();
  }

}
