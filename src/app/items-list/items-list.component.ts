import { Component, OnInit } from '@angular/core';
import { Item } from "../model/Item"
import { ItemService } from '../item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  // items: Item[] = [
  //   {
  //     id: 1,
  //     title: '100 рублей',
  //     price: 120,
  //     country: {code: 'ru', name: 'Россия'},
  //     category: 'Банкноты',
  //     images: [],
  //     issueYear: null,
  //     published: true
  //   }
  // ];

  items = [];

  deletedRows: Number = -1;

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit() {
    this.getItems();
  }

  addItem(): void {
    this.router.navigate(['/admin/items/create']);
    console.log('Item Added.');
  }

  
  refreshList(rowsDeleted: Number): void {
    if(rowsDeleted > 0)
      this.getItems();
    console.log('Rows deleted: ' + rowsDeleted);  
  }

  
  deleteSelected(): void {
    let selectedItems = this.items.filter(v => v.selected == true).map(v => v.data.id);
    console.log('delete ' + selectedItems);

    this.itemService.delete(selectedItems).subscribe( x => this.refreshList( x) );      
  }

  bindItems(items: Item[]): void {
    this.items = [];
    for(var i = 0; i < items.length; ++i) {
      this.items[i] = { data: items[i], selected: false };
    }
  }

  // get diagnostic() {
  //   return JSON.stringify(this.items.filter(v => v.selected == true).map(v => v.data.id));
  // }

  getItems(): void {
    this.itemService.getItems().subscribe(items => this.bindItems(items))
  }
}
