import { Locator, Page } from '@playwright/test';
import BasePage from './basePage';

export default class ProductPage extends BasePage {
  readonly breadcrumbsContainer: Locator;
  readonly breadcrumb: Locator;
  readonly mainContent: Locator;
  readonly productInfo: Locator;
  readonly productName: Locator;

  constructor(page: Page) {
    super(page);
    this.breadcrumbsContainer = page.locator('.breadcrumbs');
    this.breadcrumb = this.breadcrumbsContainer.locator('a');
    this.mainContent = page.locator('#maincontent');
    this.productInfo = this.mainContent.locator('.product-info-main');
    this.productName = this.productInfo.getByRole('heading', { level: 1 });
  }
}
