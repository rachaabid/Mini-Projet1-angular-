import { Pipe, PipeTransform } from "@angular/core";
import { Article } from "./article";

@Pipe({
  name: 'articleFilter'
})

export class ArticleFilterPipe implements PipeTransform {
  transform(listArticle: Article[], searchArticle: string): Article[] {
   if (!listArticle || !searchArticle){
    return listArticle;
   } 
   return listArticle.filter(article => article.nameArticle?.toLowerCase().indexOf(searchArticle.toLowerCase()) !== -1 || article.categorie?.toLowerCase().indexOf(searchArticle.toLowerCase()) !== -1);
  }
}
