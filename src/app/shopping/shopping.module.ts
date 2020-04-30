import { HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SortComponent } from './sort/sort.component';
import { FilterComponent } from './filter/filter.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingComponent } from './shopping.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ShoppingModule { }
