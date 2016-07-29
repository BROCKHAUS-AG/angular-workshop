import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, NgFor } from '@angular/common'
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import {MdlDirective} from './mdl/index';
import {MenuComponent, MenuButtonsComponent, MenuItem, MenuService} from './menu/index';
import {ShoppingListService} from './shopping-list/index';
import {ProductService} from './products/index';
import {Title, TitleService} from './shared/index';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    NgFor,
    MdlDirective,
    MenuComponent,
    MenuButtonsComponent,
    ROUTER_DIRECTIVES,
  ],
  pipes: [
    CurrencyPipe,
  ],
  providers: [
    ProductService,
    ShoppingListService,
    TitleService,
    MenuService,
  ],
})
export class AppComponent implements OnInit {
  title: Title;
  menuItems: Observable<MenuItem[]>;

  constructor(private titleService: TitleService, private menuService: MenuService) {
    this.menuItems = menuService.getAll();
  }

  ngOnInit() {
    this.titleService.get().subscribe(title =>
      this.title = title);
  }
}
