import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { Observable } from 'rxjs';
import { NotFoundError } from "../common/not-found-error";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private url: string, private _http: HttpClient) {
    }

    getAllData() {
        return this._http.get(this.url);
    }

    // we can hanle all errors here like 400,404 etc.
    private handleError(err: Response) {
        if (err.status === 404)
            return Observable.throw(new NotFoundError());
        return Observable.throw(new AppError(err));
    }
}
