import { CollectionExpectedText, Filter } from './shared';
import { Links as HeaderLinks } from '../pageHeader';
import * as Yoga from '../productCategories/yoga';

export const ExpectedText: CollectionExpectedText = {
  Breadcrumbs: "Home  What's New",
  Title: "What's New",
  PromoBlocks: [
    'New Luma Yoga Collection\nThe very latest yoga styles plus twists on timeless classics\nShop New Yoga',
    'Whatever day brings\nLuma Cocona™ for breathability, CoolTech™ for wicking, or a blend of both.\nPerformance Fabrics',
    'A sense of renewal\nEnjoy comfort of body and mind with Luma eco-friendly choices\nShop Eco Friendly ',
  ],
  ProductsGrid: {
    Title: "Luma's Latest",
    Subtitle: 'Just in time for the new season!',
  },
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
  },
  PromoBlocks: [Yoga.Url, '/collections/performance-new.html', '/collections/eco-new.html'],
};

export const Filters: Filter[] = [
  {
    title: "New in women's",
    categories: [
      { title: 'Hoodies & Sweatshirts', link: HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts },
      { title: 'Jackets', link: HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets },
      { title: 'Tees', link: HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees },
      { title: 'Bras & Tanks', link: HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks },
      { title: 'Pants', link: HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants },
      { title: 'Shorts', link: HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts },
    ],
  },
  {
    title: "New in men's",
    categories: [
      { title: 'Hoodies & Sweatshirts', link: HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts },
      { title: 'Jackets', link: HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets },
      { title: 'Tees', link: HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees },
      { title: 'Tanks', link: HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks },
      { title: 'Pants', link: HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants },
      { title: 'Shorts', link: HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts },
    ],
  },
];
