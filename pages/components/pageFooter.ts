import { Locator, Page } from '@playwright/test';

export class PageFooter {
  readonly page: Page;
  readonly footer: Locator;
  readonly socialMediaItem: Locator;
  readonly socialMediaLink: Locator;
  readonly footerCopy: Locator;

  constructor(page: Page) {
    this.page = page;
    this.footer = page.getByTestId('footer');
    this.socialMediaItem = this.footer.locator('ul.social li');
    this.socialMediaLink = this.socialMediaItem.locator('a');
    this.footerCopy = this.footer.getByTestId('footer-copy');
  }
}

export const EXPECTED_TEXT = {
  socialMedia: ['Twitter', 'Facebook', 'LinkedIn'],
  copy: '© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy',
};

export const COLORS = {
  backgroundColor: 'rgb(19, 35, 34)',
  textColor: 'rgb(255, 255, 255)',
  socialLinkTextColor: 'rgb(0, 0, 238)',
};

export const SOCIAL_LINKS = [
  'https://twitter.com/saucelabs',
  'https://www.facebook.com/saucelabs',
  'https://www.linkedin.com/company/sauce-labs/',
];
