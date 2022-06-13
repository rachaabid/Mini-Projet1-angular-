import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/article';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  Article: Article = new Article();
  articleForm?:FormGroup;
  submitted = false;
  indexArticle: any;
  listArticle: Article[] = [];
  constructor(private router: ActivatedRoute, private route: Router,
    private _crudService: CrudService) { }

  ngOnInit(): void {
    this.articleForm = new FormGroup ({
      nameArticle: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      categorie: new FormControl('', Validators.required),
      prix: new FormControl('', Validators.required)
      
    })

    this.indexArticle = this.router.snapshot.params['id']; //prendre la valeure du paramétre de l' url
    this.showData();
  }

  showData(){
    let article = this._crudService.getArticleByIndex(this.indexArticle);
    this.articleForm?.patchValue(article);  //affiche formulaire
  }

  saveChange(){
    this.submitted = true;
    if (this.articleForm?.invalid){
      return
    } 
    this._crudService.updateArticle(this.indexArticle, this.articleForm?.value);
  }

}
