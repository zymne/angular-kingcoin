import { Component, OnInit } from '@angular/core';

import { Item } from '../model/Item'
import { ItemService } from '../item.service'
import { CountryService } from '../country.service'
import { Location } from '@angular/common'
import { TabElement } from '../model/ui/TabElement'

import { Observable } from 'rxjs'
import { debounceTime, distinctUntilChanged, map} from 'rxjs/operators'

const tabs: TabElement[] = [
  { id: 1, name: 'Create', path: '/item/create', disabled: false},
  { id: 2, name: 'Images', path: '/item/create', disabled: true}
  //{ id: 3, name: 'Collection', path: '/items'}
]

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  itemPersisted: Boolean

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
    published: true
  }
  
  countries: string[];

  public model: any;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.countries.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  );

  constructor(private itemService: ItemService, private countryService: CountryService, private location: Location ) { 
    this.itemPersisted= false;
  }

  ngOnInit() {        
    this.countryService.getCountries().subscribe(c => this.refreshCountries(c))        
  }

  get diagnostic() {
    return JSON.stringify(this.item);
  }

  refreshCountries(list: string[]): void {
    
    this.countries = list;
    
    // $( "#itemCountry" ).autocomplete({
    //   source: this.countries
    // });

    // $( "#itemCountry" ).attr( "autocomplete", "nope" );
  }

  newItem() {    
    this.itemService.addItem(this.item).subscribe((item: Item) => this.goBack(item))
  }

  onTabSelected($event, tab: TabElement) {
    if(!tab.disabled)
      this.selectedTab = tab.name;
  }

  isPersisted(): Boolean {
    return this.item.id != null && this.item.id > -1;
  }

  showFileUploadForm(): void {
    tabs[0].disabled = true;
    tabs[1].disabled = false;
    
    this.selectedTab = tabs[1].name;
  }

  goBack(item: Item): void {
    
    this.item = item;

    if(item.id > -1) {      
      this.itemPersisted = true;    
      this.showFileUploadForm()
    }
    
    //this.location.back();
  }

}
