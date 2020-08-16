import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-sw-list',
  templateUrl: './sw-list.component.html',
  styleUrls: ['./sw-list.component.scss']
})

export class SwListComponent implements OnInit {
  @Input() title: string;
  @Input() items: any;
  @Input() firstField: string;
  @Input() secondField: string;
  @Input() thirdField: string;
  @Input() itemsAmount: number;
  @Output() itemClicked: EventEmitter<any> = new EventEmitter();
  loading: boolean = false;
  constructor(public dataService: DataService) {}

  ngOnInit(): void {
  }

  itemClickHandler(item) {
    this.itemClicked.emit(item);
  }

  async setNewPageData(pageNum: number) {
    const arraName = this.title.toLocaleLowerCase();
    await this.dataService.getSWArray(arraName, pageNum);
  }
}
