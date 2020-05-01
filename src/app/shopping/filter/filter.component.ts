import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FilterComponent implements OnInit {
  priceVal: number;

  constructor(private _router: Router) {
    this.priceVal = 0;
  }

  ngOnInit() {
  }

  applyFilter(matSlider) {
    this._router.navigate(['/'], { queryParams: { 'price': matSlider.value }, queryParamsHandling: 'merge' });
  }
}
