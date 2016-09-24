import {RouterModule} from "@angular/router";
const routes =[
    {path:'', loadChildren:'app/home/home.module'},
    {path:'articles', loadChildren:'app/article/articles.module'}

];

export default RouterModule.forRoot(routes);