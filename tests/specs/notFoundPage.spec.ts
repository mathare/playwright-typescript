import { test, expect } from '@playwright/test';
import { NotFoundPage } from '../pages/notFoundPage';
import { ExpectedText, Links } from '../data/notFoundPage';

const Timeouts = {
  Visual: 20000,
};

test.describe('Not found page tests', () => {
  let notFoundPage: NotFoundPage;
  test.beforeEach(async ({ page }) => {
    notFoundPage = new NotFoundPage(page);
    await notFoundPage.open();
  });

  test.describe('Appearance tests', () => {
    // This is an example of performing visual-style testing by asserting against various element properties rather than actually using image comparison
    // The tests could be combined but I have split them here to make them easier to read and maintain

    test('Main page elements displayed', async () => {
      await expect.soft(notFoundPage.globalMessage).toBeVisible();
      await expect.soft(notFoundPage.pageHeader.header).toBeVisible();
      await expect.soft(notFoundPage.pageHeader.topnav).toBeVisible();
      await expect.soft(notFoundPage.mainContent).toBeVisible();
      await expect.soft(notFoundPage.pageFooter.footer).toBeVisible();
      await expect.soft(notFoundPage.pageFooter.copyrightFooter).toBeVisible();
    });

    test('Text content of page elements', async () => {
      await expect.soft(notFoundPage.pageTitle).toHaveText(ExpectedText.PageTitle);
      await expect.soft(notFoundPage.mainBlock).toHaveCount(ExpectedText.MainBlocks.length);
      for (let i = 0; i < ExpectedText.MainBlocks.length; i++) {
        await expect.soft(notFoundPage.mainBlock.nth(i)).toHaveText(ExpectedText.MainBlocks[i], { useInnerText: true });
      }
      await expect.soft(notFoundPage.sidebarBlock).toHaveCount(ExpectedText.SidebarBlocks.length);
      for (let i = 0; i < ExpectedText.SidebarBlocks.length; i++) {
        await expect
          .soft(notFoundPage.sidebarBlock.nth(i))
          .toHaveText(ExpectedText.SidebarBlocks[i], { useInnerText: true });
      }
    });
  });

  test.describe('Link tests', () => {
    // Test skipped due to Google Adsense interfering
    test.skip('Main block links', async ({ baseURL }) => {
      await expect.soft(notFoundPage.link).toHaveCount(Links.length);
      for (let i = 0; i < Links.length; i++) {
        const expectedUrl = Links[i].url.startsWith('/') ? baseURL + Links[i].url : Links[i].url;
        await expect.soft(notFoundPage.link.nth(i)).toHaveText(Links[i].text);
        await expect.soft(notFoundPage.link.nth(i)).toHaveAttribute('href', expectedUrl);
      }
    });
  });

  test.describe.skip('Visual tests', () => {
    test('Default page appearance', async () => {
      await expect(notFoundPage.mainContent).toHaveScreenshot('default.png', { timeout: Timeouts.Visual });
    });
  });
});
