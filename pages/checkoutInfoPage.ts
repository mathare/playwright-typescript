import { expect, Locator, Page } from '@playwright/test';
import { PageHeader } from './components/pageHeader';
import { PageFooter } from './components/pageFooter';

type CheckoutInfoFormInputs = 'firstName' | 'lastName' | 'postalCode';

export class CheckoutInfoPage {
  readonly page: Page;
  readonly pageHeader: PageHeader;
  readonly subtitle: Locator;
  readonly checkoutInfoContainer: Locator;
  readonly checkoutInfoForm: Locator;
  readonly formInput: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly errorMessageContainer: Locator;
  readonly errorMessage: Locator;
  readonly errorCloseButton: Locator;
  readonly checkoutButtonsContainer: Locator;
  readonly actionButton: Locator;
  readonly cancelButton: Locator;
  readonly continueButton: Locator;
  readonly pageFooter: PageFooter;

  constructor(page: Page) {
    this.page = page;
    this.pageHeader = new PageHeader(page);
    this.subtitle = page.getByTestId('title');
    this.checkoutInfoContainer = page.getByTestId('checkout-info-container');
    this.checkoutInfoForm = this.checkoutInfoContainer.locator('div.checkout_info');
    this.formInput = this.checkoutInfoForm.locator('input.form_input');
    this.firstNameInput = this.checkoutInfoForm.getByTestId('firstName');
    this.lastNameInput = this.checkoutInfoForm.getByTestId('lastName');
    this.postalCodeInput = this.checkoutInfoForm.getByTestId('postalCode');
    this.errorMessageContainer = this.checkoutInfoContainer.locator('div.error-message-container');
    this.errorMessage = this.errorMessageContainer.getByTestId('error');
    this.errorCloseButton = this.errorMessage.getByTestId('error-button');
    this.checkoutButtonsContainer = this.checkoutInfoContainer.locator('div.checkout_buttons');
    this.actionButton = this.checkoutButtonsContainer.locator('.btn');
    this.cancelButton = this.checkoutButtonsContainer.getByTestId('cancel');
    this.continueButton = this.checkoutButtonsContainer.getByTestId('continue');
    this.pageFooter = new PageFooter(page);
  }

  // *******
  // ACTIONS
  // *******
  async resetCheckoutInfoForm() {
    for (let i = 0; i < (await this.formInput.count()); i++) {
      await this.formInput.nth(i).clear();
    }
  }

  // **********
  // ASSERTIONS
  // **********
  async inputHasValidationError(input: CheckoutInfoFormInputs) {
    const INPUT_LOCATOR = this.checkoutInfoForm.getByTestId(input);
    await expect(INPUT_LOCATOR).toContainClass('error');
    await expect(INPUT_LOCATOR).toHaveCSS('border-bottom-color', COLORS.input.errorBorderColor);
    await expect(INPUT_LOCATOR.locator('.. >> svg')).toBeVisible();
  }

  async inputDoesNotHaveValidationError(input: CheckoutInfoFormInputs) {
    const INPUT_LOCATOR = this.checkoutInfoForm.getByTestId(input);
    await expect(INPUT_LOCATOR).not.toContainClass('error');
    await expect(INPUT_LOCATOR).toHaveCSS('border-bottom-color', COLORS.input.borderColor);
    await expect(INPUT_LOCATOR.locator('.. >> svg')).not.toBeVisible();
  }

  async errorMessageDisplayed(message: string) {
    await expect(this.errorMessageContainer).toBeVisible();
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorCloseButton).toBeVisible();
    await expect(this.errorMessageContainer).toContainClass('error');
    await expect(this.errorMessageContainer).toHaveCSS('background-color', COLORS.error.backgroundColor);
    await expect(this.errorMessage).toHaveCSS('color', COLORS.error.textColor);
    await expect(this.errorMessage).toHaveText(message);
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
  errorMessages: {
    missingFirstName: 'Error: First Name is required',
    missingLastName: 'Error: Last Name is required',
    missingPostalCode: 'Error: Postal Code is required',
  },
};

export const COLORS = {
  backgroundColor: 'rgb(255, 255, 255)',
  subtitleColor: 'rgb(19, 35, 34)',
  borderColor: 'rgb(237, 237, 237)',
  input: {
    textColor: 'rgb(72, 76, 85)',
    borderColor: 'rgb(237, 237, 237)',
    errorBorderColor: 'rgb(226, 35, 26)',
  },
  error: {
    backgroundColor: 'rgb(226, 35, 26)',
    textColor: 'rgb(255, 255, 255)',
  },
  buttons: [
    { backgroundColor: 'rgb(255, 255, 255)', textColor: 'rgb(19, 35, 34)', borderColor: 'rgb(19, 35, 34)' },
    { backgroundColor: 'rgb(61, 220, 145)', textColor: 'rgb(19, 35, 34)', borderColor: 'rgb(19, 35, 34)' },
  ],
};
