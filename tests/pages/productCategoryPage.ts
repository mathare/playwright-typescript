import { Locator, Page } from '@playwright/test';
import BasePage from './basePage';
import { ProductCategories } from '../data/productCategoryPage';

export default class ProductCategoryPage extends BasePage {
  readonly breadcrumbs: Locator;
  readonly mainContent: Locator;
  readonly pageTitle: Locator;
  readonly filters: Locator;
  readonly filtersTitle: Locator;
  readonly sidebar: Locator;
  readonly displayToolbar: Locator;
  readonly productsGrid: Locator;
  readonly productItem: Locator;
  readonly paginationToolbar: Locator;

  constructor(page: Page) {
    super(page);
    this.breadcrumbs = page.locator('.breadcrumbs');
    this.mainContent = page.locator('#maincontent');
    this.pageTitle = this.mainContent.getByRole('heading', { level: 1 });
    this.filters = this.mainContent.locator('.filter-content');
    this.filtersTitle = this.filters.getByRole('heading');
    this.sidebar = this.mainContent.locator('.sidebar-additional');
    this.displayToolbar = this.mainContent.locator('.toolbar-products').first();
    this.productsGrid = this.mainContent.locator('.products-grid');
    this.productItem = this.productsGrid.locator('li.product-item');
    this.paginationToolbar = this.mainContent.locator('.toolbar-products').last();
  }

  async open(url?: string): Promise<void> {
    // Open random product category page or specific page if url passed in
    if (typeof url === 'undefined') {
      const topLvlCategory =
        Object.keys(ProductCategories)[Math.floor(Math.random() * Object.keys(ProductCategories).length)];
      url = Object.values(ProductCategories[topLvlCategory])[
        Math.floor(Math.random() * Object.keys(ProductCategories[topLvlCategory]).length)
      ] as string;
    }
    await super.open(url);
  }
}
