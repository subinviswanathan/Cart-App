import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FilterComponent implements OnInit {
  priceVal: number;

  constructor(private _router: Router, private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this.priceVal = this._route.snapshot.queryParams['price'] || 0;
  }

  applyFilter(matSlider) {
    this.priceVal = matSlider.value;
    this._router.navigate(['/'], { queryParams: { 'price': matSlider.value }, queryParamsHandling: 'merge' });
  }
}
