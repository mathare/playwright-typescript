import { test, expect } from '@playwright/test';
import SignInPage from '../pages/signInPage';

test.describe('Sign in page tests', () => {
  let signInPage: SignInPage;
  test.beforeEach(async ({ page }) => {
    signInPage = new SignInPage(page);
    await signInPage.open();
  });

  test.describe('Appearance tests', () => {
    // This is an example of performing visual-style testing without actual using image comparison but asserting against various element properties
    // The tests could be combined but I have split them here to make them easier to read and maintain

    test('Main page elements displayed', async () => {
      await expect(signInPage.globalMessage).toBeVisible();
      await expect(signInPage.pageHeader).toBeVisible();
      await expect(signInPage.topNav).toBeVisible();
      await expect(signInPage.pageTitle).toBeVisible();
      await expect(signInPage.existingCustomerBlock).toBeVisible();
      await expect(signInPage.emailInput).toBeVisible();
      await expect(signInPage.passwordInput).toBeVisible();
      await expect(signInPage.loginButton).toBeVisible();
      await expect(signInPage.forgottenPasswordLink).toBeVisible();
      await expect(signInPage.newCustomerBlock).toBeVisible();
      await expect(signInPage.createAccountButton).toBeVisible();
      await expect(signInPage.pageFooter).toBeVisible();
      await expect(signInPage.copyrightFooter).toBeVisible();
    });
  });
});
