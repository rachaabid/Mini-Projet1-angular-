import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../article';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  listArticle: Article[] = [];
  id: any;
  article: any;

  constructor(private route: Router) { }

  ajouterArticle(article: any) {
    let listArticle = JSON.parse(localStorage.getItem('listArticle') || '[]');
    listArticle.push(article);
    localStorage.setItem('listArticle', JSON.stringify(listArticle));
    this.route.navigate(['/ListArticle']);
  }

  getAllArticle() {
    return JSON.parse(localStorage.getItem('listArticle') || '[]');
  }

  getArticleByIndex(i: any){
    let list = JSON.parse(localStorage.getItem('listArticle') || '[]');
    return list[i];
   
  }

  supprimeArticle(i: any) {
    this.listArticle = JSON.parse(localStorage.getItem('listArticle') || '[]');
    this.listArticle.splice(i, 1);
    localStorage.setItem("listArticle", JSON.stringify(this.listArticle));
  }

  updateArticle(i:any, article:any){
    this.listArticle = JSON.parse(localStorage.getItem('listArticle') || '[]');
    this.listArticle.splice(i,1,article); //remplacer l'article
    localStorage.setItem('listArticle', JSON.stringify(this.listArticle));
    this.route.navigate(['/ListArticle']);
  }
 
}
