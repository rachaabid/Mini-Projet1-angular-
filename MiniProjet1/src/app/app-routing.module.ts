import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AddArticleComponent } from './Components/add-article/add-article.component';
// import { AuthGuard } from './Services/auth.guard';
import { ListArticleComponent } from './Components/list-article/list-article.component';

const routes: Routes = [
  // {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'AddArticle', component: AddArticleComponent},
  {path: 'ListArticle', component: ListArticleComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  AddArticleComponent
]