import { Locator, Page } from '@playwright/test';
import BasePage from './basePage';

export class HomePage extends BasePage {
  url: string = '/';
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
    this.productItem = this.productsGrid.locator('li.product-item');
  }

  async open() {
    await super.open(this.url);
  }

  getProductItemElement(productIndex: number, element: ProductItemElements) {
    return this.productItem.nth(productIndex).locator(element);
  }
}

export enum ProductItemElements {
  Name = '.product-item-name',
  Rating = '.rating-result',
  Reviews = '.reviews-actions',
  Price = '.price-box',
  Sizes = '.swatch-option.text',
  Colors = '.swatch-option.color',
  PhotoLink = 'a.product-item-photo',
  Photo = `${PhotoLink} img`,
  NameLink = 'a.product-item-link',
  ReviewsLink = `${Reviews} a`,
  AddToCartButton = 'button.action.tocart',
  AddToWishListButton = 'a.action.towishlist',
  AddToCompareButton = 'a.action.tocompare',
}
