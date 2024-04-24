import { Locator, Page } from '@playwright/test';
import PageHeader from './components/pageHeader';
import PageFooter from './components/pageFooter';

export default class BasePage {
  readonly url: string;
  readonly page: Page;
  readonly globalMessage: Locator;
  readonly pageHeader: PageHeader;
  readonly adsWidget: Locator;
  readonly pageFooter: PageFooter;

  constructor(page: Page) {
    this.page = page;
    this.pageHeader = new PageHeader(page);
    this.globalMessage = page.locator('.global.message');
    this.adsWidget = page.locator('.widget').filter({ has: page.locator('ins.adsbygoogle') });
    this.pageFooter = new PageFooter(page);
  }

  async open(url: string): Promise<void> {
    // Firefox can be VERY slow to load the page it seems so use a large timeout even though it exceeds the configured test timeout for most browsers
    await this.page.goto(url, { timeout: 90000 });
    if (process.platform === 'win32') {
      await this.page.getByRole('button').getByText('Consent').click();
    }
  }
}
