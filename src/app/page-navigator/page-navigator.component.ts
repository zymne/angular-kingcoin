import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-navigator',
  templateUrl: './page-navigator.component.html',
  styleUrls: ['./page-navigator.component.css']
})
export class PageNavigatorComponent implements OnInit {
  
  //pageControl = [1, 2, 3 , 4]
  
  visiblePages = 8;
  firstPage = 1;
  lastPage = this.visiblePages;
  
  
  firstVisiblePages = 5;
  lastVisiblePages = 2;

  get pageControl() {
    return [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10, 11];
  }

  get pagesNumber() {
    return this.pageControl.length;
  }

  currentPage = 1;

  scrollLeft(curr) {
    
    //round - in case if num pages !odd
    var middlePage = (this.lastPage - this.firstPage)/2;
    

    ++this.firstPage
  }
  
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

  goNext() {    
    if(this.pagesNumber > this.currentPage)
      ++this.currentPage;
  }

  goPrev() {
    if(this.currentPage > 1)
      --this.currentPage;
  }

  constructor() { }

  ngOnInit() {
  }

}
