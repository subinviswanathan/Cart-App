import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkout-total',
  templateUrl: './checkout-total.component.html',
  styleUrls: ['./checkout-total.component.scss']
})
export class CheckoutTotalComponent implements OnInit {

  constructor() { }

  @Input('displayPrice') displayPrice;
  @Input('totalPrice') totalPrice;
  @Input('actualPrice') actualPrice;

  ngOnInit() {
  }

}
