import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from '../shopping/shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.scss']
})
export class CartCheckoutComponent implements OnInit, OnDestroy {

  constructor(private _shoppingService: ShoppingListService) { }
  shoppingData;
  totalPrice;
  actualPrice;
  displayPrice;
  subscription: Subscription;

  ngOnInit() {
    this.shoppingData = this._shoppingService.getAddedShoppingList();
    this.onCalculate();

    this.subscription = this._shoppingService.addedShoppingItem$
      .subscribe((data) => {
        this.totalPrice = 0;
        if (data) {
          this.shoppingData = data;
          this.onCalculate();
        }
      });

  }

  onCalculate() {
    this.totalPrice = 0;
    this.actualPrice = 0;
    this.displayPrice = 0;
    let keys = Object.keys(this.shoppingData);
    keys.forEach((value) => {
      let val = this.shoppingData[value];
      this.actualPrice += ((val[0].price.display - val[0].price.actual) * val[1]);
      this.displayPrice += (val[0].price.display * val[1]);
      this.totalPrice += (val[0].price.actual * val[1]);
    });
    this.totalPrice = this.displayPrice - this.actualPrice;
  }

  onItemChanged($event) {
    this._shoppingService.updateShoppingList($event.item, $event.counter);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
