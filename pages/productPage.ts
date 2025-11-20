import { Locator, Page } from '@playwright/test';
import { PageFooter } from './components/pageFooter';
import { PageHeader } from './components/pageHeader';
import { verifyCartButtonStyle } from '../helpers/utils';

export class ProductPage {
  readonly url = '/inventory-item.html?id=';
  readonly page: Page;
  readonly body: Locator;
  readonly pageHeader: PageHeader;
  readonly backButton: Locator;
  readonly inventoryItemContainer: Locator;
  readonly inventoryItem: Locator;
  readonly productImage: Locator;
  readonly productName: Locator;
  readonly productDescription: Locator;
  readonly productPrice: Locator;
  readonly cartButton: Locator;
  readonly pageFooter: PageFooter;

  constructor(page: Page) {
    this.page = page;
    this.body = page.locator('body');
    this.pageHeader = new PageHeader(page);
    this.backButton = this.pageHeader.secondaryHeader.getByTestId('back-to-products');
    this.inventoryItemContainer = page.getByTestId('inventory-container');
    this.inventoryItem = page.getByTestId('inventory-item');
    this.productImage = this.inventoryItem.locator('img.inventory_details_img');
    this.productName = this.inventoryItem.getByTestId('inventory-item-name');
    this.productDescription = this.inventoryItem.getByTestId('inventory-item-desc');
    this.productPrice = this.inventoryItem.getByTestId('inventory-item-price');
    this.cartButton = this.inventoryItem.locator('button');
    this.pageFooter = new PageFooter(page);
  }

  // **********
  // ASSERTIONS
  // **********
  async verifyCartButtonStyle(style: 'add' | 'remove'): Promise<void> {
    const BUTTON_TEXT = style === 'add' ? EXPECTED_TEXT.addToCartButton : EXPECTED_TEXT.removeButton;
    const BUTTON_COLOR = style === 'add' ? COLORS.addButtonColor : COLORS.removeButtonColor;
    const BUTTON_CLASS = style === 'add' ? 'btn_primary' : 'btn_secondary';
    await verifyCartButtonStyle(this.cartButton, BUTTON_TEXT, BUTTON_COLOR, BUTTON_CLASS);
  }
}

export const EXPECTED_TEXT = {
  backButton: 'Back to products',
  addToCartButton: 'Add to cart',
  removeButton: 'Remove',
};

export const COLORS = {
  backgroundColor: 'rgb(255, 255, 255)',
  textColor: 'rgb(19, 35, 34)',
  backButtonHoverColor: 'rgb(61, 220, 145)',
  productBorderColor: 'rgb(237, 237, 237)',
  productTitleColor: 'rgb(24, 88, 58)',
  addButtonColor: 'rgb(19, 35, 34)',
  removeButtonColor: 'rgb(226, 35, 26)',
};
