import { Locator } from '@playwright/test';

export const ExpectedText = {
  Banner: 'Skip to Content\nSign In  Create an Account',
  Search: 'Search entire store here...',
  Topnav: ["What's New", 'Women', 'Men', 'Gear', 'Training', 'Sale'],
};

export const Colors = {
  DarkGrey: 'rgb(51, 51, 51)',
  Grey: 'rgb(110, 113, 110)',
  LightGrey: 'rgb(240, 240, 240)',
  White: 'rgb(255, 255, 255)',
  Border: {
    Active: 'rgb(255, 85, 1)',
    Inactive: 'rgb(87, 87, 87)',
  },
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
  TopsSubMenu: {
    Jackets: '/women/tops-women/jackets-women.html',
    HoodiesSweatshirts: '/women/tops-women/hoodies-and-sweatshirts-women.html',
    Tees: '/women/tops-women/tees-women.html',
    BrasTanks: '/women/tops-women/tanks-women.html',
  },
  Bottoms: '/women/bottoms-women.html',
  BottomsSubMenu: {
    Pants: '/women/bottoms-women/pants-women.html',
    Shorts: '/women/bottoms-women/shorts-women.html',
  },
};

const MenSubMenu = {
  Tops: '/men/tops-men.html',
  TopsSubMenu: {
    Jackets: '/men/tops-men/jackets-men.html',
    HoodiesSweatshirts: '/men/tops-men/hoodies-and-sweatshirts-men.html',
    Tees: '/men/tops-men/tees-men.html',
    Tanks: '/men/tops-men/tanks-men.html',
  },
  Bottoms: '/men/bottoms-men.html',
  BottomsSubMenu: {
    Pants: '/men/bottoms-men/pants-men.html',
    Shorts: '/men/bottoms-men/shorts-men.html',
  },
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
  SupportThisProject: 'https://buymeacoffee.com/softwaretestingb',
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

export function SubMenuKeys(submenu: Record<string, unknown>): string[] {
  return Object.keys(submenu).filter((key) => !key.endsWith('SubMenu'));
}

export async function MenuItemText(menuItem: Locator) {
  return (await menuItem.textContent())!.replace(/\W+/g, '');
}
