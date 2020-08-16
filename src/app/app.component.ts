import { Component } from '@angular/core';
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listLoading = false;
  currentFilm: object;
  constructor(public dataService: DataService) {
  }
  async ngOnInit() {
    this.listLoading = true;
    await this.dataService.getSWData();
    this.listLoading = false;
  }
}
