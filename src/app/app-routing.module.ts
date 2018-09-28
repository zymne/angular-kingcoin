import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemFormComponent } from './item-form/item-form.component'
import { FileUploaderComponent } from './file-uploader/file-uploader.component'
import { ItemsComponent } from './items/items.component';
import { ItemsListComponent } from './items-list/items-list.component'

const routes: Routes = [
  // {path: '', redirectTo: 'item/create', pathMatch: 'full' },
  {path: '', redirectTo: 'items', pathMatch: 'full' },  
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
