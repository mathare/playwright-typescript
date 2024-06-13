import { Locator, Page } from '@playwright/test';
import BasePage from './basePage';

export default class ProductPage extends BasePage {
  readonly breadcrumbsContainer: Locator;
  readonly breadcrumb: Locator;
  readonly mainContent: Locator;
  readonly productInfo: Locator;
  readonly productName: Locator;
  readonly reviewsContainer: Locator;
  readonly rating: Locator;
  readonly reviews: Locator;
  readonly addReview: Locator;
  readonly price: Locator;
  readonly availability: Locator;
  readonly sku: Locator;
  readonly sizeSwatch: Locator;
  readonly colorSwatch: Locator;

  constructor(page: Page) {
    super(page);
    this.breadcrumbsContainer = page.locator('.breadcrumbs');
    this.breadcrumb = this.breadcrumbsContainer.locator('a');
    this.mainContent = page.locator('#maincontent');
    this.productInfo = this.mainContent.locator('.product-info-main');
    this.productName = this.productInfo.getByRole('heading', { level: 1 });
    this.reviewsContainer = this.productInfo.locator('.product-reviews-summary');
    this.rating = this.productInfo.locator('.rating-result');
    this.reviews = this.productInfo.locator('a.action.view');
    this.addReview = this.productInfo.locator('a.action.add');
    this.price = this.productInfo.locator('.price-box');
    this.availability = this.productInfo.locator('.stock');
    this.sku = this.productInfo.locator('.sku .value');
    this.sizeSwatch = this.productInfo.locator('.swatch-attribute.size .swatch-option');
    this.colorSwatch = this.productInfo.locator('.swatch-attribute.color .swatch-option');
  }
}
