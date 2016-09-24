import {RouterModule} from "@angular/router";
import {ArticlesComponent} from "./articles.component";
const routes=[
    {path:'',component:ArticlesComponent}
]
export default RouterModule.forChild(routes);