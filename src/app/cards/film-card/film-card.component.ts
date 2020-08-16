import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent implements OnInit {
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor() { }

  closeClickHandler() {
    this.close.emit()
  }

  ngOnInit(): void {
  }

}
