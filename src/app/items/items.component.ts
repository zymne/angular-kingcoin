import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items = [];
  itemsCount = 12;

  constructor() { }

  ngOnInit() {    
    for(var i = 0; i < this.itemsCount; ++i) {
       this.items.push(i);
    }
  }

}
