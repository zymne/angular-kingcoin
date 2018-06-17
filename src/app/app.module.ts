import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageNavigatorComponent } from './page-navigator/page-navigator.component';
import { ItemsComponent } from './items/items.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNavigatorComponent,
    ItemsComponent,
    FileUploaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
