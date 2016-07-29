import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

import {MenuItem} from './index';

@Injectable()
export class MenuService {
  private items = new BehaviorSubject<MenuItem[]>([]);

  constructor() { }

  set(items: MenuItem[]) {
    this.items.next(items);
  }

  getAll() {
    return this.items;
  }
}
