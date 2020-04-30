import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private _http: HttpClient) { }

  getAllData() {
    return this._http.get(this.url)
  }

  // we can hanle all errors here like 400, 404 etc.
  private handleError(err: Response) {
    return Observable.throw(new AppError(err))
  }
}
