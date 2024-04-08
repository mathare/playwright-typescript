import { ExpectedText, GlobalMessageStyle } from '../data/basePage';
import { Colors } from '../data/shared';
import BasePage from '../pages/basePage';
import { test, expect } from '@playwright/test';

test.describe('Base page tests', () => {
  let basePage: BasePage;
  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    // Verify the common page elements on the home page. Any page would do here but the home page should be quickest to access
    await basePage.open('/');
  });

  test.describe('Appearance tests', () => {
    // This is an example of performing visual-style testing without actual using image comparison but asserting against various element properties
    // The tests could be combined but I have split them here to make them easier to read and maintain

    test('Common page elements displayed', async ({}) => {
      await expect(basePage.globalMessage).toBeVisible();
      await expect(basePage.pageHeader).toBeVisible();
      await expect(basePage.topNav).toBeVisible();
      await expect(basePage.pageFooter).toBeVisible();
      await expect(basePage.copyrightFooter).toBeVisible();
    });

    test('Element styling', async ({}) => {
      await expect(basePage.globalMessage).toHaveCSS('background-color', Colors.Red);
      await expect(basePage.globalMessage).toHaveCSS('color', Colors.White);
      await expect(basePage.globalMessage).toHaveCSS('font-size', GlobalMessageStyle.FontSize);
      await expect(basePage.globalMessage).toHaveCSS('font-weight', GlobalMessageStyle.FontWeight);
      await expect(basePage.banner).toHaveCSS('background-color', Colors.Grey);
      await expect(basePage.banner).toHaveCSS('color', Colors.White);
      await expect(basePage.topNav).toHaveCSS('background-color', Colors.LightGrey);
      await expect(basePage.topNav).toHaveCSS('color', Colors.DarkGrey);
      await expect(basePage.pageFooter).toHaveCSS('background-color', Colors.LighterGrey);
      await expect(basePage.pageFooter).toHaveCSS('color', Colors.DarkGrey);
      await expect(basePage.copyrightFooter).toHaveCSS('background-color', Colors.Grey);
      await expect(basePage.copyrightFooter).toHaveCSS('color', Colors.White);
    });

    test('Text content of page elements', async () => {
      await expect(basePage.globalMessage).toHaveText(ExpectedText.GlobalMessage);
      await expect(basePage.banner).toHaveText(ExpectedText.Banner);
      await expect(basePage.searchInput).toBeEmpty();
      await expect(basePage.searchInput).toHaveAttribute('placeholder', ExpectedText.Search);
      const topNavLinks = basePage.topNavLink;
      for (let i = 0; i < (await topNavLinks.count()); i++) {
        await expect(topNavLinks.nth(i)).toHaveText(ExpectedText.TopNav[i]);
      }
      const footerLinks = basePage.pageFooterLink;
      for (let i = 0; i < (await footerLinks.count()); i++) {
        await expect(footerLinks.nth(i)).toHaveText(ExpectedText.FooterLinks[i]);
      }
      await expect(basePage.copyrightFooter).toHaveText(ExpectedText.Copyright);
    });
  });
});
