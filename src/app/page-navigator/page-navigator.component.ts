import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-navigator',
  templateUrl: './page-navigator.component.html',
  styleUrls: ['./page-navigator.component.css']
})
export class PageNavigatorComponent implements OnInit {
  
  //pageControl = [1, 2, 3 , 4]
  
  get pageControl() {
    return [1, 2, 3 , 4, 5];
  }

  currentPage = 1;

  onClick($event, pg) {    
    this.currentPage = pg;
  }

  isPageActive(pg) {
    if(pg == this.currentPage) {
      return true;
    }
    else
      return false;

  }

  constructor() { }

  ngOnInit() {
  }

}
