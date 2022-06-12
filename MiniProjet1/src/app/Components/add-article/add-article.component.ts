import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'src/app/article';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  Article: Article = new Article();
  articleForm?:FormGroup;
  submitted = false;
  constructor(private route: Router,
               private _crudService: CrudService) {
    
  }
 
  ngOnInit(): void {
    this.articleForm = new FormGroup ({
      nameArticle: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      categorie: new FormControl('', Validators.required),
      prix: new FormControl('', Validators.required)
      
    })
  }
 
addArticle(){
  let listArticle = JSON.parse(localStorage.getItem('listArticle')||'[]');
    listArticle.push(this.Article);
    localStorage.setItem('listArticle', JSON.stringify(listArticle));
   this.route.navigate(['/ListArticle']);
  // this.submitted = !this.submitted;
  // if (this.articleForm?.invalid){
  //   return
  // } 
  // this._crudService.ajouterArticle();
}

}
