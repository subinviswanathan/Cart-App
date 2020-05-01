import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SortComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  sortBy(value) {
    this._router.navigate(['/'], { queryParams: { 'sortBy': value }, queryParamsHandling: 'merge' });
  }
}
