import { Injectable } from '@angular/core';
import { Item } from './model/Item'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  getItems(): Item[] {    
    return [
      {id: 1, title:'100 rub', category:'banknotes', price:150, country:'Russia', issueYear:2018},
      {id: 2, title:'200 rub', category:'banknotes', price:250, country:'Russia', issueYear:2018}
  ];
  }

  constructor() { }
}
