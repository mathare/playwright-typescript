import { Locator, Page } from '@playwright/test';
import BasePage from './basePage';

export class HomePage extends BasePage {
  url: string = '/';
  readonly mainContent: Locator;
  readonly adsWidget: Locator;
  readonly promoBlock: Locator;
  readonly contentHeading: Locator;
  readonly productsGrid: Locator;
  readonly productItem: Locator;

  constructor(page: Page) {
    super(page);
    this.mainContent = page.locator('#maincontent');
    this.adsWidget = page.locator('.widget').nth(0);
    this.promoBlock = page.locator('.block-promo');
    this.contentHeading = page.locator('.content-heading');
    this.productsGrid = page.locator('.products-grid');
    this.productItem = this.productsGrid.locator('li.product-item');
  }

  async open() {
    await super.open(this.url);
  }

  getProductItemDetails(productIndex: number, detail: ProductDetails) {
    return this.productItem.nth(productIndex).locator(detail);
  }
}

export enum ProductDetails {
  Name = '.product-item-name',
  Rating = '.rating-result',
  Reviews = '.reviews-actions',
  Price = '.price-box',
  Sizes = '.swatch-option.text',
  Colors = '.swatch-option.color',
}
