import {Product} from '../../products/index';
import {ShoppingListItem} from './index';

export class ShoppingListItemViewModel {
  // ShoppingListItem
  public id: string;
  public count: number;
  public isDone: boolean;

  // Product
  private productId: string;
  public name: string;
  public price: number;
  public description: string;
  public imageSrc: string;

  // merged
  public totalPrice: number;

  // custom properties
  public isEditing: boolean;
  public isSelected: boolean;
  public maxCount: number;

  constructor(shoppingListItem: ShoppingListItem, product: Product) {
    this.id = shoppingListItem.id;
    this.count = shoppingListItem.count;
    this.isDone = shoppingListItem.isDone;
    this.productId = product.id;
    this.name = product.name;
    this.price = product.price;
    this.description = product.description;
    this.imageSrc = product.imageSrc;
    this.totalPrice = product.price * shoppingListItem.count;
    this.maxCount = this.count * 2;
  }

  updateCount() {
    this.maxCount = this.count * 2;
    this.totalPrice = this.price * this.count;
  }

  toDTO(): ShoppingListItem {
    return {
      id: this.id,
      count: this.count,
      isDone: this.isDone,
      productId: this.productId,
    };
  }
}
