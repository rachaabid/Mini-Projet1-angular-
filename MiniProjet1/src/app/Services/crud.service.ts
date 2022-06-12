import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../article';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  // Article: Article = new Article();
  listArticle: Article [] = [];
  constructor(private route:Router) { 
   
  }

  ajouterArticle(article:any){
    let listArticle = JSON.parse(localStorage.getItem('listArticle')||'[]');
    listArticle.push(article);
    localStorage.setItem('listArticle',JSON.stringify(listArticle));
   this.route.navigate(['/ListArticle']);
  }

  getAllArticle(){
    return JSON.parse(localStorage.getItem('listArticle')||'[]');
  }

  supprimeArticle(i:any){
  //   this.listArticle.splice(i, 1);
  // localStorage.setItem("listArticle", JSON.stringify(this.listArticle));
  // this.listArticle = JSON.parse(localStorage.getItem('listArticle')||'[]');
  }
}
