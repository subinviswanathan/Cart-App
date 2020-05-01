import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { CartIconComponent } from './cart-icon/cart-icon.component';
import { SortComponent } from './shopping/sort/sort.component';
import { AppErrorHandler } from './common/app-error-handler';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { FilterComponent } from './shopping/filter/filter.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CheckoutTotalComponent } from './cart-checkout/checkout-total/checkout-total.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CartIconComponent,
    SortComponent,
    FilterComponent,
    ShoppingListComponent,
    ShoppingComponent,
    HeaderComponent,
    CheckoutTotalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'shopping-list',
        component: ShoppingComponent
      },
      {
        path: '',
        redirectTo: 'shopping-list',
        pathMatch: 'full'
      }
    ]),
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    //FontAwesomeModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
