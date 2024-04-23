export const ExpectedText = {
  Banner: 'Skip to Content Click “Write for us” link in the footer to submit a guest post Sign In Create an Account',
  Search: 'Search entire store here...',
  Topnav: ["What's New", 'Women', 'Men', 'Gear', 'Training', 'Sale'],
};

export const Colors = {
  DarkGrey: 'rgb(51, 51, 51)',
  Grey: 'rgb(110, 113, 110)',
  LightGrey: 'rgb(240, 240, 240)',
  White: 'rgb(255, 255, 255)',
};

export const TopnavLvl0 = {
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
  Hoodies: '/women/tops-women/hoodies-and-sweatshirts-women.html',
  Tees: '/women/tops-women/tees-women.html',
  Tanks: '/women/tops-women/tanks-women.html',
  Bottoms: '/women/bottoms-women.html',
  Pants: '/women/bottoms-women/pants-women.html',
  Shorts: '/women/bottoms-women/shorts-women.html',
};

const MenSubMenu = {
  Tops: '/men/tops-men.html',
  Jackets: '/men/tops-men/jackets-men.html',
  Hoodies: '/men/tops-men/hoodies-and-sweatshirts-men.html',
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
  Topnav: {
    ...TopnavLvl0,
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
};
