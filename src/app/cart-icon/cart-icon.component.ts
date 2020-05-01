import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping/shopping.service';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss']
})
export class CartIconComponent implements OnInit {

  itemCount: number;
  constructor(private _shopService: ShoppingListService) { }

  ngOnInit() {
    this.itemCount = 0;
    this._shopService.addedShoppingItem$
      .subscribe(data => {
        if (data) {
          let allData = this._shopService.getAddedShoppingList();
          let keys = Object.keys(allData);
          this.itemCount = keys.reduce((accum, current) => accum + allData[current][1], 0);
        }
      });
  }
}
