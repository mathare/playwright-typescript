import { test, expect } from '@playwright/test';
import { COLORS, EXPECTED_TEXT, PageFooter, SOCIAL_LINKS } from '../pages/components/pageFooter';
import { PRODUCT_INFO } from '../data/products';
import { login } from '../helpers/utils';
import { URLS } from '../data/pages';
import { USERS } from '../data/users';

let pageFooter: PageFooter;

test.beforeEach(async ({ page }) => {
  pageFooter = new PageFooter(page);
});

// This spec makes a not unreasonable assumption that the footer displayed at the bottom of all pages
// expect the login page is always the same. As such, the main assertions are performed against a single
// page (the inventory page) with visual testing used to validate the assumption across other pages

test.describe('Appearance tests', () => {
  [USERS.standard, USERS.problem, USERS.error, USERS.visual, USERS.performanceGlitch].forEach((user) => {
    test.describe(user.description, () => {
      test.beforeEach(async ({ page, context, baseURL }) => {
        await login(context, baseURL!, user.username);
        await page.goto(URLS.inventoryPage);
      });

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
    });
  });
});

test.describe('Visual tests', () => {
  [USERS.standard, USERS.problem, USERS.error, USERS.visual, USERS.performanceGlitch].forEach((user) => {
    test.describe(user.description, () => {
      test.beforeEach(async ({ context, baseURL }) => {
        await login(context, baseURL!, user.username);
      });

      // All pages should have the same footer
      // However, the checkout complete page footer is a slightly different size so is omitted from this visual testing
      const PAGES = [
        { page: 'Inventory', url: URLS.inventoryPage },
        { page: 'Cart', url: URLS.cartPage },
        { page: 'Checkout info', url: URLS.checkoutInfoPage },
        { page: 'Checkout overview', url: URLS.checkoutOverviewPage },
      ];
      for (let i = 0; i < PAGES.length; i++) {
        test(`${PAGES[i].page} page`, async ({ page }) => {
          await page.goto(PAGES[i].url);
          await expect(pageFooter.footer).toHaveScreenshot('default.png');
        });
      }

      test('Product page', async ({ page }) => {
        // Open random product page
        const PRODUCT_IDS = PRODUCT_INFO.map((prod) => prod.id);
        const PRODUCT_INDEX = Math.floor(Math.random() * PRODUCT_IDS.length);
        await page.goto(`${URLS.productPage}${PRODUCT_IDS[PRODUCT_INDEX]}`);
        await expect(pageFooter.footer).toHaveScreenshot('default.png');
      });
    });
  });
});

test.describe('Behavioural tests', () => {
  [USERS.standard, USERS.problem, USERS.error, USERS.visual, USERS.performanceGlitch].forEach((user) => {
    test.describe(user.description, () => {
      test.beforeEach(async ({ page, context, baseURL }) => {
        await login(context, baseURL!, user.username);
        await page.goto(URLS.inventoryPage);
      });

      test('Social media links open relevant page in new tab', async () => {
        for (let i = 0; i < SOCIAL_LINKS.length; i++) {
          let element = pageFooter.socialMediaLink.nth(i);
          await expect(element).toHaveAttribute('href', SOCIAL_LINKS[i]);
          await expect(element).toHaveAttribute('target', '_blank');
          await expect(element).toHaveAttribute('rel', 'noreferrer');
        }
      });
    });
  });
});
