import { Locator, Page } from '@playwright/test';
import BasePage from './basePage';

export class AccountPage extends BasePage {
  url = '/customer/account/';
  readonly greeting: Locator;
  readonly mainContentArea: Locator;
  readonly primarySidenav: Locator;
  readonly secondarySidenav: Locator;
  readonly pageTitle: Locator;
  readonly accountInfoBlock: Locator;
  readonly accountInfoTitle: Locator;
  readonly contactInfoBlock: Locator;
  readonly addressBookBlock: Locator;
  readonly addressBookTitle: Locator;
  readonly addressBookActions: Locator;
  readonly billingAddressBlock: Locator;
  readonly shippingAddressBlock: Locator;

  constructor(page: Page) {
    super(page);
    this.greeting = this.banner.locator('.greet.welcome');
    this.mainContentArea = this.page.locator('.column.main');
    this.primarySidenav = this.page.locator('.sidebar-main .content');
    this.secondarySidenav = this.page.locator('.sidebar-additional');
    this.pageTitle = this.mainContentArea.getByRole('heading', { level: 1 });
    this.accountInfoBlock = this.mainContentArea.locator('.block-dashboard-info');
    this.accountInfoTitle = this.accountInfoBlock.locator('.block-title');
    this.contactInfoBlock = this.accountInfoBlock.locator('.box-information');
    this.addressBookBlock = this.mainContentArea.locator('.block-dashboard-addresses');
    this.addressBookTitle = this.addressBookBlock.locator('.block-title strong');
    this.addressBookActions = this.addressBookBlock.locator('.block-title a.action');
    this.billingAddressBlock = this.addressBookBlock.locator('.box-billing-address');
    this.shippingAddressBlock = this.addressBookBlock.locator('.box-shipping-address');
  }

  async open() {
    await super.open(this.url);
  }

  getBlockElement(block: Locator, element: BlockElements) {
    return block.locator(element);
  }
}

export enum BlockElements {
  Title = '.box-title',
  Content = '.box-content',
  Actions = '.box-actions a.action',
}
