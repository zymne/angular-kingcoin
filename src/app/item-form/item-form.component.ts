import { Component, OnInit } from '@angular/core';
import { Item } from '../model/Item'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  item: Item = {
    id: 1,
    title: '',
    price: null,
    country: '',
    category: '',
    issueYear: null
  }

  constructor() { }

  ngOnInit() {
  }

  get diagnostic() {
    return JSON.stringify(this.item);
  }

  newItem() {    
  }

}
