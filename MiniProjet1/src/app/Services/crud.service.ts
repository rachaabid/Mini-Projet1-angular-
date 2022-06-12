import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../article';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  Article: Article = new Article();
  listArticle: Article [];
  constructor(private route:Router) { 
    this.listArticle = []; 
  }

  // getNewArticleId(){
  //   const oldArticle = localStorage.getItem('listArticle');
  //   if (oldArticle !== null){
  //     const listArticle = JSON.stringify(oldArticle);
  //     return listArticle.length + 1;
  //   }
  //   else {return 1;}
  // }

  // ajouterArticle(){
  //   let listArticle = JSON.parse(localStorage.getItem('listArticle')||'[]');
  //   this.listArticle.push(this.Article);
  //   localStorage.setItem('listArticle', JSON.stringify(this.listArticle));
  //  this.route.navigate(['/ListArticle']);
  // }
}
