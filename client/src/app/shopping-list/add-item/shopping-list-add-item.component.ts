import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { MdlDirective } from '../../mdl/index';

@Component({
  moduleId: module.id,
  selector: 'shopping-list-add-item',
  templateUrl: 'shopping-list-add-item.component.html',
  directives: [
    NgFor,
    MdlDirective,
  ],
})
export class ShoppingListAddItemComponent implements OnInit {
  // TODO-5: Model initialisieren

  constructor() {
    // TODO-5: Dienste
   }

  ngOnInit() {
    // TODO-5: ihr wisst schon ;)
  }

  createItem() {
    // TODO-5: anlegen und zurück zur Liste
  }
}
