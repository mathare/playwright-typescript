export const ExpectedText = {
  Title: 'Create New Customer Account',
  BlockTitles: {
    PersonalInfo: 'Personal Information',
    SignInInfo: 'Sign-in Information',
  },
  Fields: ['First Name', 'Last Name', 'Email', 'Password', 'Confirm Password'],
  PasswordStrength: {
    None: 'Password Strength: No Password',
    Weak: 'Password Strength: Weak',
    Medium: 'Password Strength: Medium',
    Strong: 'Password Strength: Strong',
    VeryStrong: 'Password Strength: Very Strong',
  },
  Button: 'Create an Account',
  ValidationErrors: {
    Required: 'This is a required field.',
    InvalidEmail: 'Please enter a valid email address (Ex: johndoe@domain.com).',
    PasswordLength:
      'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.',
    PasswordFormat:
      'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.',
    MismatchedPasswords: 'Please enter the same value again.',
  },
};

export const Colors = {
  Background: 'rgba(0, 0, 0, 0)',
  Error: 'rgb(237, 131, 128)',
  Font: 'rgb(51, 51, 51)',
  PrimaryButton: 'rgb(25, 121, 195)',
  White: 'rgb(255, 255, 255)',
};
