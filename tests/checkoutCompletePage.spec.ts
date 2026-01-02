import { expect, Locator, test } from '@playwright/test';
import { login } from '../helpers/utils';
import { URLS } from '../data/pages';
import { CheckoutCompletePage, COLORS, EXPECTED_TEXT } from '../pages/checkoutCompletePage';
import { USERS } from '../data/users';

let checkoutCompletePage: CheckoutCompletePage;

// The checkout complete page doesn't change whether we purchased items or not so
// we can proceed with an empty order and navigate directly to the page under test
test.beforeEach(async ({ page }) => {
  checkoutCompletePage = new CheckoutCompletePage(page);
});

test.describe('Appearance tests', () => {
  [USERS.standard, USERS.problem, USERS.error, USERS.visual, USERS.performanceGlitch].forEach((user) => {
    test.describe(user.description, () => {
      test.beforeEach(async ({ page, context, baseURL }) => {
        await login(context, baseURL!, user.username);
        await page.goto(URLS.checkoutCompletePage);
      });

      test('Default element visibility', async () => {
        await expect(checkoutCompletePage.pageHeader.primaryHeader).toBeVisible();
        await expect(checkoutCompletePage.subtitle).toBeVisible();
        await expect(checkoutCompletePage.checkoutCompleteContainer).toBeVisible();
        await expect(checkoutCompletePage.checkoutCompleteImg).toBeVisible();
        await expect(checkoutCompletePage.checkoutCompleteHeader).toBeVisible();
        await expect(checkoutCompletePage.checkoutCompleteText).toBeVisible();
        await expect(checkoutCompletePage.backButton).toBeVisible();
        await expect(checkoutCompletePage.pageFooter.footer).toBeVisible();
      });

      test('Text content of elements', async () => {
        await expect(checkoutCompletePage.subtitle).toHaveText(EXPECTED_TEXT.subtitle);
        await expect(checkoutCompletePage.checkoutCompleteHeader).toHaveText(EXPECTED_TEXT.header);
        await expect(checkoutCompletePage.checkoutCompleteText).toHaveText(EXPECTED_TEXT.body);
        await expect(checkoutCompletePage.backButton).toHaveText(EXPECTED_TEXT.button);
      });

      test('Default element styling', async ({ browserName }) => {
        let element = checkoutCompletePage.subtitle;
        await expect(element).toHaveCSS('color', COLORS.textColor);
        await expect(element).toHaveCSS('font-size', '18px');
        await expect(element).toHaveCSS('font-weight', '500');

        element = checkoutCompletePage.checkoutCompleteContainer;
        await expect(element).toHaveCSS('align-items', 'center');
        await expect(element).toHaveCSS('display', 'flex');
        await expect(element).toHaveCSS('flex-direction', 'column');
        await expect(element).toHaveCSS('padding', '30px 15px 100px');
        await expect(element).toHaveCSS('text-align', 'center');

        element = checkoutCompletePage.checkoutCompleteImg;
        await expect(element).toHaveAttribute('alt', 'Pony Express');
        await expect(element).toHaveClass('pony_express');
        const regex = '^data:image\\/png;base64,[A-Za-z0-9+\\/]*=$';
        await expect(element).toHaveAttribute('src', new RegExp(regex));

        element = checkoutCompletePage.checkoutCompleteHeader;
        await expect(element).toHaveCSS('color', COLORS.textColor);
        await expect(element).toHaveCSS('font-size', '24px');
        await expect(element).toHaveCSS('font-weight', '500');

        element = checkoutCompletePage.checkoutCompleteText;
        await expect(element).toHaveCSS('color', COLORS.textColor);
        await expect(element).toHaveCSS('font-size', '14px');
        await expect(element).toHaveCSS('font-weight', '400');

        element = checkoutCompletePage.backButton;
        await expect(element).toContainClass('btn_primary');
        await expect(element).toHaveCSS('background-color', COLORS.backButton.backgroundColor);
        const expectedBorderStyle = browserName === 'firefox' ? '0px' : '0px none';
        await expect(element).toHaveCSS('border', `${expectedBorderStyle} ${COLORS.backButton.borderColor}`);
        await expect(element).toHaveCSS('border-radius', '4px');
        await expect(element).toHaveCSS('color', COLORS.textColor);
        await expect(element).toHaveCSS('cursor', 'pointer');
        await expect(element).toHaveCSS('font-size', '16px');
        await expect(element).toHaveCSS('font-weight', '500');
      });
    });
  });
});

test.describe('Visual tests', () => {
  let maskedElements: Locator[];

  [USERS.standard, USERS.problem, USERS.error, USERS.visual, USERS.performanceGlitch].forEach((user) => {
    test.describe(user.description, () => {
      test.beforeEach(async ({ page, context, baseURL }) => {
        await login(context, baseURL!, user.username);
        await page.goto(URLS.checkoutCompletePage);
        maskedElements = [checkoutCompletePage.pageFooter.footer];
      });

      test('Default state', async ({ page }) => {
        const SNAPSHOT = user === USERS.visual ? 'defaultMisaligned.png' : 'default.png';
        await expect(page).toHaveScreenshot(SNAPSHOT, { fullPage: true, mask: maskedElements });
      });

      test('Menu open', async ({ page }) => {
        const SNAPSHOT = user === USERS.visual ? 'menuOpenMisaligned.png' : 'menuOpen.png';
        await checkoutCompletePage.pageHeader.menuButton.click();
        await expect(page).toHaveScreenshot(SNAPSHOT, { fullPage: true, mask: maskedElements });
      });
    });
  });
});

test.describe('Behavioural tests', () => {
  [USERS.standard, USERS.problem, USERS.error, USERS.visual, USERS.performanceGlitch].forEach((user) => {
    test.describe(user.description, () => {
      test.beforeEach(async ({ page, context, baseURL }) => {
        await login(context, baseURL!, user.username);
        await page.goto(URLS.checkoutCompletePage);
      });

      test('"Back Home" button opens inventory page', async ({ page, baseURL }) => {
        await checkoutCompletePage.backButton.click();
        await expect(page).toHaveURL(`${baseURL}${URLS.inventoryPage}`);
      });
    });
  });
});
