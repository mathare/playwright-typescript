import { expect, Locator, Page } from '@playwright/test';
import { PageFooter } from './components/pageFooter';
import { PageHeader } from './components/pageHeader';

export class InventoryPage {
  readonly url = '/inventory.html';
  readonly page: Page;
  readonly body: Locator;
  readonly pageHeader: PageHeader;
  readonly subtitle: Locator;
  readonly activeSortOption: Locator;
  readonly sortSelect: Locator;
  readonly inventoryContainer: Locator;
  readonly inventoryItem: Locator;
  readonly pageFooter: PageFooter;

  constructor(page: Page) {
    this.page = page;
    this.body = page.locator('body');
    this.pageHeader = new PageHeader(page);
    this.subtitle = this.pageHeader.secondaryHeader.getByTestId('title');
    this.activeSortOption = this.pageHeader.secondaryHeader.getByTestId('active-option');
    this.sortSelect = this.pageHeader.secondaryHeader.getByTestId('product-sort-container');
    this.inventoryContainer = page.getByTestId('inventory-container');
    this.inventoryItem = this.inventoryContainer.getByTestId('inventory-item');
    this.pageFooter = new PageFooter(page);
  }

  // *******
  // ACTIONS
  // *******
  getProductElement(index: number, element: string): Locator {
    return this.inventoryItem.nth(index).locator(element);
  }

  async addAllProductsToCart(): Promise<void> {
    for (let i = 0; i < PRODUCT_INFO.length; i++) {
      await this.getProductElement(i, PRODUCT_ELEMENTS.button).click();
    }
    // Ensure none of the product items have focus
    await this.body.click();
  }

  // **********
  // ASSERTIONS
  // **********
  async verifyCartButtonStyle(productIndex: number, style: 'add' | 'remove'): Promise<void> {
    const BUTTON_TEXT = style === 'add' ? EXPECTED_TEXT.addToCartButton : EXPECTED_TEXT.removeButton;
    const BUTTON_COLOR = style === 'add' ? COLORS.addButtonColor : COLORS.removeButtonColor;
    const BUTTON_CLASS = style === 'add' ? 'btn_primary' : 'btn_secondary';
    await expect(this.getProductElement(productIndex, PRODUCT_ELEMENTS.button)).toHaveText(BUTTON_TEXT);
    // await expect(this.getProductElement(productIndex, PRODUCT_ELEMENTS.button)).not.toContainClass('btn_primary');
    await expect(this.getProductElement(productIndex, PRODUCT_ELEMENTS.button)).toContainClass(BUTTON_CLASS);
    await expect(this.getProductElement(productIndex, PRODUCT_ELEMENTS.button)).toHaveCSS(
      'border',
      `1px solid ${BUTTON_COLOR}`
    );
    await expect(this.getProductElement(productIndex, PRODUCT_ELEMENTS.button)).toHaveCSS('color', BUTTON_COLOR);
  }
}

export const EXPECTED_TEXT = {
  subtitle: 'Products',
  sortOptions: ['Name (A to Z)', 'Name (Z to A)', 'Price (low to high)', 'Price (high to low)'],
  addToCartButton: 'Add to cart',
  removeButton: 'Remove',
};

export const COLORS = {
  backgroundColor: 'rgb(255, 255, 255)',
  textColor: 'rgb(19, 35, 34)',
  productBorderColor: 'rgb(237, 237, 237)',
  productTitleColor: 'rgb(24, 88, 58)',
  addButtonColor: 'rgb(19, 35, 34)',
  removeButtonColor: 'rgb(226, 35, 26)',
};

export const PRODUCT_INFO = [
  {
    id: 4,
    title: 'Sauce Labs Backpack',
    imgSrc: '/static/media/sauce-backpack-1200x1500.0a0b85a385945026062b.jpg',
    description:
      'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
    price: 29.99,
    shortName: 'Backpack',
  },
  {
    id: 0,
    title: 'Sauce Labs Bike Light',
    imgSrc: '/static/media/bike-light-1200x1500.37c843b09a7d77409d63.jpg',
    description:
      "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.",
    price: 9.99,
    shortName: 'Bike Light',
  },
  {
    id: 1,
    title: 'Sauce Labs Bolt T-Shirt',
    imgSrc: '/static/media/bolt-shirt-1200x1500.c2599ac5f0a35ed5931e.jpg',
    description:
      'Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.',
    price: 15.99,
    shortName: 'Bolt T-Shirt',
  },
  {
    id: 5,
    title: 'Sauce Labs Fleece Jacket',
    imgSrc: '/static/media/sauce-pullover-1200x1500.51d7ffaf301e698772c8.jpg',
    description:
      "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.",
    price: 49.99,
    shortName: 'Fleece Jacket',
  },
  {
    id: 2,
    title: 'Sauce Labs Onesie',
    imgSrc: '/static/media/red-onesie-1200x1500.2ec615b271ef4c3bc430.jpg',
    description:
      "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.",
    price: 7.99,
    shortName: 'Onesie',
  },
  {
    id: 3,
    title: 'Test.allTheThings() T-Shirt (Red)',
    imgSrc: '/static/media/red-tatt-1200x1500.30dadef477804e54fc7b.jpg',
    description:
      'This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.',
    price: 15.99,
    shortName: 'Red T-Shirt',
  },
];

export enum PRODUCT_ELEMENTS {
  img = 'img.inventory_item_img',
  title = 'div.inventory_item_name',
  description = 'div.inventory_item_desc',
  price = 'div.inventory_item_price',
  button = 'button',
}
