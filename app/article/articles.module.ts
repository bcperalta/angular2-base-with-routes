import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ArticlesComponent} from "./articles.component";
import articlesRoutes from "./articles.routes"
import {ArticleComponent} from "./article.component";
@NgModule({
    imports:[CommonModule,articlesRoutes],
    declarations:[ArticlesComponent,ArticleComponent]
})
export default class ArticlesModule{}