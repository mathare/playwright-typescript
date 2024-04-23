import { Locator, Page } from '@playwright/test';
import BasePage from './basePage';
import { ProductCategories } from '../data/productCategoryPage';

export default class ProductCategoryPage extends BasePage {
  readonly breadcrumbs: Locator;
  readonly mainContent: Locator;

  constructor(page: Page) {
    super(page);
    this.breadcrumbs = page.locator('.breadcrumbs');
    this.mainContent = page.locator('#maincontent');
  }

  async open(url?: string): Promise<void> {
    // Open random product category page or specific page if url passed in
    url =
      typeof url === 'undefined'
        ? Object.values(ProductCategories)[Math.floor(Math.random() * Object.keys(ProductCategories).length)]
        : url;
    await super.open(url);
  }
}
