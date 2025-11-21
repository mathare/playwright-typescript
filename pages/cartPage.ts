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
  readonly continueShoppingBtn: Locator;
  readonly checkoutBtn: Locator;
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
    this.continueShoppingBtn = this.cartFooter.getByTestId('continue-shopping');
    this.checkoutBtn = this.cartFooter.getByTestId('checkout');
    this.pageFooter = new PageFooter(page);
  }
}
