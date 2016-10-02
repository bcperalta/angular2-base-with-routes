import {RouterModule} from "@angular/router";
import {ArticlesComponent} from "./articles.component";
import {ArticleComponent} from "./article.component";
const routes=[
    {path:'',component:ArticlesComponent},
    {path:':id',component:ArticleComponent}
]
export default RouterModule.forChild(routes);