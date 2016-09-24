import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import appRoutes from "./app.routes"
@NgModule({
    declarations: [AppComponent],
    imports: [ BrowserModule, appRoutes],
    bootstrap: [ AppComponent ]
})
export class AppModule {}

