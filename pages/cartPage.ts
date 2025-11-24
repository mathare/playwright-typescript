import { Locator, Page } from '@playwright/test';
import { PageHeader } from './components/pageHeader';
import { PageFooter } from './components/pageFooter';

export class CartPage {
  readonly page: Page;
  readonly pageHeader: PageHeader;
  readonly subtitle: Locator;
  readonly cartContentsContainer: Locator;
  readonly cartList: Locator;
  readonly qtyHeader: Locator;
  readonly descHeader: Locator;
  readonly cartItem: Locator;
  readonly cartFooter: Locator;
  readonly actionButton: Locator;
  readonly pageFooter: PageFooter;

  constructor(page: Page) {
    this.page = page;
    this.pageHeader = new PageHeader(page);
    this.subtitle = page.getByTestId('title');
    this.cartContentsContainer = page.getByTestId('cart-contents-container');
    this.cartList = this.cartContentsContainer.getByTestId('cart-list');
    this.qtyHeader = this.cartList.getByTestId('cart-quantity-label');
    this.descHeader = this.cartList.getByTestId('cart-desc-label');
    this.cartItem = this.cartList.getByTestId('inventory-item');
    this.cartFooter = this.cartContentsContainer.locator('div.cart_footer');
    this.actionButton = this.cartFooter.locator('button');
    this.pageFooter = new PageFooter(page);
  }

  // *******
  // ACTIONS
  // *******
  getProductElement(index: number, element: string): Locator {
    return this.cartItem.nth(index).locator(element);
  }
}

export const EXPECTED_TEXT = {
  subtitle: 'Your Cart',
  qtyHeader: 'QTY',
  descHeader: 'Description',
  buttons: ['Continue Shopping', 'Checkout'],
};

export const COLORS = {
  backgroundColor: 'rgb(255, 255, 255)',
  textColor: 'rgb(19, 35, 34)',
  itemList: { textColor: 'rgb(72, 76, 85)' },
  buttons: [
    { backgroundColor: 'rgb(255, 255, 255)', textColor: 'rgb(19, 35, 34)', borderColor: 'rgb(19, 35, 34)' },
    { backgroundColor: 'rgb(61, 220, 145)', textColor: 'rgb(19, 35, 34)', borderColor: 'rgb(19, 35, 34)' },
  ],
};

export enum PRODUCT_ELEMENTS {
  qty = 'div.cart_quantity',
  title = 'div.inventory_item_name',
  description = 'div.inventory_item_desc',
  price = 'div.inventory_item_price',
  button = 'button.cart_button',
}
