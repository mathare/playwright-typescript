import { test, expect } from '@playwright/test';
import { CreateNewAccountPage, FieldElements, Fields } from '../pages/createNewAccountPage';
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
      const fields = createNewAccountPage.field;
      expect(await fields.count()).toBeGreaterThan(0);
      for (let j = 0; j < (await fields.count()); j++) {
        await expect.soft(fields.nth(j)).toHaveClass(/required/);
      }
    });

    test('Field input types', async () => {
      // Input types can be used to validate values & provide some formatting e.g. hiding passwords
      const types = {
        Text: 'text',
        Email: 'email',
        Password: 'password',
      };
      await expect
        .soft(createNewAccountPage.formElement(Fields.FirstName, FieldElements.Input))
        .toHaveAttribute('type', types.Text);
      await expect
        .soft(createNewAccountPage.formElement(Fields.LastName, FieldElements.Input))
        .toHaveAttribute('type', types.Text);
      await expect
        .soft(createNewAccountPage.formElement(Fields.Email, FieldElements.Input))
        .toHaveAttribute('type', types.Email);
      await expect
        .soft(createNewAccountPage.formElement(Fields.Password, FieldElements.Input))
        .toHaveAttribute('type', types.Password);
      await expect
        .soft(createNewAccountPage.formElement(Fields.ConfirmPassword, FieldElements.Input))
        .toHaveAttribute('type', types.Password);
    });

    test('Text content of page elements', async () => {
      await expect.soft(createNewAccountPage.pageTitle).toHaveText(ExpectedText.Title);
      await expect.soft(createNewAccountPage.blockTitle.nth(0)).toHaveText(ExpectedText.BlockTitles.PersonalInfo);
      await expect.soft(createNewAccountPage.blockTitle.nth(1)).toHaveText(ExpectedText.BlockTitles.SignInInfo);
      const fields = createNewAccountPage.field;
      await expect.soft(fields).toHaveCount(ExpectedText.Fields.length);
      for (let i = 0; i < (await fields.count()); i++) {
        await expect.soft(createNewAccountPage.formElement(i, FieldElements.Label)).toHaveText(ExpectedText.Fields[i]);
      }
      await expect.soft(createNewAccountPage.passwordStrengthIndicator).toHaveText(ExpectedText.PasswordStrength.None);
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

  test.describe('Data validation tests', () => {
    test('Validation errors not triggered on field blur', async () => {
      const fields = createNewAccountPage.field;
      await expect.soft(fields).toHaveCount(ExpectedText.Fields.length);
      for (let i = 0; i < (await fields.count()); i++) {
        await createNewAccountPage.formElement(i, FieldElements.Input).focus();
        await createNewAccountPage.formElement(i, FieldElements.Input).blur();
        await expect.soft(createNewAccountPage.formElement(i, FieldElements.Input)).not.toHaveClass(/mage-error/);
        await expect.soft(createNewAccountPage.formElement(i, FieldElements.ValidationError)).not.toBeVisible();
      }
    });

    test('All fields display validation error on submitting blank form', async () => {
      await createNewAccountPage.createAccountButton.click();
      const fields = createNewAccountPage.field;
      await expect.soft(fields).toHaveCount(ExpectedText.Fields.length);
      for (let i = 0; i < (await fields.count()); i++) {
        await expect.soft(createNewAccountPage.formElement(i, FieldElements.Input)).toHaveClass(/mage-error/);
        await expect
          .soft(createNewAccountPage.formElement(i, FieldElements.Input))
          .toHaveCSS('border-color', Colors.Error);
        await expect.soft(createNewAccountPage.formElement(i, FieldElements.ValidationError)).toBeVisible();
        await expect
          .soft(createNewAccountPage.formElement(i, FieldElements.ValidationError))
          .toHaveText(ExpectedText.ValidationErrors.Required);
      }
    });
});
