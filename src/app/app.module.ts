import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PrListComponent } from "./pr-list/pr-list.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, PrListComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
