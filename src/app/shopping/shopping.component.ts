import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping.service';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ShoppingDataModel } from '../model/shopping-data-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  constructor(private _shopService: ShoppingListService, private _route: ActivatedRoute) { }

  productList$ = [];
  private price: string;
  private sort: string;
  private search: string;
  private allData = [];

  ngOnInit() {
    this._shopService.shoppingItem$
      .subscribe(data => {
        this.allData = data;
        this.productList$ = this.filteredItems();
      });

    this._route.queryParamMap
      .subscribe((param) => {
        this.price = param.get('price');
        this.sort = param.get('sortBy');
        this.search = param.get('search');
        this.allData = this._shopService.getShoppingData();
        if (this.allData.length && (this.price || this.sort || this.search))
          this.productList$ = this.filteredItems();
      });
  }

  filteredItems() {

    if (this.search)
      this.allData = this.searchedItems();

    if (this.price)
      this.allData = this.pricedItems();

    if (this.sort)
      this.allData = this.sortItems();


    return this.allData;
  }

  sortItems() {
    if (this.sort === 'discount')
      return this.allData.sort((a, b) => b.discount - a.discount);
    if (this.sort === 'lowToHigh')
      return this.allData.sort((a, b) => a.price.actual - b.price.actual);
    return this.allData.sort((a, b) => b.price.actual - a.price.actual);
  }

  pricedItems() {
    return this.allData.filter(item => item.price.actual > (+this.price));
  }

  searchedItems() {
    return this.allData.filter(item => item.name.toLowerCase().includes(this.search.toLowerCase()));
  }

  cartAdded(item: ShoppingDataModel) {
    this._shopService.updateShoppingList(item);
  }

}
