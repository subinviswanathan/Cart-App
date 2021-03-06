import { Component, OnInit, ViewEncapsulation, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { ShoppingDataModel } from 'src/app/model/shopping-data-model';
import { ShoppingListService } from '../shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingListComponent {

  constructor(private _shopService: ShoppingListService) { }

  @Input('productList') productList;
  @Output('addedToCart') addedToCart = new EventEmitter<ShoppingDataModel>();

  addToCart(product: ShoppingDataModel) {
    this.addedToCart.emit(product);
  }

}
