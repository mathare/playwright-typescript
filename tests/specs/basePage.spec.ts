import { ExpectedText, GlobalMessageStyle, Links } from '../data/basePage';
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

    test('Common page elements displayed', async () => {
      await expect(basePage.globalMessage).toBeVisible();
      await expect(basePage.pageHeader).toBeVisible();
      await expect(basePage.topNav).toBeVisible();
      await expect(basePage.pageFooter).toBeVisible();
      await expect(basePage.copyrightFooter).toBeVisible();
    });

    test('Element styling', async () => {
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
      const topNavLinks = basePage.topNavLvl0Link;
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

  test.describe('Link tests', () => {
    test('Banner links', async ({ baseURL }) => {
      await expect(basePage.bannerLink.first()).toHaveAttribute('href', new RegExp(`${baseURL}${Links.SignIn}`));
      await expect(basePage.bannerLink.nth(1)).toHaveAttribute(
        'href',
        new RegExp(`${baseURL}${Links.CreateAnAccount}`),
      );
    });

    test('Logo link', async ({ baseURL }) => {
      await expect(basePage.logoLink).toHaveAttribute('href', `${baseURL}${Links.Logo}`);
    });

    test('Shopping cart link', async ({ baseURL }) => {
      await expect(basePage.cartLink).toHaveAttribute('href', `${baseURL}${Links.Cart}`);
    });

    test('TopNav links', async ({ baseURL }) => {
      const lvl0Links = basePage.topNavLvl0Link;
      expect(await lvl0Links.count()).toBeGreaterThan(0);
      for (let i = 0; i < (await lvl0Links.count()); i++) {
        const lvl0Text = (await lvl0Links.nth(i).innerText()).replace(/\W+/g, '');
        await expect(lvl0Links.nth(i)).toHaveAttribute('href', `${baseURL}${Links.TopNav[lvl0Text]}`);

        // This section of the test isn't as neat as I would have liked. I wanted to verify the submenu levels individually e.g Women has Tops and Bottoms as level 1 menu items each with individual submenus. However, the DOM makes that awkward and as I am using a 3rd-party website I can't edit the DOM to add suitable locators/attributes as I would with a website under my control
        if (lvl0Text !== 'WhatsNew' && lvl0Text !== 'Sale') {
          const subMenuLinks = await basePage.getTopNavSubMenuLinks(i);
          expect(await subMenuLinks.count()).toBeGreaterThan(0);
          for (let j = 0; j < (await subMenuLinks.count()); j++) {
            const subMenuText = (await subMenuLinks.nth(j).innerText()).replace(/\W+/g, '');
            await expect(subMenuLinks.nth(j)).toHaveAttribute(
              'href',
              `${baseURL}${Links.TopNav[`${lvl0Text}SubMenu`][subMenuText]}`,
            );
          }
        }
      }
    });

    test('Footer links', async ({ baseURL }) => {
      const footerLinks = basePage.pageFooterLink;
      // The first link in the footer has a different base URL to the others so test it separately
      await expect(footerLinks.nth(0)).toHaveAttribute('href', `${Links.Footer['Notes']}`);
      for (let i = 1; i < (await footerLinks.count()); i++) {
        const linkText = (await footerLinks.nth(i).innerText()).replace(/\W+/g, '').replace('and', '');
        await expect(footerLinks.nth(i)).toHaveAttribute('href', `${baseURL}${Links.Footer[linkText]}`);
      }
    });
  });
});
