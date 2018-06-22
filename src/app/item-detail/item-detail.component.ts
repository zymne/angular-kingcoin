import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../model/Item';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item: Item;

  constructor(private itemService: ItemService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  getItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id)
      .subscribe(item => this.item = item);
  }

  save(): void {
    this.itemService.updateItem(this.item)
      .subscribe(() => this.goBack())
  }

  goBack(): void {
    this.location.back();
  }

}
