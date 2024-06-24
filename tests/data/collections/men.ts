import { Product } from '../products';
import { CollectionExpectedText, Filter, ShoppingOptions } from './shared';
import { ProductDetails as Hoodies } from '../productCategories/menHoodies';
import { ProductDetails as Pants } from '../productCategories/menPants';
import { ProductDetails as Shorts } from '../productCategories/menShorts';
import { ProductDetails as Tanks } from '../productCategories/menTanks';
import { Links as HeaderLinks } from '../pageHeader';

export const ExpectedText: CollectionExpectedText = {
  Breadcrumbs: 'Home  Men',
  Title: 'Men',
  PromoBlocks: [
    'Luma’s Performance Fabric collection\nGoing the extra mile just got extra comfortable\nShop Performance',
    'Save up to $24!\nBuy 3 Luma tees, get 4 instead\nShop Tees',
    'Last chance\nfor pants\nTake\n20% OFF\nand save bigtime*\nShop Pants',
    'Luma shorts\nCool it now\nShop Shorts',
    'Luma tees\nGrab a tee or two!\nShop Tees',
    'Luma hoodies\nDress for fitness\nShop Hoodies',
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
    HeaderLinks.Topnav.Men,
    HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees,
    HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants,
    HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts,
    HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees,
    HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts,
  ],
};

export const Options: ShoppingOptions = {
  title: 'Shop By',
  subtitle: 'Category',
  categories: [
    {
      title: 'Tops',
      link: HeaderLinks.Topnav.MenSubMenu.Tops,
      count: 48,
    },
    {
      title: 'Bottoms',
      link: HeaderLinks.Topnav.MenSubMenu.Bottoms,
      count: 24,
    },
  ],
};

export const Filters: Filter[] = [
  {
    title: 'Tops',
    categories: [
      { title: 'Hoodies & Sweatshirts', link: HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts },
      { title: 'Jackets', link: HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets },
      { title: 'Tees', link: HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees },
      { title: 'Tanks', link: HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks },
    ],
  },
  {
    title: 'Bottoms',
    categories: [
      { title: 'Pants', link: HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants },
      { title: 'Shorts', link: HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts },
    ],
  },
];

export const Products: Product[] = [Tanks.Argus, Hoodies.Hero, Shorts.Meteor, Pants.Geo];
