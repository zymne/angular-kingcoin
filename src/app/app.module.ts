import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageNavigatorComponent } from './page-navigator/page-navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNavigatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
