import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from '../shopping/shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss']
})
export class CartIconComponent implements OnInit, OnDestroy {

  itemCount: number;
  subscription: Subscription;
  constructor(private _shopService: ShoppingListService) { }

  ngOnInit() {
    this.itemCount = 0;
    this.subscription = this._shopService.addedShoppingItem$
      .subscribe(data => {
        if (data) {
          // let allData = this._shopService.getAddedShoppingList();
          let keys = Object.keys(data);
          this.itemCount = keys.reduce((accum, current) => accum + data[current][1], 0);
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
