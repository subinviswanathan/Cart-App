import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { BehaviorSubject } from 'rxjs';
import { ShoppingDataModel } from '../model/shopping-data-model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService extends DataService {
  public shoppingItems = new BehaviorSubject<ShoppingDataModel[]>([]);
  constructor(_http: HttpClient) {
    super('https://my-json-server.typicode.com/subinviswanathan/cart-db/items', _http);
  }
}
