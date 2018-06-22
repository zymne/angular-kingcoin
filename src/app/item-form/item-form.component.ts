import { Component, OnInit } from '@angular/core';
import { Item } from '../model/Item'
import { FormsModule } from '@angular/forms'
import { ItemService } from '../item.service'
import { Location } from '@angular/common'

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  item: Item = {
    id: null,
    title: null,
    price: null,
    country: null,
    category: null,
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

  goBack(): void {
    this.location.back();
  }

}
