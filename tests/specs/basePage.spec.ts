import { ExpectedText, Colors, GlobalMessageStyle } from '../data/basePage';
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
    // This is an example of performing visual-style testing by asserting against various element properties rather than actually using image comparison
    // The tests could be combined but I have split them here to make them easier to read and maintain

    test('Common page elements displayed', async () => {
      await expect.soft(basePage.globalMessage).toBeVisible();
      await expect.soft(basePage.pageHeader.header).toBeVisible();
      await expect.soft(basePage.pageHeader.topnav).toBeVisible();
      await expect.soft(basePage.pageFooter.footer).toBeVisible();
      await expect.soft(basePage.pageFooter.copyrightFooter).toBeVisible();
    });

    test('Element styling', async () => {
      await expect.soft(basePage.globalMessage).toHaveCSS('background-color', Colors.Red);
      await expect.soft(basePage.globalMessage).toHaveCSS('color', Colors.White);
      await expect.soft(basePage.globalMessage).toHaveCSS('font-size', GlobalMessageStyle.FontSize);
      await expect.soft(basePage.globalMessage).toHaveCSS('font-weight', GlobalMessageStyle.FontWeight);
    });

    test('Text content of page elements', async () => {
      await expect.soft(basePage.globalMessage).toHaveText(ExpectedText.GlobalMessage);
    });
  });

  test.describe('Visual tests', () => {
    test('Default global message appearance', async () => {
      await expect(basePage.globalMessage).toHaveScreenshot('message.png', {
        timeout: 20000,
      });
    });
  });
});
