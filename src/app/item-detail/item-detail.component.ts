import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../model/Item';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item: Item = {
    id: null,
    title: null,
    description: null,
    price: null,
    country: null,
    category: null,
    images: [],
    issueYear: null,
    published: true
  }

  closeResult: any;

  constructor(private itemService: ItemService, 
    private location: Location, 
    private route: ActivatedRoute,
    private modalService: NgbModal ) { }

  // open(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'} );
  //   console.log('open modal');
  // }

  //TODO: not sure about image vertical align inside modal dialog - see the global style.css
  open(index:number) {
    const srcText = "http://localhost:8081/" + this.item.images[index];
    const imageContent = '<img src="' + srcText + '">';
    this.modalService.open(srcText, { windowClass: "items-image"});
  }

  ngOnInit() {
    this.getItem();
  }

  getItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id)
      .subscribe(item => this.item = item);
  }

  save(): void {
    
    this.goBack();
    // this.itemService.updateItem(this.item)
    //   .subscribe(() => this.goBack())
  }

  goBack(): void {
    this.location.back();
  }

  get diagnostic() {
    return JSON.stringify(this.item);
  }

}
