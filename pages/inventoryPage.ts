import { Locator, Page } from '@playwright/test';
import { PageFooter } from './components/pageFooter';
import { PageHeader } from './components/pageHeader';
import { VALID_PRODUCTS } from '../data/products';
import { verifyCartButtonStyle } from '../helpers/utils';

export class InventoryPage {
  readonly page: Page;
  readonly body: Locator;
  readonly pageHeader: PageHeader;
  readonly subtitle: Locator;
  readonly activeSortOption: Locator;
  readonly sortSelect: Locator;
  readonly inventoryContainer: Locator;
  readonly inventoryItem: Locator;
  readonly pageFooter: PageFooter;

  constructor(page: Page) {
    this.page = page;
    this.body = page.locator('body');
    this.pageHeader = new PageHeader(page);
    this.subtitle = this.pageHeader.secondaryHeader.getByTestId('title');
    this.activeSortOption = this.pageHeader.secondaryHeader.getByTestId('active-option');
    this.sortSelect = this.pageHeader.secondaryHeader.getByTestId('product-sort-container');
    this.inventoryContainer = page.getByTestId('inventory-container');
    this.inventoryItem = this.inventoryContainer.getByTestId('inventory-item');
    this.pageFooter = new PageFooter(page);
  }

  // *******
  // ACTIONS
  // *******
  getProductElement(index: number, element: string): Locator {
    return this.inventoryItem.nth(index).locator(element);
  }

  async addAllProductsToCart(): Promise<void> {
    for (let i = 0; i < VALID_PRODUCTS.length; i++) {
      await this.getProductElement(i, PRODUCT_ELEMENTS.button).click();
    }
    // Ensure none of the product items have focus
    await this.body.click();
  }

  // **********
  // ASSERTIONS
  // **********
  async verifyCartButtonStyle(productIndex: number, style: 'add' | 'remove'): Promise<void> {
    const BUTTON_TEXT = style === 'add' ? EXPECTED_TEXT.addToCartButton : EXPECTED_TEXT.removeButton;
    const BUTTON_COLOR = style === 'add' ? COLORS.button.addButtonColor : COLORS.button.removeButtonColor;
    const BUTTON_CLASS = style === 'add' ? 'btn_primary' : 'btn_secondary';
    await verifyCartButtonStyle(
      this.getProductElement(productIndex, PRODUCT_ELEMENTS.button),
      BUTTON_TEXT,
      BUTTON_COLOR,
      BUTTON_CLASS
    );
  }
}

export const EXPECTED_TEXT = {
  subtitle: 'Products',
  sortOptions: ['Name (A to Z)', 'Name (Z to A)', 'Price (low to high)', 'Price (high to low)'],
  addToCartButton: 'Add to cart',
  removeButton: 'Remove',
  brokenSort: 'Sorting is broken! This error has been reported to Backtrace.',
};

export const COLORS = {
  backgroundColor: 'rgb(255, 255, 255)',
  textColor: 'rgb(19, 35, 34)',
  product: {
    borderColor: 'rgb(237, 237, 237)',
    titleColor: 'rgb(24, 88, 58)',
    hoverColor: 'rgb(61, 220, 145)',
  },
  button: {
    addButtonColor: 'rgb(19, 35, 34)',
    removeButtonColor: 'rgb(226, 35, 26)',
  },
};

export enum PRODUCT_ELEMENTS {
  img = 'img.inventory_item_img',
  title = 'div.inventory_item_name',
  description = 'div.inventory_item_desc',
  pricebar = 'div.pricebar',
  price = 'div.inventory_item_price',
  button = 'button',
}
