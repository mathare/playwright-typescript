import { Locator } from '@playwright/test';

export default class ProductItem {
  readonly productsGrid: Locator;
  readonly product: Locator;

  constructor(productsGrid: Locator) {
    this.productsGrid = productsGrid;
    this.product = this.productsGrid.locator('li.product-item');
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
