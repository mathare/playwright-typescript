import { Locator, Page } from '@playwright/test';
import { PageHeader } from './components/pageHeader';
import { PageFooter } from './components/pageFooter';

export class CheckoutCompletePage {
  readonly page: Page;
  readonly pageHeader: PageHeader;
  readonly subtitle: Locator;
  readonly checkoutCompleteContainer: Locator;
  readonly checkoutCompleteImg: Locator;
  readonly checkoutCompleteHeader: Locator;
  readonly checkoutCompleteText: Locator;
  readonly backButton: Locator;
  readonly pageFooter: PageFooter;

  constructor(page: Page) {
    this.page = page;
    this.pageHeader = new PageHeader(page);
    this.subtitle = page.getByTestId('title');
    this.checkoutCompleteContainer = page.getByTestId('checkout-complete-container');
    this.checkoutCompleteImg = this.checkoutCompleteContainer.getByTestId('pony-express');
    this.checkoutCompleteHeader = this.checkoutCompleteContainer.getByTestId('complete-header');
    this.checkoutCompleteText = this.checkoutCompleteContainer.getByTestId('complete-text');
    this.backButton = this.checkoutCompleteContainer.getByTestId('back-to-products');
    this.pageFooter = new PageFooter(page);
  }
}

export const EXPECTED_TEXT = {
  subtitle: 'Checkout: Complete!',
  header: 'Thank you for your order!',
  body: 'Your order has been dispatched, and will arrive just as fast as the pony can get there!',
  button: 'Back Home',
};
