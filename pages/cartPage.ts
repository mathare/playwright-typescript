import { Locator, Page } from '@playwright/test';
import { PageHeader } from './components/pageHeader';
import { PageFooter } from './components/pageFooter';
import { CartList } from './components/cartList';

export class CartPage {
  readonly page: Page;
  readonly pageHeader: PageHeader;
  readonly subtitle: Locator;
  readonly cartContentsContainer: Locator;
  readonly cartList: CartList;
  readonly cartFooter: Locator;
  readonly actionButton: Locator;
  readonly continueShoppingButton: Locator;
  readonly checkoutButton: Locator;
  readonly pageFooter: PageFooter;

  constructor(page: Page) {
    this.page = page;
    this.pageHeader = new PageHeader(page);
    this.subtitle = page.getByTestId('title');
    this.cartContentsContainer = page.getByTestId('cart-contents-container');
    this.cartList = new CartList(page);
    this.cartFooter = this.cartContentsContainer.locator('div.cart_footer');
    this.actionButton = this.cartFooter.locator('button');
    this.continueShoppingButton = this.cartFooter.getByTestId('continue-shopping');
    this.checkoutButton = this.cartFooter.getByTestId('checkout');
    this.pageFooter = new PageFooter(page);
  }
}

export const EXPECTED_TEXT = {
  subtitle: 'Your Cart',
  qtyHeader: 'QTY',
  descHeader: 'Description',
  addToCartButton: 'Add to cart',
  removeButton: 'Remove',
  buttons: ['Continue Shopping', 'Checkout'],
};

export const COLORS = {
  backgroundColor: 'rgb(255, 255, 255)',
  textColor: 'rgb(19, 35, 34)',
  itemList: {
    headerColor: 'rgb(72, 76, 85)',
    titleColor: 'rgb(24, 88, 58)',
    hoverColor: 'rgb(61, 220, 145)',
    borderColor: 'rgb(237, 237, 237)',
    textColor: 'rgb(19, 35, 34)',
    button: {
      addButtonColor: 'rgb(19, 35, 34)',
      removeButtonColor: 'rgb(226, 35, 26)',
    },
  },
  buttons: [
    { backgroundColor: 'rgb(255, 255, 255)', textColor: 'rgb(19, 35, 34)', borderColor: 'rgb(19, 35, 34)' },
    { backgroundColor: 'rgb(61, 220, 145)', textColor: 'rgb(19, 35, 34)', borderColor: 'rgb(19, 35, 34)' },
  ],
};
