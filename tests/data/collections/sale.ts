import { Product } from '../products';
import { CollectionExpectedText } from './shared';
import * as Bags from '../productCategories/gearBags';
import * as Equipment from '../productCategories/gearFitnessEquipment';
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
    HeaderLinks.Topnav.WomenSubMenu.Tees,
  ],
};

export const Products: Product[] = [];
