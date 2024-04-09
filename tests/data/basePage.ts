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

const TopNavLvl0 = {
  WhatsNew: '/what-is-new.html',
  Women: '/women.html',
  Men: '/men.html',
  Gear: '/gear.html',
  Training: '/training.html',
  Sale: '/sale.html',
};

const WomenSubMenu = {
  Tops: '/women/tops-women.html',
  Jackets: '/women/tops-women/jackets-women.html',
  HoodiesSweatshirts: '/women/tops-women/hoodies-and-sweatshirts-women.html',
  Tees: '/women/tops-women/tees-women.html',
  BrasTanks: '/women/tops-women/tanks-women.html',
  Bottoms: '/women/bottoms-women.html',
  Pants: '/women/bottoms-women/pants-women.html',
  Shorts: '/women/bottoms-women/shorts-women.html',
};

const MenSubMenu = {
  Tops: '/men/tops-men.html',
  Jackets: '/men/tops-men/jackets-men.html',
  HoodiesSweatshirts: '/men/tops-men/hoodies-and-sweatshirts-men.html',
  Tees: '/men/tops-men/tees-men.html',
  Tanks: '/men/tops-men/tanks-men.html',
  Bottoms: '/men/bottoms-men.html',
  Pants: '/men/bottoms-men/pants-men.html',
  Shorts: '/men/bottoms-men/shorts-men.html',
};

const GearSubMenu = {
  Bags: '/gear/bags.html',
  FitnessEquipment: '/gear/fitness-equipment.html',
  Watches: '/gear/watches.html',
};

const TrainingSubMenu = {
  VideoDownload: '/training/training-video.html',
};

export const Links = {
  SignIn: '/customer/account/login/referer/*/',
  CreateAnAccount: '/customer/account/create/',
  Logo: '/',
  Cart: '/checkout/cart/',
  TopNav: {
    ...TopNavLvl0,
    WomenSubMenu: {
      ...WomenSubMenu,
    },
    MenSubMenu: {
      ...MenSubMenu,
    },
    GearSubMenu: {
      ...GearSubMenu,
    },
    TrainingSubMenu: {
      ...TrainingSubMenu,
    },
  },
  Footer: {
    Notes:
      'https://softwaretestingboard.com/magento-store-notes/?utm_source=magento_store&utm_medium=banner&utm_campaign=notes_promo&utm_id=notes_promotion',
    SearchTerms: `/search/term/popular/`,
    PrivacyCookiePolicy: `/privacy-policy-cookie-restriction-mode/`,
    AdvancedSearch: `/catalogsearch/advanced/`,
    OrdersReturns: `/sales/guest/form/`,
  },
};
