import { Locator, Page } from '@playwright/test';
import BasePage from './basePage';
import { ProductCategories } from '../data/productCategoryPage';
import ProductItem, { ProductItemElements } from './components/productItem';

export default class ProductCategoryPage extends BasePage {
  readonly breadcrumbsContainer: Locator;
  readonly breadcrumb: Locator;
  readonly mainContent: Locator;
  readonly pageTitle: Locator;
  readonly filters: Locator;
  readonly filtersTitle: Locator;
  readonly filterCategory: Locator;
  readonly sidebar: Locator;
  readonly displayToolbar: Locator;
  readonly productCount: Locator;
  readonly productsGrid: Locator;
  readonly productItem: Locator;
  readonly paginationToolbar: Locator;

  constructor(page: Page) {
    super(page);
    this.breadcrumbsContainer = page.locator('.breadcrumbs');
    this.breadcrumb = this.breadcrumbsContainer.locator('a');
    this.mainContent = page.locator('#maincontent');
    this.pageTitle = this.mainContent.getByRole('heading', { level: 1 });
    this.filters = this.mainContent.locator('.filter-content');
    this.filtersTitle = this.filters.getByRole('heading');
    this.filterCategory = this.filters.locator('.filter-options-item');
    this.sidebar = this.mainContent.locator('.sidebar-additional');
    this.displayToolbar = this.mainContent.locator('.toolbar-products').first();
    this.productCount = this.displayToolbar.locator('#toolbar-amount');
    this.productsGrid = this.mainContent.locator('.products-grid');
    this.productItem = new ProductItem(this.productsGrid).product;
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

  getProductItemElement(productIndex: number, element: ProductItemElements): Locator {
    return this.productItem.nth(productIndex).locator(element);
  }
}
