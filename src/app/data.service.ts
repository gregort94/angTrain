import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  films: any = null;
  people: any = null;
  starships: any = null;
  constructor() { }
  async getSWArray(arrayName: string, pageNum: number): Promise<object[]> {
    const response = await fetch(`https://swapi.dev/api/${arrayName}/?page=${pageNum}`);
    this[arrayName] = await response.json();
    return
  }
  async getSWData() {
    await this.getSWArray('films', 1);
    await this.getSWArray('people', 1);
    await this.getSWArray('starships', 1);
  }
}
