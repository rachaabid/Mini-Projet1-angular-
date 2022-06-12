import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from 'src/app/Components/auth/components/login/login.component';
import { RegisterComponent } from 'src/app/Components/auth/components/register/register.component';


const routes: Routes = [
  {path: 'Login', component: LoginComponent},
  {path: 'Register', component: RegisterComponent}
]

@NgModule({
  imports: [
   RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AuthRoutingModule { }
