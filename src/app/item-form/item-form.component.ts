import { Component, OnInit } from '@angular/core';

import { Item } from '../model/Item'
import { Country } from '../model/Country'

import { FormsModule } from '@angular/forms'
import { ItemService } from '../item.service'
import { Location } from '@angular/common'
import { CountryService } from '../country.service'

import { Observable } from 'rxjs'
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  availableTags: string[] = [
    'Англия',
    'Россия',
    'Украина'
  ]

  itemPersisted: boolean;

  countries: string[];

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

  goBack(item: Item): void {
    
    if(item.id > -1)
      this.itemPersisted = true;
    
    //this.location.back();
  }

}
