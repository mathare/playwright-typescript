import { Locator, Page } from '@playwright/test';
import BasePage from './basePage';
import ProductItem, { ProductItemElements } from './components/productItem';

export class ProductPage extends BasePage {
  readonly breadcrumbsContainer: Locator;
  readonly breadcrumb: Locator;
  readonly mainContent: Locator;
  readonly imageCarousel: Locator;
  readonly productImage: Locator;
  private readonly zoomInButton: Locator;
  private readonly zoomOutButton: Locator;
  readonly exitFullscreenButton: Locator;
  private readonly prevImageButton: Locator;
  private readonly nextImageButton: Locator;
  readonly productThumbnail: Locator;
  readonly productThumbnailBorder: Locator;
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
  readonly quantityValidationError: Locator;
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
  readonly similarProductItem: Locator;

  constructor(page: Page) {
    super(page);
    this.breadcrumbsContainer = page.locator('.breadcrumbs');
    this.breadcrumb = this.breadcrumbsContainer.locator('a');
    this.mainContent = page.locator('#maincontent');
    // When the image carousel is full screen it is not within the main content area so use locator from page instead
    this.imageCarousel = this.page.locator('.fotorama-item');
    // Split the locators so we get the 1st img tag not the first element with matching class
    this.productImage = this.imageCarousel.locator('.fotorama__stage__frame.fotorama__active').locator('img').first();
    this.zoomInButton = this.imageCarousel.getByLabel('Zoom in');
    this.zoomOutButton = this.imageCarousel.getByLabel('Zoom out');
    this.exitFullscreenButton = this.imageCarousel.getByLabel('Exit fullscreen');
    this.prevImageButton = this.imageCarousel.locator('.fotorama__arr--prev');
    this.nextImageButton = this.imageCarousel.locator('.fotorama__arr--next');
    this.productThumbnail = this.imageCarousel.locator('.fotorama__thumb img');
    this.productThumbnailBorder = this.imageCarousel.locator('.fotorama__thumb-border');
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
    this.quantityValidationError = this.productInfo.locator('#qty-error');
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
    this.similarProductItem = new ProductItem(this.similarProductsGrid).product;
  }

  getTabLink(tab: Locator): Locator {
    return tab.locator('a');
  }

  getReviewDetail(index: number, detail: ReviewDetails): Locator {
    return this.review.nth(index).locator(detail);
  }

  getSimilarProductItemElement(productIndex: number, element: ProductItemElements): Locator {
    return this.similarProductItem.nth(productIndex).locator(element);
  }

  async selectThumbnail(index: number) {
    await this.productThumbnail.nth(index).click();
    // Without this sleep the highlight border may not be in the right place
    await new Promise((r) => setTimeout(r, 1000));
  }

  async selectNextImage() {
    await this.nextImageButton.click();
    await new Promise((r) => setTimeout(r, 1000));
  }

  async selectPreviousImage() {
    await this.prevImageButton.click();
    await new Promise((r) => setTimeout(r, 1000));
  }

  async zoomIn() {
    await this.zoomInButton.click();
    await new Promise((r) => setTimeout(r, 500));
  }

  async zoomOut() {
    await this.zoomOutButton.click();
    await new Promise((r) => setTimeout(r, 500));
  }
}

export enum ReviewDetails {
  title = '.review-title',
  rating = '.rating-result',
  description = '.review-content',
  reviewer = '.review-author .review-details-value',
  date = '.review-date .review-details-value',
}
