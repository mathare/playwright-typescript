import { expect, Locator, Page } from '@playwright/test';
import { COLORS, EXPECTED_TEXT } from './inventoryPage';
import { PageFooter } from './components/pageFooter';
import { PageHeader } from './components/pageHeader';

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
    await expect(this.cartButton).toHaveText(BUTTON_TEXT);
    await expect(this.cartButton).toContainClass(BUTTON_CLASS);
    await expect(this.cartButton).toHaveCSS('border', `1px solid ${BUTTON_COLOR}`);
    await expect(this.cartButton).toHaveCSS('color', BUTTON_COLOR);
  }
}
