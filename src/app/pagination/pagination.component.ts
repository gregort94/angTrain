import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() itemsOnPage: number;
  @Input() itemsAmount: number;
  @Output() changePage: EventEmitter<any> = new EventEmitter();

  activePageNum = 1;

  constructor() { }

  get pagesNums() {
    return Array(this.pagesAmount).fill(0).map((x,i)=>i);
  }

  get pagesAmount(): number {
    return Math.ceil(this.itemsAmount / this.itemsOnPage )
  }

  ngOnInit(): void {
  }

  increasePageNum() {
    this.activePageNum++;
    this.changePage.emit(this.activePageNum);
  }

  decreasePageNum() {
    this.activePageNum--;
    this.changePage.emit(this.activePageNum);
  }

  setActivePageNum(pageNum) {
    this.activePageNum = pageNum;
    this.changePage.emit(this.activePageNum);
  }




}
