import { test, expect } from '@playwright/test';
import SignInPage from '../pages/signInPage';
import { ErrorMessages, ExpectedText, Colors } from '../data/signInPage';
import { dummyCustomer, unregisteredUser } from '../data/users';
import { MyAccountPage } from '../pages/myAccountPage';
import { GreetingText } from '../data/myAccountPage';

const Timeouts = {
  Visual: 20000,
};

test.describe('Sign in page tests', () => {
  let signInPage: SignInPage;
  test.beforeEach(async ({ page }) => {
    signInPage = new SignInPage(page);
    await signInPage.open();
  });

  test.describe('Behavioural tests', () => {
    test.describe.skip('Successful logins', () => {
      test('Login successfully', async ({ page, baseURL }) => {
        const myAccountPage = new MyAccountPage(page);
        await signInPage.loginAs(dummyCustomer.email, dummyCustomer.password);
        await expect(page).toHaveURL(`${baseURL}${myAccountPage.url}`);
        await expect.soft(myAccountPage.pageHeader.greeting).toHaveText(GreetingText(dummyCustomer.name));
      });
    });

    test.describe('Unsuccessful logins', () => {
      test.beforeEach(async ({}) => {
        // I HATE hardcoded waits and would rather wait on a page or element state but I _think_ the tests for unsuccessful logins
        // sometimes fail when the page isn't in the right state at the point the test runs - but I can't find a way of verifying
        // the correct page state before running these tests but a short wait seems to do the trick
        await signInPage.page.waitForTimeout(250);
      });

      test('Invalid credentials', async ({ page }) => {
        await signInPage.loginAs(unregisteredUser.email, unregisteredUser.password);
        await expect.soft(signInPage.errorMessage).toBeVisible();
        await expect.soft(signInPage.errorMessage).toHaveText(ErrorMessages.InvalidCredentials);
        await expect(page).toHaveURL(signInPage.url);
      });

      test('Missing credentials', async ({ page }) => {
        await signInPage.loginButton.click();
        await expect.soft(signInPage.errorMessage).not.toBeVisible();
        await expect.soft(signInPage.emailInputError).toBeVisible();
        await expect.soft(signInPage.emailInputError).toHaveText(ErrorMessages.MissingInput);
        await expect.soft(signInPage.passwordInputError).toBeVisible();
        await expect.soft(signInPage.passwordInputError).toHaveText(ErrorMessages.MissingInput);
        await expect(page).toHaveURL(signInPage.url);
      });

      test('Missing username', async ({ page }) => {
        await signInPage.passwordInput.fill(dummyCustomer.password);
        await signInPage.loginButton.click();
        await expect.soft(signInPage.errorMessage).not.toBeVisible();
        await expect.soft(signInPage.emailInputError).toBeVisible();
        await expect.soft(signInPage.emailInputError).toHaveText(ErrorMessages.MissingInput);
        await expect.soft(signInPage.passwordInputError).not.toBeVisible();
        await expect(page).toHaveURL(signInPage.url);
      });

      test('Missing password', async ({ page }) => {
        await signInPage.emailInput.fill(dummyCustomer.email);
        await signInPage.loginButton.click();
        await expect.soft(signInPage.errorMessage).not.toBeVisible();
        await expect.soft(signInPage.emailInputError).not.toBeVisible();
        await expect.soft(signInPage.passwordInputError).toBeVisible();
        await expect.soft(signInPage.passwordInputError).toHaveText(ErrorMessages.MissingInput);
        await expect(page).toHaveURL(signInPage.url);
      });

      test('Invalid email', async ({ page }) => {
        await signInPage.emailInput.fill('dummy.example@');
        await signInPage.loginButton.click();
        await expect.soft(signInPage.errorMessage).not.toBeVisible();
        await expect.soft(signInPage.emailInputError).toBeVisible();
        await expect.soft(signInPage.emailInputError).toHaveText(ErrorMessages.InvalidEmail);
        await expect(page).toHaveURL(signInPage.url);
      });
    });
  });

  test.describe('Appearance tests', () => {
    // This is an example of performing visual-style testing by asserting against various element properties rather than actually using image comparison
    // The tests could be combined but I have split them here to make them easier to read and maintain

    test('Main page elements displayed', async () => {
      await expect.soft(signInPage.globalMessage).toBeVisible();
      await expect.soft(signInPage.pageHeader.header).toBeVisible();
      await expect.soft(signInPage.pageHeader.topnav).toBeVisible();
      await expect.soft(signInPage.pageTitle).toBeVisible();
      await expect.soft(signInPage.existingCustomerBlock).toBeVisible();
      await expect.soft(signInPage.emailInput).toBeVisible();
      await expect.soft(signInPage.passwordInput).toBeVisible();
      await expect.soft(signInPage.loginButton).toBeVisible();
      await expect.soft(signInPage.forgottenPasswordLink).toBeVisible();
      await expect.soft(signInPage.newCustomerBlock).toBeVisible();
      await expect.soft(signInPage.createAccountButton).toBeVisible();
      await expect.soft(signInPage.pageFooter.footer).toBeVisible();
      await expect.soft(signInPage.pageFooter.copyrightFooter).toBeVisible();
    });

    test('Element styling', async () => {
      await expect.soft(signInPage.mainContent).toHaveCSS('color', Colors.DarkGrey);
      await expect.soft(signInPage.loginButton).toHaveClass(/primary/);
      await expect.soft(signInPage.loginButton).toHaveCSS('background-color', Colors.Blue);
      await expect.soft(signInPage.loginButton).toHaveCSS('color', Colors.White);
      await expect.soft(signInPage.forgottenPasswordLink).toHaveCSS('color', Colors.Link);
      await expect.soft(signInPage.createAccountButton).toHaveClass(/primary/);
      await expect.soft(signInPage.createAccountButton).toHaveCSS('background-color', Colors.Blue);
      await expect.soft(signInPage.createAccountButton).toHaveCSS('color', Colors.White);
    });

    test('Text content of page elements', async () => {
      await expect.soft(signInPage.pageTitle).toHaveText(ExpectedText.PageTitle);
      await expect.soft(signInPage.existingCustomerHeading).toHaveText(ExpectedText.ExistingCustomerHeading);
      await expect.soft(signInPage.existingCustomerSubheading).toHaveText(ExpectedText.ExistingCustomerSubheading);
      await expect.soft(signInPage.emailInputLabel).toHaveText(ExpectedText.EmailInputLabel);
      await expect.soft(signInPage.emailInput).toBeEmpty();
      await expect.soft(signInPage.passwordInputLabel).toHaveText(ExpectedText.PasswordInputLabel);
      await expect.soft(signInPage.passwordInput).toBeEmpty();
      await expect.soft(signInPage.loginButton).toHaveText(ExpectedText.SignInButton);
      await expect.soft(signInPage.forgottenPasswordLink).toHaveText(ExpectedText.ForgottenPasswordLink);
      await expect.soft(signInPage.newCustomerHeading).toHaveText(ExpectedText.NewCustomerHeading);
      await expect.soft(signInPage.newCustomerContent).toHaveText(ExpectedText.NewCustomerContent);
      await expect.soft(signInPage.createAccountButton).toHaveText(ExpectedText.CreateAccountButton);
    });

    test.skip('Visual test', async () => {
      await expect(signInPage.mainContent).toHaveScreenshot('default.png', { timeout: Timeouts.Visual });
    });
  });
});
