import { Locator, Page } from '@playwright/test';
import BasePage from './basePage';
import ProductItem, { ProductItemElements } from './components/productItem';

export class HomePage extends BasePage {
  url = '/';
  readonly mainContent: Locator;
  readonly promoBlock: Locator;
  readonly contentHeading: Locator;
  readonly productsGrid: Locator;
  readonly productItem: Locator;

  constructor(page: Page) {
    super(page);
    this.mainContent = page.locator('#maincontent');
    this.promoBlock = page.locator('.block-promo');
    this.contentHeading = page.locator('.content-heading');
    this.productsGrid = page.locator('.products-grid');
    this.productItem = new ProductItem(this.productsGrid).product;
  }

  async open(): Promise<void> {
    await super.open(this.url);
  }

  getProductItemElement(productIndex: number, element: ProductItemElements): Locator {
    return this.productItem.nth(productIndex).locator(element);
  }
}
