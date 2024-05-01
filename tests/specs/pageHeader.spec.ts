import { ExpectedText, Colors, Links, TopnavLvl0 } from '../data/pageHeader';
import { test, expect } from '@playwright/test';
import PageHeader from '../pages/components/pageHeader';
import BasePage from '../pages/basePage';

const Timeouts = {
  Visual: 20000,
};

test.describe('Page header tests', () => {
  let pageHeader: PageHeader;
  test.beforeEach(async ({ page }) => {
    // Verify the common page header elements on the home page. Any page would do here but the home page should be quickest to access
    pageHeader = new PageHeader(page);
    await new BasePage(page).open('/');
  });

  test.describe('Appearance tests', () => {
    // This is an example of performing visual-style testing by asserting against various element properties rather than actually using image comparison
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
      await expect.soft(topnavLinks).toHaveCount(ExpectedText.Topnav.length);
      for (let i = 0; i < (await topnavLinks.count()); i++) {
        await expect.soft(topnavLinks.nth(i)).toHaveText(ExpectedText.Topnav[i]);
      }
    });
  });

  test.describe('Visual tests', () => {
    test('Default page header appearance', async () => {
      await expect(pageHeader.header).toHaveScreenshot('header.png', {
        timeout: Timeouts.Visual,
      });
      await expect(pageHeader.topnav).toHaveScreenshot('topnav.png', {
        timeout: Timeouts.Visual,
      });
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
      await expect.soft(lvl0Links).toHaveCount(Object.keys(TopnavLvl0).length);
      for (let i = 0; i < (await lvl0Links.count()); i++) {
        const lvl0MenuText = (await lvl0Links.nth(i).innerText()).replace(/\W+/g, '');
        await expect.soft(lvl0Links.nth(i)).toHaveAttribute('href', `${baseURL}${Links.Topnav[lvl0MenuText]}`);

        // This section of the test isn't as neat as I would have liked. I wanted to verify the submenu levels individually
        // e.g Women has Tops and Bottoms as level 1 menu items each with individual submenus. However, the DOM makes that
        // awkward and as I am using a 3rd-party website I can't edit the DOM to add suitable locators/attributes as I
        // would with a website under my control
        if (lvl0MenuText !== 'WhatsNew' && lvl0MenuText !== 'Sale') {
          // Lvl 1 menu items e.g. Women > Tops
          const lvl1MenuItems = await pageHeader.getTopnavSubMenuItems(i, 1);
          // const lvl1MenuItems = await pageHeader.getTopnavLink(lvl0Links.nth(i));
          const lvl1Keys = Object.keys(Links.Topnav[`${lvl0MenuText}SubMenu`]).filter(
            (key) => !key.endsWith('SubMenu'),
          );
          await expect.soft(lvl1MenuItems).toHaveCount(lvl1Keys.length);
          for (let j = 0; j < (await lvl1MenuItems.count()); j++) {
            const link = lvl1MenuItems.nth(j).locator('a').first();
            const lvl1MenuText = (await link.innerText()).replace(/\W+/g, '');
            await expect
              .soft(link)
              .toHaveAttribute('href', `${baseURL}${Links.Topnav[`${lvl0MenuText}SubMenu`][lvl1MenuText]}`);
            if (lvl0MenuText === 'Women' || lvl0MenuText === 'Men') {
              // Lvl 2 menu items e.g. Women > Tops > Jackets
              const lvl2MenuItems = await pageHeader.getTopnavLink(lvl1MenuItems.nth(j));
              const lvl2Submenu = Object.keys(Links.Topnav[`${lvl0MenuText}SubMenu`]).filter((key) =>
                key.endsWith('SubMenu'),
              )[j];
              const lvl2Keys = Object.keys(Links.Topnav[`${lvl0MenuText}SubMenu`][lvl2Submenu]);
              await expect.soft(lvl2MenuItems).toHaveCount(lvl2Keys.length + 1);
              for (let k = 1; k < (await lvl2MenuItems.count()); k++) {
                const link = lvl2MenuItems.nth(k);
                const lvl2MenuText = (await link.innerText()).replace(/\W+/g, '');
                await expect
                  .soft(link)
                  .toHaveAttribute(
                    'href',
                    `${baseURL}${Links.Topnav[`${lvl0MenuText}SubMenu`][`${lvl1MenuText}SubMenu`][lvl2MenuText]}`,
                  );
              }
            }
          }
        }
      }
    });
  });
});
