import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemFormComponent} from './item-form/item-form.component'
import {FileUploaderComponent} from './file-uploader/file-uploader.component'
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  {path: 'item/create', component: ItemFormComponent},
  {path: 'item/create/uploader', component: FileUploaderComponent},
  {path: 'items', component: ItemsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]  
})

export class AppRoutingModule { 

}
