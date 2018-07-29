import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { PageNavigatorComponent } from './page-navigator/page-navigator.component';
import { ItemsComponent } from './items/items.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { AppRoutingModule } from './/app-routing.module';
import { ItemFormComponent } from './item-form/item-form.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { NgbdTypeaheadBasic } from './typehead-basic/typehead-basic.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNavigatorComponent,
    ItemsComponent,
    FileUploaderComponent,
    ItemFormComponent,
    MessagesComponent,
    ItemDetailComponent,
    NgbdTypeaheadBasic,
    ItemsListComponent,
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    HttpClientModule,    
    NgbModule.forRoot(),    
    AdminModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
