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
  });
});
