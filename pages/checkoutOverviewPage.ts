import { Locator, Page } from '@playwright/test';
import { PageHeader } from './components/pageHeader';
import { PageFooter } from './components/pageFooter';
import { CartList } from './components/cartList';

export class CheckoutOverviewPage {
  readonly page: Page;
  readonly pageHeader: PageHeader;
  readonly subtitle: Locator;
  readonly checkoutSummaryContainer: Locator;
  readonly cartList: CartList;
  readonly summaryInfo: Locator;
  readonly paymentInfoLabel: Locator;
  readonly paymentInfoValue: Locator;
  readonly shippingInfoLabel: Locator;
  readonly shippingInfoValue: Locator;
  readonly priceTotalLabel: Locator;
  readonly subtotalLabel: Locator;
  readonly taxLabel: Locator;
  readonly totalLabel: Locator;
  readonly cartFooter: Locator;
  readonly actionButton: Locator;
  readonly cancelButton: Locator;
  readonly finishButton: Locator;
  readonly pageFooter: PageFooter;

  constructor(page: Page) {
    this.page = page;
    this.pageHeader = new PageHeader(page);
    this.subtitle = page.getByTestId('title');
    this.checkoutSummaryContainer = page.getByTestId('checkout-summary-container');
    this.cartList = new CartList(page);
    this.summaryInfo = this.checkoutSummaryContainer.locator('div.summary_info');
    this.paymentInfoLabel = this.summaryInfo.getByTestId('payment-info-label');
    this.paymentInfoValue = this.summaryInfo.getByTestId('payment-info-value');
    this.shippingInfoLabel = this.summaryInfo.getByTestId('shipping-info-label');
    this.shippingInfoValue = this.summaryInfo.getByTestId('shipping-info-value');
    this.priceTotalLabel = this.summaryInfo.getByTestId('total-info-label');
    this.subtotalLabel = this.summaryInfo.getByTestId('subtotal-label');
    this.taxLabel = this.summaryInfo.getByTestId('tax-label');
    this.totalLabel = this.summaryInfo.getByTestId('total-label');
    this.cartFooter = this.summaryInfo.locator('div.cart_footer');
    this.actionButton = this.cartFooter.locator('button');
    this.cancelButton = this.cartFooter.getByTestId('cancel');
    this.finishButton = this.cartFooter.getByTestId('finish');
    this.pageFooter = new PageFooter(page);
  }
}

export const EXPECTED_TEXT = {
  subtitle: 'Checkout: Overview',
  paymentInfo: {
    label: 'Payment Information:',
    value: 'SauceCard #31337',
  },
  shippingInfo: {
    label: 'Shipping Information:',
    value: 'Free Pony Express Delivery!',
  },
  priceInfo: {
    label: 'Price Total',
    subtotalPrefix: 'Item total: $',
    taxPrefix: 'Tax: $',
    totalPrefix: 'Total: $',
  },
  buttons: ['Cancel', 'Finish'],
};

export const COLORS = {
  backgroundColor: 'rgb(255, 255, 255)',
  textColor: 'rgb(19, 35, 34)',
  buttons: [
    { backgroundColor: 'rgb(255, 255, 255)', borderColor: 'rgb(19, 35, 34)' },
    { backgroundColor: 'rgb(61, 220, 145)', borderColor: 'rgb(19, 35, 34)' },
  ],
};
