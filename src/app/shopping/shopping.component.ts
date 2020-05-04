import { Component, OnInit, Inject } from '@angular/core';
import { ShoppingListService } from './shopping.service';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ShoppingDataModel } from '../model/shopping-data-model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  constructor(private _shopService: ShoppingListService, private _route: ActivatedRoute, public dialog: MatDialog) { }

  productList$ = [];
  private price: string;
  private sort: string;
  private search: string;
  private allData = [];

  ngOnInit() {
    this._shopService.shoppingItem$
      .subscribe(data => {
        this.allData = data;
        this.productList$ = this.filteredItems();
      });

    this._route.paramMap
      .subscribe(param => {
        this.productList$ = this.filteredItems()
      });

    this._route.queryParamMap
      .subscribe((param) => {
        this.price = param.get('price');
        this.sort = param.get('sortBy');
        this.search = param.get('search');
        this.allData = this._shopService.getShoppingData();
        if (this.allData.length && (this.price || this.sort || this.search))
          this.productList$ = this.filteredItems();
      });
  }

  filteredItems() {

    if (this.search)
      this.allData = this.searchedItems();

    if (this.price)
      this.allData = this.pricedItems();

    if (this.sort)
      this.allData = this.sortItems();


    return this.allData;
  }

  sortItems() {
    if (this.sort === 'discount')
      return this.allData.sort((a, b) => b.discount - a.discount);
    if (this.sort === 'lowToHigh')
      return this.allData.sort((a, b) => a.price.actual - b.price.actual);
    return this.allData.sort((a, b) => b.price.actual - a.price.actual);
  }

  pricedItems() {
    return this.allData.filter(item => item.price.actual > (+this.price));
  }

  searchedItems() {
    return this.allData.filter(item => item.name.toLowerCase().includes(this.search.toLowerCase()));
  }

  cartAdded(item: ShoppingDataModel) {
    this._shopService.updateShoppingList(item);
  }

  sortClick() {
    const dialogRef = this.dialog.open(DialogContentSort);
  }

  filterClick() {
    const dialogRef = this.dialog.open(DialogContentFilter);
  }

}

@Component({
  selector: 'dialog-content-filter',
  template: `<mat-dialog-content class="mat-typography">
    <app-filter></app-filter>
    <mat-dialog-actions align="end">
  <button mat-button mat-dialog-close>Cancel</button>
  <button mat-button [mat-dialog-close]="true" cdkFocusInitial>OK</button>
</mat-dialog-actions>
  </mat-dialog-content>`,
})
export class DialogContentFilter { }

@Component({
  selector: 'dialog-content-sort',
  template: `<mat-dialog-content class="mat-typography">
    <div class="show-on-mobile">
    <label>Sort By</label>
    <mat-radio-group aria-labelledby="radio-group-label" [(ngModel)]="selection">
        <mat-radio-button class="radio-button" name="highToLow" value="highToLow">
            Price -- HighLow
        </mat-radio-button>
        <mat-radio-button class="radio-button" name="lowToHigh" value="lowToHigh">
            Price -- LowHigh
        </mat-radio-button>
        <mat-radio-button class="radio-button" name="discount" value="discount">
            Discount
        </mat-radio-button>
    </mat-radio-group>
</div>
    <mat-dialog-actions align="end">
  <button mat-button (click)="close()">Cancel</button>
  <button mat-button (click)="save()" cdkFocusInitial>OK</button>
</mat-dialog-actions>
  </mat-dialog-content>`,
})
export class DialogContentSort {
  constructor(public dialogRef: MatDialogRef<DialogContentSort>, @Inject(Router) public _router: Router) { }

  close() {
    this.dialogRef.close();
  }
  selection;

  save() {
    this._router.navigate(['/'], { queryParams: { 'sortBy': this.selection }, queryParamsHandling: 'merge' });
    this.close();
  }
}