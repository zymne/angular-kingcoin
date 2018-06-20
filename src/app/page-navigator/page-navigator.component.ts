import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-navigator',
  templateUrl: './page-navigator.component.html',
  styleUrls: ['./page-navigator.component.css']
})
export class PageNavigatorComponent implements OnInit {
  
  //pageControl = [1, 2, 3 , 4]
  
  get pageControl() {
    return [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  }

  get pagesCount() {
    return this.pageControl.length;
  }

  //do javascript have constants
  firstPage = 1;
  lastPage = this.pagesCount;
    
  visiblePagesCount = 8;
  firstVisiblePage = 1;
  lastVisiblePage = this.firstVisiblePage + this.visiblePagesCount - 1;

  currentPage = 1;

  changePage(pageNum) {
    this.currentPage = pageNum;
    this.scrollPageControl(pageNum)
  }
  
  scrollPageControl(currentPage) {    
    //round - in case if num pages !odd
    var scrollStartingPage = this.firstVisiblePage + (this.lastVisiblePage - this.firstVisiblePage + 1)/2;    
    var scrollOffset = currentPage - scrollStartingPage;

    //can we avoid using 'this' everywhere
    //dont scroll at the very begining of the navigation 
    if(this.firstVisiblePage + scrollOffset >= this.firstPage && this.lastVisiblePage + scrollOffset <= this.lastPage) {            
      this.firstVisiblePage += scrollOffset;
      this.lastVisiblePage = this.lastVisiblePage + scrollOffset;
      console.log('scrolling: ');    
    } 
    
    //if offset exceeds allowed limit from the lefet - just scroll at the begining, to the firstPage
    //prevents us from stucking near the firstPage
    else if(this.firstVisiblePage + scrollOffset < this.firstPage) {
      this.firstVisiblePage = this.firstPage;
      this.lastVisiblePage = this.firstVisiblePage + this.visiblePagesCount - 1;
    }
    //if offset exceeds allowed limit from the right - just scroll at the end, to the lastPage
    else if(this.lastVisiblePage + scrollOffset > this.lastPage) {
      this.lastVisiblePage = this.lastPage;
      this.firstVisiblePage = this.lastVisiblePage - this.visiblePagesCount + 1;
    }    
    //console.log(scrollOffset);
  }

  checkVisibleBounds(index) {
    var result = index + 1 >= this.firstVisiblePage && index < this.lastVisiblePage;
    //console.log(index + ' ' + result);
    return result;
  }
  
  onClick($event, pg) {    
    this.currentPage = pg;
    this.scrollPageControl(pg);
  }

  isPageActive(pg) {
    if(pg == this.currentPage) {
      return true;
    }
    else
      return false;

  }

  goNext() {
    if(this.pagesCount > this.currentPage)
    this.changePage(this.currentPage + 1)
  }

  goPrev() {
    if(this.currentPage > 1)
      this.changePage(this.currentPage - 1)
  }

  constructor() { }

  ngOnInit() {
  }

}
