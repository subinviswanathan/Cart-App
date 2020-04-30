import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ShoppingListService } from '../shopping/shopping.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  itemCount: number;
  constructor(private _shopService: ShoppingListService) { this.itemCount = 0; }

  ngOnInit() {
    this._shopService.addedShoppingItem$
      .subscribe(data => {
        if (data) {
          // let keys = Object.keys(data);
          // let total = keys.reduce((acc, current) => acc += data[current][1], 0);
          // console.log(this.itemCount);
          this.itemCount++;

        }
      });
  }

}
