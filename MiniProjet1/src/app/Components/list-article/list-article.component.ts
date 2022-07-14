import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/article';
import { CrudService } from 'src/app/Services/crud.service';


@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {
  listArticle: Article[];
  x: any;
  searchArticle: string = '';
  constructor(private _crudService: CrudService) {
    this.listArticle = [];
  }

  ngOnInit(): void {
    this.listArticle = this._crudService.getAllArticle();
  }

  deleteArticle(i: any) {
    this._crudService.supprimeArticle(i);
    this.ngOnInit();
  }

}
