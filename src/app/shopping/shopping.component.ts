import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping.service';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ShoppingDataModel } from '../model/shopping-data-model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent {

  constructor(private _shopService: ShoppingListService) { }

  //products = new BehaviorSubject([]);
  //productsObs = this.products.asObservable();
  productList$ = this._shopService.shoppingItem$;

  cartAdded(item: ShoppingDataModel) {
    this._shopService.updateShoppingList(item);
  }

}
