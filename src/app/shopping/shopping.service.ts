import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { ShoppingDataModel } from '../model/shopping-data-model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService extends DataService {
  private _shoppingItems = new BehaviorSubject<ShoppingDataModel[]>([]);
  shoppingItem$ = this._shoppingItems.asObservable();
  private _allShoppingData: ShoppingDataModel[] = [];


  private _addedShoppingList = new BehaviorSubject(null);
  addedShoppingItem$ = this._addedShoppingList.asObservable();
  private _addedShoppingListData = {};

  constructor(_http: HttpClient) {
    super('https://my-json-server.typicode.com/subinviswanathan/cart-db/items', _http);
    this.getAllData()
      .subscribe(data => {
        this._shoppingItems.next(data as ShoppingDataModel[]);
        this._allShoppingData = data as ShoppingDataModel[];
      });
  }

  getShoppingData() {
    return [...this._allShoppingData];
  }

  updateShoppingList(item: ShoppingDataModel, value: number = 1) {
    if (!this._addedShoppingListData[item.name]) this._addedShoppingListData[item.name] = [item, 1];
    else this._addedShoppingListData[item.name][1] += value;

    this._addedShoppingList.next(item);
  }
  getAddedShoppingList() {
    return this._addedShoppingListData;
  }

}
