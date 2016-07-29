import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgFor, CurrencyPipe } from '@angular/common'
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MdlDirective } from '../../mdl/index';
import { ShoppingListViewModel, ShoppingListItemViewModel } from '../shared/index';
import { MenuService } from '../../menu/index';

@Component({
  moduleId: module.id,
  selector: 'shopping-list',
  templateUrl: 'shopping-list-detail.component.html',
  directives: [
    NgFor,
    MdlDirective,
    ROUTER_DIRECTIVES,
  ],
  styleUrls: [
    '../../shared/button-add.css',
  ],
})
export class ShoppingListDetailComponent implements OnInit, OnDestroy {
  shoppingList: ShoppingListViewModel;

  constructor(
    private menuService: MenuService) {
    // TODO-3: weitere Dienste
  }

  ngOnInit() {
    // TODO-3: Route Parameter abonnieren, ListenId auslesen und Liste holen.
    // TODO-4: Titel setzen:
    /*
      {
        title: shoppingList.name,
        subTitle: `Gesamt: ${this.currencyPipe.transform(shoppingList.getTotalPrice(), 'EUR', true, '1.2-2')}`
      }
     */

    this.menuService.set([
      {
        label: 'Als erledigt markieren',
        action: this.markItemsAsDone.bind(this),
      },
      {
        label: 'Löschen',
        action: this.deleteItems.bind(this),
      },
      // TODO-optional: Der Editierbutton wird aktuell nicht benötigt, da dies über toggleEdit passiert.
      // Man könnte alternativ auch auf eine Editier-Seite umleiten und dort die Anzahl verändern/löschen/markieren.
      // {
      //   label: 'Editieren',
      //   action: () => { console.log('edit'); },
      //   icon: 'edit',
      //   isButton: true,
      // }
    ]);
  }

  ngOnDestroy() {
  }

  toggleEdit(item: ShoppingListItemViewModel) {
    if (item.isEditing) {
      item.updateCount();
      // TODO-4: einzelnes Item aktualisieren
      item.isEditing = false;
      // TODO-4: Titel mit Gesamtpreis aktualisieren
    } else {
      // disable edit on other items.
      this.shoppingList.items.filter(item => item.isEditing).forEach(item => this.toggleEdit(item));
      item.isEditing = true;
    }
  }

  private markItemsAsDone() {
    // TODO-4: items editieren
  }

  private deleteItems() {
    // TODO-5: items löschen
  }
}
