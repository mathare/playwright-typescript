import { test, expect } from '@playwright/test';
import { AccountPage, BlockElements } from '../pages/accountPage';
import { Colors, ExpectedText } from '../data/accountPage';
import SignInPage from '../pages/signInPage';
import { dummyCustomer } from '../data/users';
import { elementCount } from '../helpers/elementUtils';

test.describe('Account page tests', () => {
  let accountPage: AccountPage;
  test.beforeEach(async ({ page, baseURL }) => {
    accountPage = new AccountPage(page);
    const signinPage = new SignInPage(page);
    await signinPage.open();
    await signinPage.loginAs(dummyCustomer.email, dummyCustomer.password);
    await expect(page).toHaveURL(`${baseURL}${accountPage.url}`);
  });

  test.describe('Appearance tests', () => {
    // This is an example of performing visual-style testing without actual using image comparison but asserting against various element properties
    // The tests could be combined but I have split them here to make them easier to read and maintain

    test('Main page elements displayed', async () => {
      await expect.soft(accountPage.globalMessage).toBeVisible();
      await expect.soft(accountPage.pageHeader).toBeVisible();
      await expect.soft(accountPage.topNav).toBeVisible();
      await expect.soft(accountPage.mainBlock).toBeVisible();
      await expect.soft(accountPage.primarySidenav).toBeVisible();
      await expect.soft(accountPage.secondarySidenav).toBeVisible();
      await expect.soft(accountPage.pageTitle).toBeVisible();
      await expect.soft(accountPage.accountInfoBlock).toBeVisible();
      await expect.soft(accountPage.addressBookBlock).toBeVisible();
      await expect.soft(accountPage.pageFooter).toBeVisible();
      await expect.soft(accountPage.copyrightFooter).toBeVisible();
    });

    test('Element styling', async () => {
      await expect.soft(accountPage.mainBlock).toHaveCSS('background-color', Colors.White);
      await expect.soft(accountPage.primarySidenav).toHaveCSS('background-color', Colors.Grey);
      await expect.soft(accountPage.secondarySidenav).toHaveCSS('background-color', Colors.White);
    });

    test('Text content of page elements', async () => {
      await expect.soft(accountPage.pageTitle).toHaveText(ExpectedText.PageTitle);
      await expect.soft(accountPage.accountInfoTitle).toHaveText(ExpectedText.AccountInfo.Title);
      await expect
        .soft(accountPage.getBlockElement(accountPage.contactInfoBlock, BlockElements.Title))
        .toHaveText(ExpectedText.AccountInfo.ContactInfo.Title);
      await expect
        .soft(accountPage.getBlockElement(accountPage.contactInfoBlock, BlockElements.Content))
        .toHaveText(`${dummyCustomer.name}\n${dummyCustomer.email}`);
      let actions = accountPage.getBlockElement(accountPage.contactInfoBlock, BlockElements.Actions);
      for (let i = 0; i < (await elementCount(actions)); i++) {
        await expect.soft(actions.nth(i)).toHaveText(ExpectedText.AccountInfo.ContactInfo.Actions[i]);
      }
      await expect.soft(accountPage.addressBookTitle).toHaveText(ExpectedText.AddressBook.Title);
      actions = accountPage.addressBookActions;
      for (let i = 0; i < (await elementCount(actions)); i++) {
        await expect.soft(actions.nth(i)).toHaveText(ExpectedText.AddressBook.Actions[i]);
      }
      await expect
        .soft(accountPage.getBlockElement(accountPage.billingAddressBlock, BlockElements.Title))
        .toHaveText(ExpectedText.AddressBook.BillingAddress.Title);
      await expect
        .soft(accountPage.getBlockElement(accountPage.billingAddressBlock, BlockElements.Content))
        .toHaveText(ExpectedText.AddressBook.BillingAddress.Placeholder);
      actions = accountPage.getBlockElement(accountPage.billingAddressBlock, BlockElements.Actions);
      for (let i = 0; i < (await elementCount(actions)); i++) {
        await expect.soft(actions.nth(i)).toHaveText(ExpectedText.AddressBook.BillingAddress.Actions[i]);
      }
      await expect
        .soft(accountPage.getBlockElement(accountPage.shippingAddressBlock, BlockElements.Title))
        .toHaveText(ExpectedText.AddressBook.ShippingAddress.Title);
      await expect
        .soft(accountPage.getBlockElement(accountPage.shippingAddressBlock, BlockElements.Content))
        .toHaveText(ExpectedText.AddressBook.ShippingAddress.Placeholder);
      actions = accountPage.getBlockElement(accountPage.shippingAddressBlock, BlockElements.Actions);
      for (let i = 0; i < (await elementCount(actions)); i++) {
        await expect.soft(actions.nth(i)).toHaveText(ExpectedText.AddressBook.ShippingAddress.Actions[i]);
      }
      const sidenavOptions = accountPage.sidenavOption;
      for (let i = 0; i < (await elementCount(sidenavOptions)); i++) {
        await expect.soft(sidenavOptions.nth(i)).toHaveText(ExpectedText.PrimarySidenav[i]);
      }
      await expect
        .soft(accountPage.compareProductsTitle)
        .toHaveText(ExpectedText.SecondarySidenav.CompareProducts.Title);
      await expect
        .soft(accountPage.compareProductsContent)
        .toHaveText(ExpectedText.SecondarySidenav.CompareProducts.Placeholder, { useInnerText: true });
      await expect.soft(accountPage.wishlistTitle).toHaveText(ExpectedText.SecondarySidenav.Wishlist.Title);
      await expect
        .soft(accountPage.wishlistContent)
        .toHaveText(ExpectedText.SecondarySidenav.Wishlist.Placeholder, { useInnerText: true });
    });

    test('My Account sidenav option selected by default', async () => {
      const selectedClass = /current/;
      const sidenavOptions = accountPage.sidenavOption;
      await expect(sidenavOptions.first()).toHaveClass(selectedClass);
      for (let i = 1; i < (await elementCount(sidenavOptions)); i++) {
        await expect.soft(sidenavOptions.nth(i)).not.toHaveClass(selectedClass);
      }
    });

    // There is no test for only being able to select a single sidenav option at once here as by selecting a sidenav option
    // navigates to a different page within the app. The fact that the sidenav defaults to "My Account" and none of the
    // other sidenav options are selected, as shown by the above test, is sufficient at this stage. Adding a similar test to
    // the specs for the other pages accessible from the sidenav will provide the required coverage
  });

  test.describe('Visual tests', () => {
    test('Default page appearance', async () => {
      await expect(accountPage.mainContent).toHaveScreenshot('default.png', {
        mask: [accountPage.adsWidget],
        timeout: 20000,
      });
    });
  });

});
