import { ExpectedText, FooterLinks } from '../data/pageFooter';
import { Colors } from '../data/shared';
import { elementCount } from '../helpers/elementUtils';
import BasePage from '../pages/basePage';
import { test, expect } from '@playwright/test';
import PageFooter from '../pages/pageFooter';

test.describe('Page footer tests', () => {
  let pageFooter: PageFooter;
  test.beforeEach(async ({ page }) => {
    // Verify the common page footer elements on the home page. Any page would do here but the home page should be quickest to access
    pageFooter = new PageFooter(page);
    await new BasePage(page).open('/');
  });

  test.describe('Appearance tests', () => {
    // This is an example of performing visual-style testing without actually using image comparison
    // but asserting against various element properties
    // The tests could be combined but I have split them here to make them easier to read and maintain

    test('Common page elements displayed', async () => {
      await expect.soft(pageFooter.footer).toBeVisible();
      await expect.soft(pageFooter.copyrightFooter).toBeVisible();
    });

    test('Element styling', async () => {
      await expect.soft(pageFooter.footer).toHaveCSS('background-color', Colors.LighterGrey);
      await expect.soft(pageFooter.footer).toHaveCSS('color', Colors.DarkGrey);
      await expect.soft(pageFooter.copyrightFooter).toHaveCSS('background-color', Colors.Grey);
      await expect.soft(pageFooter.copyrightFooter).toHaveCSS('color', Colors.White);
    });

    test('Text content of page elements', async () => {
      const footerLinks = pageFooter.footerLink;
      for (let i = 0; i < (await elementCount(footerLinks)); i++) {
        await expect.soft(footerLinks.nth(i)).toHaveText(ExpectedText.FooterLinks[i]);
      }
      await expect.soft(pageFooter.copyrightFooter).toHaveText(ExpectedText.Copyright);
    });
  });

  test.describe('Link tests', () => {
    test('Footer links', async ({ baseURL }) => {
      const footerLinks = pageFooter.footerLink;
      for (let i = 0; i < (await elementCount(footerLinks)); i++) {
        const expectedLink = FooterLinks[i].startsWith('https') ? FooterLinks[i] : `${baseURL}${FooterLinks[i]}`;
        await expect.soft(footerLinks.nth(i)).toHaveAttribute('href', expectedLink);
      }
    });
  });
});
