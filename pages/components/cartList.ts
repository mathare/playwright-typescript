import { Locator, Page } from '@playwright/test';

export class CartList {
  readonly page: Page;
  readonly cartList: Locator;
  readonly qtyHeader: Locator;
  readonly descHeader: Locator;
  readonly cartItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartList = this.page.getByTestId('cart-list');
    this.qtyHeader = this.cartList.getByTestId('cart-quantity-label');
    this.descHeader = this.cartList.getByTestId('cart-desc-label');
    this.cartItem = this.cartList.getByTestId('inventory-item');
  }

  // *******
  // ACTIONS
  // *******
  getProductElement(index: number, element: string): Locator {
    return this.cartItem.nth(index).locator(element);
  }
}

export const EXPECTED_TEXT = {
  qtyHeader: 'QTY',
  descHeader: 'Description',
  addToCartButton: 'Add to cart',
  removeButton: 'Remove',
};

export const COLORS = {
  backgroundColor: 'rgb(255, 255, 255)',
  headerColor: 'rgb(72, 76, 85)',
  titleColor: 'rgb(24, 88, 58)',
  hoverColor: 'rgb(61, 220, 145)',
  borderColor: 'rgb(237, 237, 237)',
  textColor: 'rgb(19, 35, 34)',
  button: {
    addButtonColor: 'rgb(19, 35, 34)',
    removeButtonColor: 'rgb(226, 35, 26)',
  },
};

export enum PRODUCT_ELEMENTS {
  qty = 'div.cart_quantity',
  title = 'div.inventory_item_name',
  description = 'div.inventory_item_desc',
  price = 'div.inventory_item_price',
  button = 'button.cart_button',
}
