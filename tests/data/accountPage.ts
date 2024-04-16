export const GreetingText = (name: string) => {
  return `Welcome, ${name}!`;
};

export const ExpectedText = {
  PageTitle: 'My Account',
  AccountInfo: {
    Title: 'Account Information',
    ContactInfo: {
      Title: 'Contact Information',
      Actions: ['Edit', 'Change Password'],
    },
  },
  AddressBook: {
    Title: 'Address Book',
    Actions: ['Manage Addresses'],
    BillingAddress: {
      Title: 'Default Billing Address',
      Placeholder: 'You have not set a default billing address.',
      Actions: ['Edit Address'],
    },
    ShippingAddress: {
      Title: 'Default Shipping Address',
      Placeholder: 'You have not set a default shipping address.',
      Actions: ['Edit Address'],
    },
  },
};

export enum Colors {
  Grey = 'rgb(245, 245, 245)',
  White = 'rgba(0, 0, 0, 0)',
}
