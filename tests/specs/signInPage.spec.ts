import { test, expect } from '@playwright/test';
import SignInPage from '../pages/signInPage';
import { Colors } from '../data/shared';
import { ErrorMessages, ExpectedText } from '../data/signInPage';
import { dummyCustomer, unregisteredUser } from '../data/users';
import AccountPage from '../pages/accountPage';
import { GreetingText } from '../data/accountPage';

test.describe('Sign in page tests', () => {
  let signInPage: SignInPage;
  test.beforeEach(async ({ page }) => {
    signInPage = new SignInPage(page);
    await signInPage.open();
  });

  test.describe('Behavioural tests', () => {
    test.describe('Successful logins', () => {
      test('Login successfully', async ({ page, baseURL }) => {
        const accountPage = new AccountPage(page);
        await signInPage.loginAs(dummyCustomer.email, dummyCustomer.password);
        await expect(page).toHaveURL(`${baseURL}${accountPage.url}`);
        await expect(accountPage.greeting).toHaveText(GreetingText(dummyCustomer.name));
      });
    });

    test.describe('Unsuccessful logins', () => {
      test('Invalid credentials', async ({ page }) => {
        await signInPage.loginAs(unregisteredUser.email, unregisteredUser.password);
        await expect(signInPage.errorMessage).toBeVisible();
        await expect(signInPage.errorMessage).toHaveText(ErrorMessages.InvalidCredentials);
        await expect(page).toHaveURL(signInPage.url);
      });
    });
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

    test('Element styling', async () => {
      await expect(signInPage.mainContentArea).toHaveCSS('color', Colors.DarkGrey);
      await expect(signInPage.loginButton).toHaveClass(/primary/);
      await expect(signInPage.loginButton).toHaveCSS('background-color', Colors.Blue);
      await expect(signInPage.loginButton).toHaveCSS('color', Colors.White);
      await expect(signInPage.forgottenPasswordLink).toHaveCSS('color', Colors.LinkBlue);
      await expect(signInPage.createAccountButton).toHaveClass(/primary/);
      await expect(signInPage.createAccountButton).toHaveCSS('background-color', Colors.Blue);
      await expect(signInPage.createAccountButton).toHaveCSS('color', Colors.White);
    });

    test('Text content of page elements', async () => {
      await expect(signInPage.pageTitle).toHaveText(ExpectedText.PageTitle);
      await expect(signInPage.existingCustomerHeading).toHaveText(ExpectedText.ExistingCustomerHeading);
      await expect(signInPage.existingCustomerSubheading).toHaveText(ExpectedText.ExistingCustomerSubheading);
      await expect(signInPage.emailInputLabel).toHaveText(ExpectedText.EmailInputLabel);
      await expect(signInPage.emailInput).toBeEmpty();
      await expect(signInPage.passwordInputLabel).toHaveText(ExpectedText.PasswordInputLabel);
      await expect(signInPage.passwordInput).toBeEmpty();
      await expect(signInPage.loginButton).toHaveText(ExpectedText.SignInButton);
      await expect(signInPage.forgottenPasswordLink).toHaveText(ExpectedText.ForgottenPasswordLink);
      await expect(signInPage.newCustomerHeading).toHaveText(ExpectedText.NewCustomerHeading);
      await expect(signInPage.newCustomerContent).toHaveText(ExpectedText.NewCustomerContent);
      await expect(signInPage.createAccountButton).toHaveText(ExpectedText.CreateAccountButton);
    });

    test('Visual test', async () => {
      await expect(signInPage.mainContentArea).toHaveScreenshot('mainContent.png', {
        mask: [signInPage.adsWidget],
        timeout: 20000,
      });
    });
  });
});
