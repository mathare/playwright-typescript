export const ExpectedText = {
  GlobalMessage:
    'This is a demo store to test your test automaiton scripts. No orders will be fulfilled. If you are facing any issue, email us at hello@softwaretestingboard.com.',
  Banner: 'Skip to Content Click “Write for us” link in the footer to submit a guest post Sign In Create an Account',
  Search: 'Search entire store here...',
  TopNav: ["What's New", 'Women', 'Men', 'Gear', 'Training', 'Sale'],
  FooterLinks: ['Notes', 'Search Terms', 'Privacy and Cookie Policy', 'Advanced Search', 'Orders and Returns'],
  Copyright:
    'We know you have an assignment to complete. If this site is not functioning as expected, drop us an email. Copyright © 2013-present Magento, Inc. All rights reserved.',
};

export const enum GlobalMessageStyle {
  FontSize = '13px',
  FontWeight = '400',
}

export const Links = {
  SignIn: '/customer/account/login/referer/*/',
  CreateAnAccount: '/customer/account/create/',
  Logo: '/',
  Cart: '/checkout/cart/',
  Footer: {
    Notes:
      'https://softwaretestingboard.com/magento-store-notes/?utm_source=magento_store&utm_medium=banner&utm_campaign=notes_promo&utm_id=notes_promotion',
    SearchTerms: `/search/term/popular/`,
    PrivacyCookiePolicy: `/privacy-policy-cookie-restriction-mode/`,
    AdvancedSearch: `/catalogsearch/advanced/`,
    OrdersReturns: `/sales/guest/form/`,
  },
};
