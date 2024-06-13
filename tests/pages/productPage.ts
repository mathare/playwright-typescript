import { Locator, Page } from '@playwright/test';
import BasePage from './basePage';

export default class ProductPage extends BasePage {
  readonly breadcrumbsContainer: Locator;
  readonly breadcrumb: Locator;
  readonly mainContent: Locator;
  readonly imageCarousel: Locator;
  readonly productImage: Locator;
  readonly prevImageButton: Locator;
  readonly nextImageButton: Locator;
  readonly productThumbnail: Locator;
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
  readonly quantityInput: Locator;

  constructor(page: Page) {
    super(page);
    this.breadcrumbsContainer = page.locator('.breadcrumbs');
    this.breadcrumb = this.breadcrumbsContainer.locator('a');
    this.mainContent = page.locator('#maincontent');
    this.imageCarousel = this.mainContent.locator('.fotorama-item');
    // Split the locators so we get the 1st img tag not the first element with matching class
    this.productImage = this.imageCarousel.locator('.fotorama__stage__frame').locator('img').first();
    this.prevImageButton = this.imageCarousel.locator('.fotorama__arr--prev');
    this.nextImageButton = this.imageCarousel.locator('.fotorama__arr--next');
    this.productThumbnail = this.imageCarousel.locator('.fotorama__thumb img');
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
    this.quantityInput = this.productInfo.locator('#qty');
  }
}
