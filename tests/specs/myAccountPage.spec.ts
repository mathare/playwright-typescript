import { test, expect } from '@playwright/test';
import { MyAccountPage, BlockElements } from '../pages/myAccountPage';
import { Colors, ExpectedText, Links } from '../data/myAccountPage';
import SignInPage from '../pages/signInPage';
import { dummyCustomer } from '../data/users';

const Timeouts = {
  Visual: 20000,
};

test.describe('My Account page tests', () => {
  let myAccountPage: MyAccountPage;
  test.beforeEach(async ({ page, baseURL }) => {
    myAccountPage = new MyAccountPage(page);
    const signinPage = new SignInPage(page);
    await signinPage.open();
    await signinPage.loginAs(dummyCustomer.email, dummyCustomer.password);
    await expect(page).toHaveURL(`${baseURL}${myAccountPage.url}`);
  });

  test.describe('Appearance tests', () => {
    // This is an example of performing visual-style testing by asserting against various element properties rather than actually using image comparison
    // The tests could be combined but I have split them here to make them easier to read and maintain

    test('Main page elements displayed', async () => {
      await expect.soft(myAccountPage.globalMessage).toBeVisible();
      await expect.soft(myAccountPage.pageHeader.header).toBeVisible();
      await expect.soft(myAccountPage.pageHeader.topnav).toBeVisible();
      await expect.soft(myAccountPage.mainBlock).toBeVisible();
      await expect.soft(myAccountPage.primarySidenav).toBeVisible();
      await expect.soft(myAccountPage.secondarySidenav).toBeVisible();
      await expect.soft(myAccountPage.pageTitle).toBeVisible();
      await expect.soft(myAccountPage.accountInfoBlock).toBeVisible();
      await expect.soft(myAccountPage.addressBookBlock).toBeVisible();
      await expect.soft(myAccountPage.pageFooter.footer).toBeVisible();
      await expect.soft(myAccountPage.pageFooter.copyrightFooter).toBeVisible();
    });

    test('Element styling', async () => {
      await expect.soft(myAccountPage.mainBlock).toHaveCSS('background-color', Colors.White);
      await expect.soft(myAccountPage.primarySidenav).toHaveCSS('background-color', Colors.Grey);
      await expect.soft(myAccountPage.secondarySidenav).toHaveCSS('background-color', Colors.White);
    });

    test('Text content of page elements', async () => {
      await expect.soft(myAccountPage.pageTitle).toHaveText(ExpectedText.PageTitle);
      await expect.soft(myAccountPage.accountInfoTitle).toHaveText(ExpectedText.AccountInfo.Title);
      await expect
        .soft(myAccountPage.getBlockElement(myAccountPage.contactInfoBlock, BlockElements.Title))
        .toHaveText(ExpectedText.AccountInfo.ContactInfo.Title);
      await expect
        .soft(myAccountPage.getBlockElement(myAccountPage.contactInfoBlock, BlockElements.Content))
        .toHaveText(`${dummyCustomer.name}\n${dummyCustomer.email}`);
      let actions = myAccountPage.getBlockElement(myAccountPage.contactInfoBlock, BlockElements.Actions);
      expect.soft(await actions.count()).toEqual(ExpectedText.AccountInfo.ContactInfo.Actions.length);
      for (let i = 0; i < (await actions.count()); i++) {
        await expect.soft(actions.nth(i)).toHaveText(ExpectedText.AccountInfo.ContactInfo.Actions[i]);
      }
      await expect.soft(myAccountPage.addressBookTitle).toHaveText(ExpectedText.AddressBook.Title);
      actions = myAccountPage.addressBookActions;
      expect.soft(await actions.count()).toEqual(ExpectedText.AddressBook.Actions.length);
      for (let i = 0; i < (await actions.count()); i++) {
        await expect.soft(actions.nth(i)).toHaveText(ExpectedText.AddressBook.Actions[i]);
      }
      await expect
        .soft(myAccountPage.getBlockElement(myAccountPage.billingAddressBlock, BlockElements.Title))
        .toHaveText(ExpectedText.AddressBook.BillingAddress.Title);
      await expect
        .soft(myAccountPage.getBlockElement(myAccountPage.billingAddressBlock, BlockElements.Content))
        .toHaveText(ExpectedText.AddressBook.BillingAddress.Placeholder);
      actions = myAccountPage.getBlockElement(myAccountPage.billingAddressBlock, BlockElements.Actions);
      expect.soft(await actions.count()).toEqual(ExpectedText.AddressBook.BillingAddress.Actions.length);
      for (let i = 0; i < (await actions.count()); i++) {
        await expect.soft(actions.nth(i)).toHaveText(ExpectedText.AddressBook.BillingAddress.Actions[i]);
      }
      await expect
        .soft(myAccountPage.getBlockElement(myAccountPage.shippingAddressBlock, BlockElements.Title))
        .toHaveText(ExpectedText.AddressBook.ShippingAddress.Title);
      await expect
        .soft(myAccountPage.getBlockElement(myAccountPage.shippingAddressBlock, BlockElements.Content))
        .toHaveText(ExpectedText.AddressBook.ShippingAddress.Placeholder);
      actions = myAccountPage.getBlockElement(myAccountPage.shippingAddressBlock, BlockElements.Actions);
      expect.soft(await actions.count()).toEqual(ExpectedText.AddressBook.ShippingAddress.Actions.length);
      for (let i = 0; i < (await actions.count()); i++) {
        await expect.soft(actions.nth(i)).toHaveText(ExpectedText.AddressBook.ShippingAddress.Actions[i]);
      }
      const sidenavOptions = myAccountPage.sidenavOption;
      expect.soft(await sidenavOptions.count()).toEqual(ExpectedText.PrimarySidenav.length);
      for (let i = 0; i < (await sidenavOptions.count()); i++) {
        await expect.soft(sidenavOptions.nth(i)).toHaveText(ExpectedText.PrimarySidenav[i]);
      }
      await expect
        .soft(myAccountPage.compareProductsTitle)
        .toHaveText(ExpectedText.SecondarySidenav.CompareProducts.Title);
      await expect
        .soft(myAccountPage.compareProductsContent)
        .toHaveText(ExpectedText.SecondarySidenav.CompareProducts.Placeholder, { useInnerText: true });
      await expect.soft(myAccountPage.wishlistTitle).toHaveText(ExpectedText.SecondarySidenav.Wishlist.Title);
      await expect
        .soft(myAccountPage.wishlistContent)
        .toHaveText(ExpectedText.SecondarySidenav.Wishlist.Placeholder, { useInnerText: true });
    });

    test('My Account sidenav option selected by default', async () => {
      const selectedClass = /current/;
      const sidenavOptions = myAccountPage.sidenavOption;
      expect.soft(await sidenavOptions.count()).toEqual(ExpectedText.PrimarySidenav.length);
      await expect(sidenavOptions.first()).toHaveClass(selectedClass);
      for (let i = 1; i < (await sidenavOptions.count()); i++) {
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
      await expect(myAccountPage.mainContent).toHaveScreenshot('default.png', {
        mask: [myAccountPage.adsWidget],
        timeout: Timeouts.Visual,
      });
    });
  });

  test.describe('Link tests', () => {
    test('Sidenav links', async ({ baseURL }) => {
      const sidenavLinks = myAccountPage.sidenavLink;
      expect.soft(await sidenavLinks.count()).toEqual(Links.Sidenav.length);
      for (let i = 0; i < (await sidenavLinks.count()); i++) {
        await expect.soft(sidenavLinks.nth(i)).toHaveAttribute('href', `${baseURL}${Links.Sidenav[i]}`);
      }
    });

    test('Account info links', async ({ baseURL }) => {
      const actionLinks = myAccountPage.getBlockElement(myAccountPage.contactInfoBlock, BlockElements.Actions);
      expect.soft(await actionLinks.count()).toEqual(Links.ContactInfoActions.length);
      for (let i = 0; i < (await actionLinks.count()); i++) {
        await expect.soft(actionLinks.nth(i)).toHaveAttribute('href', `${baseURL}${Links.ContactInfoActions[i]}`);
      }
    });

    test('Address book links', async ({ baseURL }) => {
      await expect
        .soft(myAccountPage.addressBookActions)
        .toHaveAttribute('href', `${baseURL}${Links.AddressBookActions[0]}`);
      // The "Edit Address" link for billing & shipping address is the same
      await expect
        .soft(myAccountPage.getBlockElement(myAccountPage.billingAddressBlock, BlockElements.Actions))
        .toHaveAttribute('href', `${baseURL}${Links.AddressBookActions[1]}`);
      await expect
        .soft(myAccountPage.getBlockElement(myAccountPage.shippingAddressBlock, BlockElements.Actions))
        .toHaveAttribute('href', `${baseURL}${Links.AddressBookActions[1]}`);
    });
  });
});
