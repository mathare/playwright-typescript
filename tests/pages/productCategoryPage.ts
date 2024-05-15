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
  readonly sidebarBlock: Locator;
  readonly displayToolbar: Locator;
  readonly displayAsGridButton: Locator;
  readonly displayAsListButton: Locator;
  readonly sortByDropdown: Locator;
  readonly sortDirectionButton: Locator;
  readonly productCount: Locator;
  readonly productsGrid: Locator;
  readonly productItem: Locator;
  readonly paginationToolbar: Locator;
  readonly nextPageButton: Locator;

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
    this.sidebarBlock = this.sidebar.locator('.block');
    this.displayToolbar = this.mainContent.locator('.toolbar-products').first();
    this.displayAsGridButton = this.displayToolbar.locator('.mode-grid');
    this.displayAsListButton = this.displayToolbar.locator('.mode-list');
    this.sortByDropdown = this.displayToolbar.locator('#sorter');
    this.sortDirectionButton = this.displayToolbar.locator('[data-role=direction-switcher]');
    this.productCount = this.displayToolbar.locator('#toolbar-amount');
    this.productsGrid = this.mainContent.locator('.products-grid');
    this.productItem = new ProductItem(this.productsGrid).product;
    this.paginationToolbar = this.mainContent.locator('.toolbar-products').last();
    this.nextPageButton = this.paginationToolbar.locator('a.action.next');
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

  async getFilterItems(category: Locator, name: string): Promise<Locator> {
    const locator = ['Size', 'Color'].includes(name) ? '.swatch-attribute-options a' : 'li.item a';
    return category.locator(locator);
  }

  async getFilterCategoryElement(category: Locator, element: 'title' | 'content'): Promise<Locator> {
    return category.locator(`.filter-options-${element}`);
  }
}
