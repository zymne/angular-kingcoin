import { Component } from '@angular/core';
import { TabElement } from './model/ui/TabElement'

const tabs: TabElement[] = [
  { id: 1, name: 'Create', path: '/item/create'},
  { id: 2, name: 'Images', path: '/item/create/uploader'},
  { id: 3, name: 'Collection', path: '/items'}
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  get tabs() {
    return tabs;
  }

  title = 'app';
  
  selectedTab = tabs[0].name;
  
  onTabSelected($event, tab) {
    this.selectedTab = tab.name;
  }

}
