import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingDataModel } from 'src/app/model/shopping-data-model';

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.scss'],
})
export class CheckoutItemComponent implements OnInit {

  constructor() { }
  @Input('shoppingData') shoppingData;
  @Output('onItemChanged') onItemChanged = new EventEmitter();

  ngOnInit() {
  }

  onItemChange(item, counter) {
    this.onItemChanged.emit({ item, counter });
  }
}
