import {ShoppingListItem} from './index';

export interface ShoppingList {
  id: string;
  name: string;
  items?: ShoppingListItem[];
}
