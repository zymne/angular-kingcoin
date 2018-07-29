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

  items: Item[];

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit() {
    this.getItems();
  }

  addItem(): void {
    this.router.navigate(['/admin/items/create']);
    console.log('Item Added.');
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => this.items = items)
  }

}
