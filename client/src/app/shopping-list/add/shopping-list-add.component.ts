import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MdlDirective } from '../../mdl/index';
import { uuid } from '../../shared/index';

@Component({
  moduleId: module.id,
  selector: 'add-item',
  templateUrl: 'shopping-list-add.component.html',
  directives: [
    MdlDirective,
  ]
})
export class ShoppingListAddComponent {
  // TODO-2: Typ auf ShoppingList festlegen
  model = {
    id: uuid(),
    name: '',
  };

  constructor() {
    // TODO-2: Dienste über DI holen
  }

  ngOnInit() {
    // TODO-2: Titel setzen
  }

  createList() {
    // TODO-2: Liste mithilfe von ShoppingListService erstellen und bei Erfolg mithilfe des Routers zurück zur Übersicht navigieren.
  }
}
