import { Locator, Page } from '@playwright/test';
import BasePage from './basePage';

export class ProductPage extends BasePage {
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
  readonly addToCartButton: Locator;
  readonly addToWishlistButton: Locator;
  readonly addToCompareButton: Locator;
  readonly secondaryInfo: Locator;
  readonly descriptionTab: Locator;
  readonly additionalInfoTab: Locator;
  readonly reviewsTab: Locator;
  readonly description: Locator;
  readonly additionalInfo: Locator;
  readonly review: Locator;
  readonly similarProductsGrid: Locator;

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
    this.addToCartButton = this.productInfo.locator('#product-addtocart-button');
    this.addToWishlistButton = this.productInfo.locator('.action.towishlist');
    this.addToCompareButton = this.productInfo.locator('.action.tocompare');
    this.secondaryInfo = this.mainContent.locator('.product.info.detailed');
    this.descriptionTab = this.secondaryInfo.locator('#tab-label-description');
    this.additionalInfoTab = this.secondaryInfo.locator('#tab-label-additional');
    this.reviewsTab = this.secondaryInfo.locator('#tab-label-reviews');
    this.description = this.secondaryInfo.locator('#description');
    this.additionalInfo = this.secondaryInfo.locator('#additional tbody');
    this.review = this.secondaryInfo.locator('#customer-reviews li.review-item');
    this.similarProductsGrid = this.mainContent.locator('.block.upsell .products-grid');
  }

  getReviewDetail(index: number, detail: ReviewDetails): Locator {
    return this.review.nth(index).locator(detail);
  }
}

export enum ReviewDetails {
  title = '.review-title',
  rating = '.rating-result',
  description = '.review-content',
  reviewer = '.review-author .review-details-value',
  date = '.review-date .review-details-value',
}
