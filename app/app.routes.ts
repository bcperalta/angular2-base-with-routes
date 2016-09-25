import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
const routes =[
    {path:'', loadChildren:'app/home/home.module'},
    {path:'articles', loadChildren:'app/article/articles.module'}


];

export default RouterModule.forRoot(routes);