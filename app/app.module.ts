import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import appRoutes from "./app.routes"
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
@NgModule({
    declarations: [AppComponent],
    imports: [ BrowserModule, appRoutes],
    bootstrap: [ AppComponent ],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppModule {

}

