import { ExpectedText, GlobalMessageStyle, Links } from '../data/basePage';
import { Colors } from '../data/shared';
import { elementCount } from '../helpers/elementUtils';
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
      await expect.soft(basePage.globalMessage).toBeVisible();
      await expect.soft(basePage.pageHeader).toBeVisible();
      await expect.soft(basePage.topNav).toBeVisible();
      await expect.soft(basePage.pageFooter).toBeVisible();
      await expect.soft(basePage.copyrightFooter).toBeVisible();
    });

    test('Element styling', async () => {
      await expect.soft(basePage.globalMessage).toHaveCSS('background-color', Colors.Red);
      await expect.soft(basePage.globalMessage).toHaveCSS('color', Colors.White);
      await expect.soft(basePage.globalMessage).toHaveCSS('font-size', GlobalMessageStyle.FontSize);
      await expect.soft(basePage.globalMessage).toHaveCSS('font-weight', GlobalMessageStyle.FontWeight);
      await expect.soft(basePage.banner).toHaveCSS('background-color', Colors.Grey);
      await expect.soft(basePage.banner).toHaveCSS('color', Colors.White);
      await expect.soft(basePage.topNav).toHaveCSS('background-color', Colors.LightGrey);
      await expect.soft(basePage.topNav).toHaveCSS('color', Colors.DarkGrey);
      await expect.soft(basePage.pageFooter).toHaveCSS('background-color', Colors.LighterGrey);
      await expect.soft(basePage.pageFooter).toHaveCSS('color', Colors.DarkGrey);
      await expect.soft(basePage.copyrightFooter).toHaveCSS('background-color', Colors.Grey);
      await expect.soft(basePage.copyrightFooter).toHaveCSS('color', Colors.White);
    });

    test('Text content of page elements', async () => {
      await expect.soft(basePage.globalMessage).toHaveText(ExpectedText.GlobalMessage);
      await expect.soft(basePage.banner).toHaveText(ExpectedText.Banner);
      await expect.soft(basePage.searchInput).toBeEmpty();
      await expect.soft(basePage.searchInput).toHaveAttribute('placeholder', ExpectedText.Search);
      const topNavLinks = basePage.topNavLvl0Link;
      for (let i = 0; i < (await elementCount(topNavLinks)); i++) {
        await expect.soft(topNavLinks.nth(i)).toHaveText(ExpectedText.TopNav[i]);
      }
      const footerLinks = basePage.pageFooterLink;
      for (let i = 0; i < (await elementCount(footerLinks)); i++) {
        await expect.soft(footerLinks.nth(i)).toHaveText(ExpectedText.FooterLinks[i]);
      }
      await expect.soft(basePage.copyrightFooter).toHaveText(ExpectedText.Copyright);
    });
  });

  test.describe('Link tests', () => {
    test('Banner links', async ({ baseURL }) => {
      await expect.soft(basePage.bannerLink.first()).toHaveAttribute('href', new RegExp(`${baseURL}${Links.SignIn}`));
      await expect.soft(basePage.bannerLink.nth(1)).toHaveAttribute(
        'href',
        new RegExp(`${baseURL}${Links.CreateAnAccount}`),
      );
    });

    test('Logo link', async ({ baseURL }) => {
      await expect.soft(basePage.logoLink).toHaveAttribute('href', `${baseURL}${Links.Logo}`);
    });

    test('Shopping cart link', async ({ baseURL }) => {
      await expect.soft(basePage.cartLink).toHaveAttribute('href', `${baseURL}${Links.Cart}`);
    });

    test('TopNav links', async ({ baseURL }) => {
      const lvl0Links = basePage.topNavLvl0Link;
      for (let i = 0; i < (await elementCount(lvl0Links)); i++) {
        const lvl0Text = (await lvl0Links.nth(i).innerText()).replace(/\W+/g, '');
        await expect.soft(lvl0Links.nth(i)).toHaveAttribute('href', `${baseURL}${Links.TopNav[lvl0Text]}`);

        // This section of the test isn't as neat as I would have liked. I wanted to verify the submenu levels individually e.g Women has Tops and Bottoms as level 1 menu items each with individual submenus. However, the DOM makes that awkward and as I am using a 3rd-party website I can't edit the DOM to add suitable locators/attributes as I would with a website under my control
        if (lvl0Text !== 'WhatsNew' && lvl0Text !== 'Sale') {
          const subMenuLinks = await basePage.getTopNavSubMenuLinks(i);
          for (let j = 0; j < (await elementCount(subMenuLinks); j++) {
            const subMenuText = (await subMenuLinks.nth(j).innerText()).replace(/\W+/g, '');
            await expect.soft(subMenuLinks.nth(j)).toHaveAttribute(
              'href',
              `${baseURL}${Links.TopNav[`${lvl0Text}SubMenu`][subMenuText]}`,
            );
          }
        }
      }
    });

    test('Footer links', async ({ baseURL }) => {
      const footerLinks = basePage.pageFooterLink;
      for (let i = 0; i < (await elementCount(footerLinks)); i++) {
        const expectedLink = Links.Footer[i].startsWith('https') ? Links.Footer[i] : `${baseURL}${Links.Footer[i]}`;
        await expect.soft(footerLinks.nth(i)).toHaveAttribute('href', expectedLink);
      }
    });
  });
});
