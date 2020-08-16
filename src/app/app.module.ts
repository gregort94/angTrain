import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {DataService} from "./data.service";
import { SwListComponent } from './sw-list/sw-list.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { FilmCardComponent } from './cards/film-card/film-card.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    SwListComponent,
    PreloaderComponent,
    FilmCardComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }


