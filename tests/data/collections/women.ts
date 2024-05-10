import { Product } from '../products';
import { CollectionExpectedText, Filter, ShoppingOptions } from './shared';
import * as Hoodies from '../productCategories/womenHoodies';
import * as Pants from '../productCategories/womenPants';
import * as Tanks from '../productCategories/womenTanks';
import * as Tees from '../productCategories/womenTees';
import { Links as HeaderLinks } from '../pageHeader';

export const ExpectedText: CollectionExpectedText = {
  Breadcrumbs: 'Home  Women',
  Title: 'Women',
  PromoBlocks: [
    'New Luma Yoga Collection\nYoga is ancient\nClothing shouldn’t be\nShop New Yoga',
    'You can’t have too many tees\n4 tees for the price of 3. Right now\nWomen’s Tees',
    'Hot pants\nHot deals\n20% OFF\nLuma pants when you shop today*\nShop Pants',
    'What would Erin wear?\nIt’s no secret: see Luma founder Erin Renny’s wardrobe go-to’s\nShop Erin Recommends\t',
    'Luma pants\nPants for yoga, gym and outdoors\nShop Pants',
    'Luma shorts\nExercise comfort\nShop Shorts',
    'Luma Bras\nTanks\nStock up for summer!\nShop Now',
  ],
  ProductsGrid: {
    Title: 'Hot Sellers',
    Subtitle: 'Favorites from Luma shoppers',
  },
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
  },
  PromoBlocks: [
    HeaderLinks.Topnav.Women,
    HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees,
    HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants,
    '/collections/erin-recommends.html',
    HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants,
    HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts,
    HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks,
  ],
};

export const Options: ShoppingOptions = {
  title: 'Shop By',
  subtitle: 'Category',
  categories: [
    {
      title: 'Tops',
      link: HeaderLinks.Topnav.WomenSubMenu.Tops,
      count: 50,
    },
    {
      title: 'Bottoms',
      link: HeaderLinks.Topnav.WomenSubMenu.Bottoms,
      count: 25,
    },
  ],
};

export const Filters: Filter[] = [
  {
    title: 'Tops',
    categories: [
      { title: 'Hoodies & Sweatshirts', link: HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts },
      { title: 'Jackets', link: HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets },
      { title: 'Tees', link: HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees },
      { title: 'Bras & Tanks', link: HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks },
    ],
  },
  {
    title: 'Bottoms',
    categories: [
      { title: 'Pants', link: HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants },
      { title: 'Shorts', link: HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts },
    ],
  },
];

export const Products: Product[] = [Tees.Products[2], Tanks.Products[0], Hoodies.Products[7], Pants.Products[1]];
