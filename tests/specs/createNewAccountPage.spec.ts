import { test, expect } from '@playwright/test';
import { CreateNewAccountPage, FieldElements, Fields } from '../pages/createNewAccountPage';
import { Colors, ExpectedText } from '../data/createNewAccountPage';

const Timeouts = {
  Visual: 20000,
};

test.describe('Create New Account page tests', () => {
  // NB There are no tests that actually create a new account within this spec as the application under test is a third-party website operating
  // in a production environment. Such testing should generally not be performed in production and as the website is outside of my control I
  // am also unable to teardown test data creating during these tests so would effectively be polluting production databases

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
      const numFields = await fields.count();
      expect(numFields).toBeGreaterThan(0);
      for (let j = 0; j < numFields; j++) {
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
      for (let i = 0; i < ExpectedText.Fields.length; i++) {
        await expect.soft(createNewAccountPage.formElement(i, FieldElements.Label)).toHaveText(ExpectedText.Fields[i]);
      }
      await expect.soft(createNewAccountPage.passwordStrengthIndicator).toHaveText(ExpectedText.PasswordStrength.None);
      await expect(createNewAccountPage.createAccountButton).toHaveText(ExpectedText.Button);
    });
  });

  test.describe.skip('Visual tests', () => {
    test('Default page appearance', async () => {
      await expect(createNewAccountPage.mainContent).toHaveScreenshot('default.png', { timeout: Timeouts.Visual });
    });
  });

  test.describe('Data validation tests', () => {
    test('Validation errors not triggered on field blur', async () => {
      const fields = createNewAccountPage.field;
      await expect.soft(fields).toHaveCount(ExpectedText.Fields.length);
      for (let i = 0; i < ExpectedText.Fields.length; i++) {
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
      for (let i = 0; i < ExpectedText.Fields.length; i++) {
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

    // I would usually also have a test to show that existing validation errors are cleared once the input value is valid
    // but as the data validation is only triggered by clicking the submit button rather than on blur such a test would
    // require the form to be completed with valid data and submitted, which itself would trigger creating a new account
    // and as per the earlier comment such tests are difficult for third-party applications in production environments

    test('Email validation', async () => {
      const invalidEmails = ['name', 'name@', 'name@domain', 'name.domain.com'];
      for (let i = 0; i < invalidEmails.length; i++) {
        await createNewAccountPage.formElement(Fields.Email, FieldElements.Input).fill(invalidEmails[i]);
        await createNewAccountPage.createAccountButton.click();
        await expect
          .soft(createNewAccountPage.formElement(Fields.Email, FieldElements.ValidationError))
          .toHaveText(ExpectedText.ValidationErrors.InvalidEmail);
      }
    });

    test('Password validation', async () => {
      // Passwords must be at least 8 characters and contain at least 3 of: lower case, upper case, numbers and special characters
      // NB Unlike other fields, password validation is triggered on blur (except for missing value validation as shown above)
      const passwordInput = createNewAccountPage.formElement(Fields.Password, FieldElements.Input);
      const passwordValidationError = createNewAccountPage.formElement(Fields.Password, FieldElements.ValidationError);

      await passwordInput.fill('a');
      await passwordInput.blur();
      await expect.soft(passwordValidationError).toHaveText(ExpectedText.ValidationErrors.PasswordLength);

      const invalidPasswords = [
        'password',
        'Password',
        'pa55word',
        'p@ssword',
        'PASSWORD',
        'PA55WORD',
        'P@SSWORD',
        '12345678',
        '!"£$%^&*',
        '1234%^&*',
      ];
      for (let i = 0; i < invalidPasswords.length; i++) {
        await passwordInput.fill(invalidPasswords[i]);
        await passwordInput.blur();
        await expect.soft(passwordValidationError).toHaveText(ExpectedText.ValidationErrors.PasswordFormat);
      }
    });

    test('No validation error for valid password', async () => {
      const passwordInput = createNewAccountPage.formElement(Fields.Password, FieldElements.Input);
      const passwordValidationError = createNewAccountPage.formElement(Fields.Password, FieldElements.ValidationError);

      await passwordInput.fill('Pa55word');
      await passwordInput.blur();
      await expect.soft(passwordValidationError).not.toBeVisible();
    });

    test('Passwords must match', async () => {
      const passwordInput = createNewAccountPage.formElement(Fields.Password, FieldElements.Input);
      const confirmPasswordInput = createNewAccountPage.formElement(Fields.ConfirmPassword, FieldElements.Input);
      const validationError = createNewAccountPage.formElement(Fields.ConfirmPassword, FieldElements.ValidationError);

      const testCases = [
        { Password: 'Pa55word', Confirm: 'p' },
        { Password: 'p', Confirm: 'Pa55word' },
        { Password: 'Pa55word', Confirm: 'Password' },
        { Password: 'Pa55word', Confirm: 'Pa55wor' },
        { Password: 'Pa55word', Confirm: 'Pa55word1' },
      ];
      for (let i = 0; i < testCases.length; i++) {
        await passwordInput.fill(testCases[i].Password);
        await confirmPasswordInput.fill(testCases[i].Confirm);
        await createNewAccountPage.createAccountButton.click();
        await expect.soft(validationError).toHaveText(ExpectedText.ValidationErrors.MismatchedPasswords);
      }
      await passwordInput.fill('Pa55word');
      await confirmPasswordInput.fill('Pa55word');
      await createNewAccountPage.createAccountButton.click();
      await expect.soft(validationError).not.toBeVisible();
    });
  });

  test('Password strengths', async () => {
    const passwordInput = createNewAccountPage.formElement(Fields.Password, FieldElements.Input);
    const strengthIndicator = createNewAccountPage.passwordStrengthIndicator;
    const fullWidth = (await strengthIndicator.boundingBox())?.width;

    enum testCases {
      Weak = 'password',
      Medium = 'p@55word',
      Strong = 'Pa55word!',
      VeryStrong = 'MyP@55w0rd!',
    }
    for (let i = 0; i < Object.keys(testCases).length; i++) {
      const key = Object.keys(testCases)[i];
      await passwordInput.fill(Object.values(testCases)[i]);
      await passwordInput.blur();
      await expect.soft(strengthIndicator).toHaveText(ExpectedText.PasswordStrength[key]);
      const style = await createNewAccountPage.passwordStrengthIndicatorStyle();
      expect.soft(style.backgroundColor).toBe(Colors[`Password${key}`]);
      expect.soft(style.width).toBe(`${(i + 1) * 0.25 * fullWidth!}px`);
    }
  });
});
