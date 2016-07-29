import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import {Product} from './index';
import {SERVER_URL} from '../shared/index';

@Injectable()
export class ProductService {
  private static idCounter = 0;

  private products: Product[];

  constructor(private http: Http) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get(`${SERVER_URL}/products`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response): Product[] {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
