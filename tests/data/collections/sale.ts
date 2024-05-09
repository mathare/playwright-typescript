import { Product } from '../products';
import { CollectionExpectedText, Filter } from './shared';
import { Links as HeaderLinks } from '../pageHeader';

export const ExpectedText: CollectionExpectedText = {
  Breadcrumbs: 'Home  Sale',
  Title: 'Sale',
  PromoBlocks: [
    'Women’s Deals\nPristine prices on pants, tanks and bras.\nShop Women’s Deals',
    'Men’s Bargains\nStretch your budget with active attire\nShop Men’s Deals',
    'Luma Gear Steals\nYour best efforts deserve a deal\nShop Luma Gear',
    '20% OFF\nEvery $200-plus purchase!',
    'Spend $50 or more — shipping is free!\nBuy more, save more',
    "You can't have too many tees\n4 tees for the price of 3. Right now\nTees on sale",
  ],
  ProductsGrid: {},
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
  },
  PromoBlocks: [
    '/promotions/women-sale.html',
    '/promotions/men-sale.html',
    HeaderLinks.Topnav.Gear,
    '',
    '',
    HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees,
  ],
};

export const Filters: Filter[] = [
  {
    title: "Women's Deals",
    categories: [
      { title: 'Hoodies and Sweatshirts', link: HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts },
      { title: 'Jackets', link: HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets },
      { title: 'Tees', link: HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees },
      { title: 'Bras & Tanks', link: HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks },
      { title: 'Pants', link: HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants },
      { title: 'Shorts', link: HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts },
    ],
  },
  {
    // I have to replicate the typo in the test data since I don't have access to correct it on the website
    title: "Mens's Deals",
    categories: [
      { title: 'Hoodies and Sweatshirts', link: HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts },
      { title: 'Jackets', link: HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets },
      { title: 'Tees', link: HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees },
      { title: 'Pants', link: HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants },
      { title: 'Shorts', link: HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts },
    ],
  },
  {
    title: 'Gear Deals',
    categories: [
      { title: 'Bags', link: HeaderLinks.Topnav.GearSubMenu.Bags },
      { title: 'Fitness Equipment', link: HeaderLinks.Topnav.GearSubMenu.FitnessEquipment },
    ],
  },
];

export const Products: Product[] = [];
