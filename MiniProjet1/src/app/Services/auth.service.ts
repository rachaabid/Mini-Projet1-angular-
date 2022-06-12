import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { Login } from 'src/app/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token!: string;
  email:any;
  password:any;
  Login: Login = new Login();
  constructor(private _router: Router) { }

  register(data: any){
    let users = JSON.parse(localStorage.getItem('users')||'[]');
    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
  }

  login(){
    let users = JSON.parse(localStorage.getItem('users')||'[]');
    let userFound = users.find((user: any) => user[this.email] == this.email && user[this.password] == this.password); 
    if (userFound != undefined){
      localStorage.setItem('connectedUser',JSON.stringify(userFound));
      this._router.navigateByUrl('/Home');
  }
  else {
    alert('E-mail ou mot de passe est incorrect')
  }
}


  // getToken():string{
  //   return this.token;
  // }

}
