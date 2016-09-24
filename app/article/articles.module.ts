import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ArticlesComponent} from "./articles.component";
import articlesRoutes from "./articles.routes"
@NgModule({
    imports:[CommonModule,articlesRoutes],
    declarations:[ArticlesComponent]
})
export default class ArticlesModule{}