import { Component, Output, SimpleChanges, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.css'],
})
export class FilterProductComponent {
  _searchText: string = '';
  searchText: string = '';
  // set searchText(value: string) {
  //   this.onGetValue.emit(value);
  //   this._searchText = value;
  // }
  // get searchText(): string {
  //   return this._searchText;
  // }

  @Output() onGetValue: EventEmitter<any> = new EventEmitter();
  constructor() {}
}
