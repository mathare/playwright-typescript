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
  PrimarySidenav: [
    // Include the separators as empty strings
    'My Account',
    'My Orders',
    'My Downloadable Products',
    'My Wish List',
    '',
    'Address Book',
    'Account Information',
    'Stored Payment Methods',
    '',
    'My Product Reviews',
  ],
  SecondarySidenav: {
    CompareProducts: {
      Title: 'Compare Products',
      Placeholder: 'You have no items to compare.',
    },
    Wishlist: {
      Title: 'My Wish List',
      Placeholder: 'You have no items in your wish list.',
    },
  },
};

export enum Colors {
  Grey = 'rgb(245, 245, 245)',
  White = 'rgba(0, 0, 0, 0)',
}

export const Links = {
  Sidenav: [
    '/sales/order/history/',
    '/downloadable/customer/products/',
    '/wishlist/',
    '/customer/address/',
    '/customer/account/edit/',
    '/vault/cards/listaction/',
    '/review/customer/',
  ],
  ContactInfoActions: ['/customer/account/edit/', '/customer/account/edit/changepass/1/'],
  AddressBookActions: ['/customer/address/', '/customer/address/edit/'],
};
