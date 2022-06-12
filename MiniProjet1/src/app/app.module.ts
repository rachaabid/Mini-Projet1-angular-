import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { AddArticleComponent } from './Components/add-article/add-article.component';
import { LoginComponent } from './Components/auth/components/login/login.component';
import { AuthModule } from './auth/auth.module';
import { RegisterComponent } from './Components/auth/components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './Services/auth.service';
import { ListArticleComponent } from './Components/list-article/list-article.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AddArticleComponent,
    LoginComponent,
    RegisterComponent,
    ListArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
