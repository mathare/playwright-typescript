import { Locator, Page } from '@playwright/test';
import { PageHeader } from './components/pageHeader';
import { PageFooter } from './components/pageFooter';

export class CheckoutInfoPage {
  readonly page: Page;
  readonly pageHeader: PageHeader;
  readonly subtitle: Locator;
  readonly checkoutInfoContainer: Locator;
  readonly checkoutInfoForm: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly errorMessageContainer: Locator;
  readonly checkoutButtonsContainer: Locator;
  readonly actionButton: Locator;
  readonly pageFooter: PageFooter;

  constructor(page: Page) {
    this.page = page;
    this.pageHeader = new PageHeader(page);
    this.subtitle = page.getByTestId('title');
    this.checkoutInfoContainer = page.getByTestId('checkout-info-container');
    this.checkoutInfoForm = this.checkoutInfoContainer.locator('div.checkout_info');
    this.firstNameInput = this.checkoutInfoForm.getByTestId('firstName');
    this.lastNameInput = this.checkoutInfoForm.getByTestId('lastName');
    this.postalCodeInput = this.checkoutInfoForm.getByTestId('postalCode');
    this.errorMessageContainer = this.checkoutInfoContainer.locator('div.error-message-container');
    this.checkoutButtonsContainer = this.checkoutInfoContainer.locator('div.checkout_buttons');
    this.actionButton = this.checkoutButtonsContainer.locator('.btn');
    this.pageFooter = new PageFooter(page);
  }
}

export const EXPECTED_TEXT = {
  subtitle: 'Checkout: Your Information',
  placeholders: {
    firstName: 'First Name',
    lastName: 'Last Name',
    postalCode: 'Zip/Postal Code',
  },
  buttons: ['Cancel', 'Continue'],
};
