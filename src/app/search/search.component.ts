import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  search(input) {
    if (input.value)
      this._router.navigate(['/'], { queryParams: { 'search': input.value }, queryParamsHandling: 'merge' });
    input.value = '';
  }

}
