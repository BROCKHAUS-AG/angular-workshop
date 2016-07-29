import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import {ShoppingList, ShoppingListViewModel, ShoppingListItem, ShoppingListItemViewModel} from './index';
import {ProductService} from '../../products/index';
import {SERVER_URL} from '../../shared/index';

@Injectable()
export class ShoppingListService {

  constructor(private http: Http, private productService: ProductService) {
  }

  getAll(): Observable<ShoppingList[]> {
    // TODO-optional: Listen zwischenspeichern
    return this.http.get(`${SERVER_URL}/lists`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  get(id: string): Observable<ShoppingListViewModel> {
    // TODO-optional: Zwischengespeicherte Liste mit items aktualisieren
    return this.http.get(`${SERVER_URL}/lists/${id}`)
      .map(res => res.json())
      .mergeMap((shoppingList: ShoppingList) =>
        this.productService.getAll().map(products =>
          new ShoppingListViewModel(shoppingList, products)))
      .catch(this.handleError);
  }

  create(shoppingList: ShoppingList) {
    // TODO-optional: Liste zu zwischengespeicherten Listen hinzufügen und im Fehlerfall irgendwie reagieren.
    return this.http.post(`${SERVER_URL}/lists`, shoppingList).toPromise();
  }

  deleteItems(listId: string, itemIds: string[]) {
    // TODO-4: Einträge aus der Liste entfernen
  }

  updateItems(listId: string, items: ShoppingListItemViewModel[]) {
    // TODO-4: Einträge aktualisieren
  }

  addItem(listId: string, item: ShoppingListItem) {
    // TODO-5: Eintrag hinzufügen
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
