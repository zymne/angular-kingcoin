import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageNavigatorComponent } from './page-navigator/page-navigator.component';
import { ItemsComponent } from './items/items.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { AppRoutingModule } from './/app-routing.module';
import { ItemFormComponent } from './item-form/item-form.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageNavigatorComponent,
    ItemsComponent,
    FileUploaderComponent,
    ItemFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
