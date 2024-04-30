import { Locator, Page } from '@playwright/test';
import BasePage from './basePage';
import ProductItem, { ProductItemElements } from './components/productItem';
import { Collections } from '../data/collectionPage';

export default class CollectionPage extends BasePage {
  readonly breadcrumbsContainer: Locator;
  readonly breadcrumb: Locator;
  readonly mainContent: Locator;
  readonly pageTitle: Locator;
  readonly primarySidebar: Locator;
  readonly secondarySidebar: Locator;
  readonly promoBlock: Locator;
  readonly productsGrid: Locator;
  readonly productItem: Locator;

  constructor(page: Page) {
    super(page);
    this.breadcrumbsContainer = page.locator('.breadcrumbs');
    this.breadcrumb = this.breadcrumbsContainer.locator('a');
    this.mainContent = page.locator('#maincontent');
    this.pageTitle = this.mainContent.getByRole('heading', { level: 1 });
    this.primarySidebar = this.mainContent.locator('.sidebar-main');
    this.secondarySidebar = this.mainContent.locator('.sidebar-additional');
    this.promoBlock = this.mainContent.locator('.block-promo');
    this.productsGrid = this.mainContent.locator('.products-grid');
    this.productItem = new ProductItem(this.productsGrid).product;
  }

  async open(url?: string): Promise<void> {
    // Open random product category page or specific page if url passed in
    if (typeof url === 'undefined') {
      const topLvlCategory = Object.keys(Collections)[Math.floor(Math.random() * Object.keys(Collections).length)];
      url = Object.values(Collections[topLvlCategory])[
        Math.floor(Math.random() * Object.keys(Collections[topLvlCategory]).length)
      ] as string;
    }
    await super.open(url);
  }

  getProductItemElement(productIndex: number, element: ProductItemElements): Locator {
    return this.productItem.nth(productIndex).locator(element);
  }
}
