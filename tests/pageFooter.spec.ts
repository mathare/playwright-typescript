import { test, expect } from '@playwright/test';
import { COLORS, EXPECTED_TEXT, PageFooter, SOCIAL_LINKS } from '../pages/components/pageFooter';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage, PRODUCT_ELEMENTS } from '../pages/inventoryPage';
import { PRODUCT_INFO } from '../data/products';
import { URLS } from '../data/pages';

// This spec makes a not unreasonable assumption that the footer displayed at the bottom of all pages
// expect the login page is always the same. As such, the main assertions are performed against a single
// page (the inventory page) with visual testing used to validate the assumption across other pages

test.describe('Page footer tests', () => {
  let pageFooter: PageFooter;

  test.beforeEach(async ({ page, baseURL }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('standard_user');
    await expect(page).toHaveURL(`${baseURL}${URLS.inventoryPage}`);
    pageFooter = new PageFooter(page);
  });

  test.describe('Appearance tests', () => {
    test('Default element visibility', async () => {
      await expect(pageFooter.footer).toBeVisible();
      await expect(pageFooter.socialMediaItem).toHaveCount(EXPECTED_TEXT.socialMedia.length);
      await expect(pageFooter.footerCopy).toBeVisible();
    });

    test('Text content of elements', async () => {
      for (let i = 0; i < EXPECTED_TEXT.socialMedia.length; i++) {
        await expect(pageFooter.socialMediaItem.nth(i)).toHaveText(EXPECTED_TEXT.socialMedia[i]);
      }
      await expect(pageFooter.footerCopy).toHaveText(EXPECTED_TEXT.copy);
    });

    test('Element styling', async () => {
      await expect(pageFooter.footer).toHaveCSS('background-color', COLORS.backgroundColor);
      const numSocialMediaItems = await pageFooter.socialMediaItem.count();
      const regex = '^url\\("data:image\\/png;base64,[A-Za-z0-9+\\/=\\"\\)]*$';
      for (let i = 0; i < numSocialMediaItems; i++) {
        // Social media items each have a different base64-encoded background image so verify against a regex
        await expect(pageFooter.socialMediaItem.nth(i)).toHaveCSS('background-image', new RegExp(regex));
        await expect(pageFooter.socialMediaLink.nth(i)).toHaveCSS('color', COLORS.socialLinkTextColor);
        await expect(pageFooter.socialMediaLink.nth(i)).toHaveCSS('font-size', '0px');
      }
      await expect(pageFooter.footerCopy).toHaveCSS('color', COLORS.textColor);
    });

    test.describe('Visual tests', () => {
      test('Inventory page', async () => {
        await expect(pageFooter.footer).toHaveScreenshot('default.png');
      });

      test('Product page', async ({ page }) => {
        // Open random product page
        const PRODUCT_INDEX = Math.floor(Math.random() * PRODUCT_INFO.length);
        const inventoryPage = new InventoryPage(page);
        await inventoryPage.getProductElement(PRODUCT_INDEX, PRODUCT_ELEMENTS.title).click();
        await expect(pageFooter.footer).toHaveScreenshot('default.png');
      });
    });
  });

  test('Social media links open relevant page in new tab', async () => {
    for (let i = 0; i < SOCIAL_LINKS.length; i++) {
      await expect(pageFooter.socialMediaLink.nth(i)).toHaveAttribute('href', SOCIAL_LINKS[i]);
      await expect(pageFooter.socialMediaLink.nth(i)).toHaveAttribute('target', '_blank');
      await expect(pageFooter.socialMediaLink.nth(i)).toHaveAttribute('rel', 'noreferrer');
    }
  });
});
