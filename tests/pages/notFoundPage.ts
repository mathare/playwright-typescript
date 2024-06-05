import { Locator, Page } from '@playwright/test';
import BasePage from './basePage';

export class NotFoundPage extends BasePage {
  url = '/invalid';
  readonly mainContent: Locator;
  readonly pageTitle: Locator;
  readonly mainBlock: Locator;
  readonly link: Locator;
  readonly sidebar: Locator;
  readonly sidebarBlock: Locator;

  constructor(page: Page) {
    super(page);
    this.mainContent = page.locator('#maincontent');
    this.pageTitle = this.mainContent.getByRole('heading', { level: 1 });
    this.mainBlock = this.page.locator('.column.main dl');
    this.link = this.mainBlock.locator('a');
    this.sidebar = this.mainContent.locator('.sidebar-additional');
    this.sidebarBlock = this.sidebar.locator('.block');
  }

  async open(): Promise<void> {
    await super.open(this.url);
  }
}
