import { ExpectedText, Links } from '../data/pageHeader';
import { Colors } from '../data/shared';
import { elementCount } from '../helpers/elementUtils';
import { test, expect } from '@playwright/test';
import PageHeader from '../pages/pageHeader';
import BasePage from '../pages/basePage';

test.describe('Page header tests', () => {
  let pageHeader: PageHeader;
  test.beforeEach(async ({ page }) => {
    // Verify the common page header elements on the home page. Any page would do here but the home page should be quickest to access
    pageHeader = new PageHeader(page);
    await new BasePage(page).open('/');
  });

  test.describe('Appearance tests', () => {
    // This is an example of performing visual-style testing without actually using image comparison
    // but asserting against various element properties
    // The tests could be combined but I have split them here to make them easier to read and maintain

    test('Common page header elements displayed', async () => {
      await expect.soft(pageHeader.header).toBeVisible();
      await expect.soft(pageHeader.banner).toBeVisible();
      await expect.soft(pageHeader.logo).toBeVisible();
      await expect.soft(pageHeader.searchInput).toBeVisible();
      await expect.soft(pageHeader.cartLink).toBeVisible();
      await expect.soft(pageHeader.topnav).toBeVisible();
    });

    test('Element styling', async () => {
      await expect.soft(pageHeader.banner).toHaveCSS('background-color', Colors.Grey);
      await expect.soft(pageHeader.banner).toHaveCSS('color', Colors.White);
      await expect.soft(pageHeader.topnav).toHaveCSS('background-color', Colors.LightGrey);
      await expect.soft(pageHeader.topnav).toHaveCSS('color', Colors.DarkGrey);
    });

    test('Text content of page elements', async () => {
      await expect.soft(pageHeader.banner).toHaveText(ExpectedText.Banner);
      await expect.soft(pageHeader.searchInput).toBeEmpty();
      await expect.soft(pageHeader.searchInput).toHaveAttribute('placeholder', ExpectedText.Search);
      const topnavLinks = pageHeader.topnavLvl0Link;
      for (let i = 0; i < (await elementCount(topnavLinks)); i++) {
        await expect.soft(topnavLinks.nth(i)).toHaveText(ExpectedText.Topnav[i]);
      }
    });
  });

  test.describe('Link tests', () => {
    test('Banner links', async ({ baseURL }) => {
      await expect.soft(pageHeader.bannerLink.first()).toHaveAttribute('href', new RegExp(`${baseURL}${Links.SignIn}`));
      await expect
        .soft(pageHeader.bannerLink.nth(1))
        .toHaveAttribute('href', new RegExp(`${baseURL}${Links.CreateAnAccount}`));
    });

    test('Logo link', async ({ baseURL }) => {
      await expect.soft(pageHeader.logo).toHaveAttribute('href', `${baseURL}${Links.Logo}`);
    });

    test('Shopping cart link', async ({ baseURL }) => {
      await expect.soft(pageHeader.cartLink).toHaveAttribute('href', `${baseURL}${Links.Cart}`);
    });

    test('Topnav links', async ({ baseURL }) => {
      const lvl0Links = pageHeader.topnavLvl0Link;
      for (let i = 0; i < (await elementCount(lvl0Links)); i++) {
        const lvl0Text = (await lvl0Links.nth(i).innerText()).replace(/\W+/g, '');
        await expect.soft(lvl0Links.nth(i)).toHaveAttribute('href', `${baseURL}${Links.Topnav[lvl0Text]}`);

        // This section of the test isn't as neat as I would have liked. I wanted to verify the submenu levels individually
        // e.g Women has Tops and Bottoms as level 1 menu items each with individual submenus. However, the DOM makes that
        // awkward and as I am using a 3rd - party website I can't edit the DOM to add suitable locators/attributes as I
        // would with a website under my control
        if (lvl0Text !== 'WhatsNew' && lvl0Text !== 'Sale') {
          const subMenuLinks = await pageHeader.getTopnavSubMenuLinks(i);
          for (let j = 0; j < (await elementCount(subMenuLinks)); j++) {
            const subMenuText = (await subMenuLinks.nth(j).innerText()).replace(/\W+/g, '');
            await expect
              .soft(subMenuLinks.nth(j))
              .toHaveAttribute('href', `${baseURL}${Links.Topnav[`${lvl0Text}SubMenu`][subMenuText]}`);
          }
        }
      }
    });
  });
});