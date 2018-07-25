import { Component, OnInit } from '@angular/core';
import { Item } from '../model/Item'
import { ItemService } from '../item.service'
import { Location } from '@angular/common'
import { TabElement } from '../model/ui/TabElement'

const tabs: TabElement[] = [
  { id: 1, name: 'Create', path: '/item/create', disabled: false},
  { id: 2, name: 'Images', path: '/item/create/uploader', disabled: true}
  //{ id: 3, name: 'Collection', path: '/items'}
]

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  get tabs() {
    return tabs;
  }

  selectedTab = tabs[0].name;
    
  item: Item = {
    id: null,
    title: null,
    price: null,
    country: null,
    category: null,
    images: [],
    issueYear: null,
    published: null
  }

  constructor(private itemService: ItemService, private location: Location ) { }

  ngOnInit() {
  }

  get diagnostic() {
    return JSON.stringify(this.item);
  }

  newItem() {    
    this.itemService.addItem(this.item).subscribe(() => this.goBack())
  }

  onTabSelected($event, tab: TabElement) {
    if(!tab.disabled)
      this.selectedTab = tab.name;
  }

  goBack(): void {
    this.location.back();
  }

}
