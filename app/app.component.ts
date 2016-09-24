import {Component} from "@angular/core";
@Component({
    selector:'hello',
    template:`
       <div> hello world.. </div>
       <nav>
       <a routerLink="">Home</a>
       <a routerLink="articles">Articles</a>
       
</nav>
    <router-outlet></router-outlet>
`

})
export class AppComponent{}