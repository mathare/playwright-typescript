import { test, expect } from '@playwright/test';
import { CreateNewAccountPage, FormBlockElements } from '../pages/createNewAccountPage';
import { Colors, ExpectedText } from '../data/createNewAccountPage';

const Timeouts = {
  Visual: 20000,
};

test.describe('Create New Account page tests', () => {
  let createNewAccountPage: CreateNewAccountPage;
  test.beforeEach(async ({ page }) => {
    createNewAccountPage = new CreateNewAccountPage(page);
    await createNewAccountPage.open();
  });

  test.describe('Appearance tests', () => {
    // This is an example of performing visual-style testing by asserting against various element properties rather than actually using image comparison
    // The tests could be combined but I have split them here to make them easier to read and maintain

    test('Main page elements displayed', async () => {
      await expect.soft(createNewAccountPage.globalMessage).toBeVisible();
      await expect.soft(createNewAccountPage.pageHeader.header).toBeVisible();
      await expect.soft(createNewAccountPage.pageHeader.topnav).toBeVisible();
      await expect.soft(createNewAccountPage.mainContent).toBeVisible();
      await expect.soft(createNewAccountPage.pageTitle).toBeVisible();
      await expect.soft(createNewAccountPage.createAccountForm).toBeVisible();
      await expect.soft(createNewAccountPage.pageFooter.footer).toBeVisible();
      await expect.soft(createNewAccountPage.pageFooter.copyrightFooter).toBeVisible();
    });

    test('Create account form elements', async () => {
      await expect.soft(createNewAccountPage.fieldset).toHaveCount(2);
      await expect.soft(createNewAccountPage.personalInfoBlock).toBeVisible();
      await expect.soft(createNewAccountPage.signInInfoBlock).toBeVisible();
      await expect.soft(createNewAccountPage.createAccountButton).toBeVisible();
      // Personal info block
      await expect.soft(createNewAccountPage.formElement(0, FormBlockElements.Field)).toHaveCount(2);
      // Sign in info block
      await expect.soft(createNewAccountPage.formElement(1, FormBlockElements.Field)).toHaveCount(3);
      await expect.soft(createNewAccountPage.passwordStrengthIndicator).toBeVisible();
    });

    test('Element styling', async () => {
      await expect.soft(createNewAccountPage.mainBlock).toHaveCSS('background-color', Colors.Background);
      await expect.soft(createNewAccountPage.mainBlock).toHaveCSS('color', Colors.Font);
      await expect.soft(createNewAccountPage.createAccountButton).toHaveCSS('background-color', Colors.PrimaryButton);
      await expect.soft(createNewAccountPage.createAccountButton).toHaveCSS('color', Colors.White);
      await expect.soft(createNewAccountPage.createAccountButton).toHaveClass(/primary/);
    });

    test('Required fields', async () => {
      // All fields are required
      const fieldsets = createNewAccountPage.fieldset;
      await expect(fieldsets).toHaveCount(2);
      for (let i = 0; i < (await fieldsets.count()); i++) {
        const fields = createNewAccountPage.formElement(i, FormBlockElements.Field);
        expect(await fields.count()).toBeGreaterThan(0);
        for (let j = 0; j < (await fields.count()); j++) {
          await expect.soft(fields.nth(j)).toHaveClass(/required/);
        }
      }
    });

    test('Text content of page elements', async () => {
      await expect.soft(createNewAccountPage.pageTitle).toHaveText(ExpectedText.Title);
      await expect
        .soft(createNewAccountPage.formElement(0, FormBlockElements.Title))
        .toHaveText(ExpectedText.PersonalInfo.Title);
      let labels = createNewAccountPage.formElement(0, FormBlockElements.Label);
      await expect.soft(labels).toHaveCount(ExpectedText.PersonalInfo.Labels.length);
      for (let i = 0; i < (await labels.count()); i++) {
        await expect.soft(labels.nth(i)).toHaveText(ExpectedText.PersonalInfo.Labels[i]);
      }
      await expect
        .soft(createNewAccountPage.formElement(1, FormBlockElements.Title))
        .toHaveText(ExpectedText.SignInInfo.Title);
      labels = createNewAccountPage.formElement(1, FormBlockElements.Label);
      await expect.soft(labels).toHaveCount(ExpectedText.SignInInfo.Labels.length);
      for (let i = 0; i < (await labels.count()); i++) {
        await expect.soft(labels.nth(i)).toHaveText(ExpectedText.SignInInfo.Labels[i]);
      }
      await expect
        .soft(createNewAccountPage.passwordStrengthIndicator)
        .toHaveText(ExpectedText.SignInInfo.PasswordStrength.None);
      await expect(createNewAccountPage.createAccountButton).toHaveText(ExpectedText.Button);
    });
  });

  test.describe('Visual tests', () => {
    test('Default page appearance', async () => {
      await expect(createNewAccountPage.mainContent).toHaveScreenshot('default.png', {
        mask: [createNewAccountPage.adsWidget],
        timeout: Timeouts.Visual,
      });
    });
  });
});
