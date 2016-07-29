import {ShoppingList, ShoppingListItemViewModel} from './index';
import {Product} from '../../products/index';

export class ShoppingListViewModel {
  public id: string;
  public name: string;
  public items: ShoppingListItemViewModel[];

  constructor(shoppingList: ShoppingList, products: Product[]) {
    this.id = shoppingList.id;
    this.name = shoppingList.name;
    if (shoppingList.items && shoppingList.items.length) {
      this.items = shoppingList.items.map(item =>
        new ShoppingListItemViewModel(item, products.find(product =>
          product.id === item.productId)));
    } else {
      this.items = [];
    }
  }

  getTotalPrice() {
    return this.items.reduce((totalPrice, item) => item.totalPrice + totalPrice, 0);
  }
}
