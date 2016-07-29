import {RouterConfig} from '@angular/router';
import {ShoppingListOverviewComponent, ShoppingListDetailComponent, ShoppingListAddComponent, ShoppingListAddItemComponent} from './index';

export const shoppingListRoutes: RouterConfig = [
  // Redirect für Übersicht über alle Listen.
  {
    path: '',
    redirectTo: '/shopping-list',
    pathMatch: 'full',
  },
  // TODO-1: neue Routen einfügen für
  // 1. Übersicht über alle Listen
  // 2. Neue Liste hinzufügen
  // 3. Listendetails anzeigen
  // 4. Neuen Eintrag hinzufügen
];
