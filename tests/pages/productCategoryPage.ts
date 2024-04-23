import { Locator, Page } from '@playwright/test';
import BasePage from './basePage';

export default class ProductCategoryPage extends BasePage {
  url = '/men/tops-men/tees-men.html';
  readonly breadcrumbs: Locator;
  readonly mainContent: Locator;

  constructor(page: Page) {
    super(page);
    this.breadcrumbs = page.locator('.breadcrumbs');
    this.mainContent = page.locator('#maincontent');
  }

  async open(): Promise<void> {
    await super.open(this.url);
  }
}
