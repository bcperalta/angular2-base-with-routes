import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import "rxjs/add/operator/map";
@Component({
    selector:'article',
    template:`article with articleID: {{id|async }}`
})
export class ArticleComponent{
    id;
    constructor(private route:ActivatedRoute){
        this.id=route.params.map((p:any) => p.id);
    }
}