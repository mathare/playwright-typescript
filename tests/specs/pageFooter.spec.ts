import { ExpectedText, Colors, FooterLinks } from '../data/pageFooter';
import BasePage from '../pages/basePage';
import { test, expect } from '@playwright/test';
import PageFooter from '../pages/components/pageFooter';

const Timeouts = {
  Visual: 20000,
};

test.describe('Page footer tests', () => {
  let pageFooter: PageFooter;
  test.beforeEach(async ({ page }) => {
    // Verify the common page footer elements on the home page. Any page would do here but the home page should be quickest to access
    pageFooter = new PageFooter(page);
    await new BasePage(page).open('/');
  });

  test.describe('Appearance tests', () => {
    // This is an example of performing visual-style testing by asserting against various element properties rather than actually using image comparison
    // The tests could be combined but I have split them here to make them easier to read and maintain

    test('Common page elements displayed', async () => {
      await expect.soft(pageFooter.footer).toBeVisible();
      await expect.soft(pageFooter.copyrightFooter).toBeVisible();
    });

    test('Element styling', async () => {
      await expect.soft(pageFooter.footer).toHaveCSS('background-color', Colors.LightGrey);
      await expect.soft(pageFooter.footer).toHaveCSS('color', Colors.DarkGrey);
      await expect.soft(pageFooter.copyrightFooter).toHaveCSS('background-color', Colors.Grey);
      await expect.soft(pageFooter.copyrightFooter).toHaveCSS('color', Colors.White);
    });

    test('Text content of page elements', async () => {
      const footerLinks = pageFooter.footerLink;
      expect.soft(await footerLinks.count()).toEqual(ExpectedText.FooterLinks.length);
      for (let i = 0; i < (await footerLinks.count()); i++) {
        await expect.soft(footerLinks.nth(i)).toHaveText(ExpectedText.FooterLinks[i]);
      }
      await expect.soft(pageFooter.copyrightFooter).toHaveText(ExpectedText.Copyright);
    });
  });

  test.describe('Visual tests', () => {
    test('Default page footer appearance', async () => {
      await expect(pageFooter.footer).toHaveScreenshot('footer.png', {
        timeout: Timeouts.Visual,
      });
      await expect(pageFooter.copyrightFooter).toHaveScreenshot('copyrightFooter.png', {
        timeout: Timeouts.Visual,
      });
    });
  });

  test.describe('Link tests', () => {
    test('Footer links', async ({ baseURL }) => {
      const footerLinks = pageFooter.footerLink;
      expect.soft(await footerLinks.count()).toEqual(FooterLinks.length);
      for (let i = 0; i < (await footerLinks.count()); i++) {
        const expectedLink = FooterLinks[i].startsWith('https') ? FooterLinks[i] : `${baseURL}${FooterLinks[i]}`;
        await expect.soft(footerLinks.nth(i)).toHaveAttribute('href', expectedLink);
      }
    });
  });
});
