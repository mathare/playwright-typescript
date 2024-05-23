import { Links as HeaderLinks } from '../pageHeader';
import { Colors, Product, Sizes } from '../products';
import { FilterCategory, ProductCategoryExpectedText } from './shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Women  Tops  Hoodies & Sweatshirts',
  Title: 'Hoodies & Sweatshirts',
  ProductCount: '12 Items',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Women: HeaderLinks.Topnav.Women,
    Tops: HeaderLinks.Topnav.WomenSubMenu.Tops,
  },
};

export const Filters: FilterCategory[] = [
  {
    title: 'STYLE',
    options: [
      {
        title: 'Full Zip',
        count: 6,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?style_general=128`,
      },
      {
        title: 'Sweatshirt',
        count: 5,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?style_general=132`,
      },
      {
        title: 'Pullover',
        count: 6,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?style_general=136`,
      },
      {
        title: 'Hoodie',
        count: 9,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?style_general=137`,
      },
    ],
  },
  {
    title: 'SIZE',
    options: [
      { title: 'XS', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?size=166` },
      { title: 'S', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?size=167` },
      { title: 'M', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?size=168` },
      { title: 'L', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?size=169` },
      { title: 'XL', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?size=170` },
    ],
  },
  {
    title: 'CLIMATE',
    options: [
      {
        title: 'All-Weather',
        count: 5,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?climate=201`,
      },
      {
        title: 'Cold',
        count: 2,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?climate=202`,
      },
      {
        title: 'Cool',
        count: 9,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?climate=203`,
      },
      {
        title: 'Indoor',
        count: 6,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?climate=204`,
      },
      {
        title: 'Mild',
        count: 8,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?climate=205`,
      },
      {
        title: 'Spring',
        count: 9,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?climate=207`,
      },
      {
        title: 'Warm',
        count: 1,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?climate=208`,
      },
      {
        title: 'Windy',
        count: 1,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?climate=209`,
      },
      {
        title: 'Wintry',
        count: 2,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?climate=210`,
      },
    ],
  },
  {
    title: 'COLOR',
    options: [
      { title: 'Blue', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?color=50` },
      { title: 'Gray', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?color=52` },
      { title: 'Green', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?color=53` },
      { title: 'Orange', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?color=56` },
      { title: 'Purple', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?color=57` },
      { title: 'Red', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?color=58` },
      { title: 'White', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?color=59` },
      { title: 'Yellow', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?color=60` },
    ],
  },
  {
    title: 'ECO COLLECTION',
    options: [
      {
        title: 'Yes',
        count: 2,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?eco_collection=1`,
      },
      {
        title: 'No',
        count: 10,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?eco_collection=0`,
      },
    ],
  },
  {
    title: 'ERIN RECOMMENDS',
    options: [
      {
        title: 'Yes',
        count: 3,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?erin_recommends=1`,
      },
      {
        title: 'No',
        count: 9,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?erin_recommends=0`,
      },
    ],
  },
  {
    title: 'MATERIAL',
    options: [
      {
        title: 'Cotton',
        count: 6,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?material=33`,
      },
      {
        title: 'Fleece',
        count: 3,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?material=144`,
      },
      {
        title: 'Jersey',
        count: 1,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?material=146`,
      },
      {
        title: 'Nylon',
        count: 2,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?material=37`,
      },
      {
        title: 'Polyester',
        count: 6,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?material=38`,
      },
      {
        title: 'Spandex',
        count: 6,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?material=150`,
      },
      {
        title: 'CoolTech™',
        count: 1,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?material=155`,
      },
      {
        title: 'Wool',
        count: 2,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?material=158`,
      },
    ],
  },
  {
    title: 'NEW',
    options: [
      { title: 'Yes', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?new=1` },
      { title: 'No', count: 9, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?new=0` },
    ],
  },
  {
    title: 'PATTERN',
    options: [
      {
        title: 'Color-Blocked',
        count: 1,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?pattern=194`,
      },
      {
        title: 'Solid',
        count: 11,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?pattern=196`,
      },
    ],
  },
  {
    title: 'PERFORMANCE FABRIC',
    options: [
      {
        title: 'Yes',
        count: 2,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?performance_fabric=1`,
      },
      {
        title: 'No',
        count: 10,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?performance_fabric=0`,
      },
    ],
  },
  {
    title: 'PRICE',
    options: [
      {
        title: '$30.00 - $39.99',
        count: 1,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?price=30-40`,
      },
      {
        title: '$40.00 - $49.99',
        count: 3,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?price=40-50`,
      },
      {
        title: '$50.00 - $59.99',
        count: 6,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?price=50-60`,
      },
      {
        title: '$60.00 and above',
        count: 2,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?price=60-`,
      },
    ],
  },
  {
    title: 'SALE',
    options: [
      { title: 'Yes', count: 2, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?sale=1` },
      { title: 'No', count: 10, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.HoodiesSweatshirts}?sale=0` },
    ],
  },
];

export const Products: Product[] = [
  {
    name: 'Circe Hooded Ice Fleece',
    price: 'As low as $68.00',
    sizes: Sizes,
    colors: [Colors.Grey, Colors.Green, Colors.Purple],
    link: '/circe-hooded-ice-fleece.html',
  },
  {
    name: 'Eos V-Neck Hoodie',
    price: 'As low as $54.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Orange],
    link: '/eos-v-neck-hoodie.html',
  },
  {
    name: 'Helena Hooded Fleece',
    price: 'As low as $55.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Grey, Colors.Yellow],
    link: '/helena-hooded-fleece.html',
  },
  {
    name: 'Ariel Roll Sleeve Sweatshirt',
    price: 'As low as $39.00',
    sizes: Sizes,
    colors: [Colors.Green, Colors.Purple, Colors.Red],
    link: '/ariel-roll-sleeve-sweatshirt.html',
  },
  {
    name: 'Cassia Funnel Sweatshirt',
    price: 'As low as $48.00',
    sizes: Sizes,
    colors: [Colors.Orange, Colors.Purple, Colors.White],
    link: '/cassia-funnel-sweatshirt.html',
  },
  {
    name: 'Phoebe Zipper Sweatshirt',
    price: 'As low as $59.00',
    sizes: Sizes,
    colors: [Colors.Grey, Colors.Purple, Colors.White],
    link: '/phoebe-zipper-sweatshirt.html',
  },
  {
    name: 'Daphne Full-Zip Hoodie',
    rating: '80%',
    reviews: '2 Reviews',
    price: 'As low as $59.00',
    sizes: Sizes,
    colors: [Colors.Purple],
    link: '/daphne-full-zip-hoodie.html',
  },
  {
    name: 'Selene Yoga Hoodie',
    rating: '80%',
    reviews: '3 Reviews',
    price: 'As low as $42.00',
    sizes: Sizes,
    colors: [Colors.Orange, Colors.Purple, Colors.White],
    link: '/selene-yoga-hoodie.html',
  },
  {
    name: 'Miko Pullover Hoodie',
    rating: '60%',
    reviews: '3 Reviews',
    price: 'As low as $69.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Orange, Colors.Purple],
    link: '/miko-pullover-hoodie.html',
  },
  {
    name: 'Autumn Pullie',
    rating: '60%',
    reviews: '3 Reviews',
    price: 'As low as $57.00',
    sizes: Sizes,
    colors: [Colors.Green, Colors.Purple, Colors.Red],
    link: '/autumn-pullie.html',
  },
  {
    name: 'Hera Pullover Hoodie',
    rating: '67%',
    reviews: '3 Reviews',
    price: 'As low as $48.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Orange],
    link: '/hera-pullover-hoodie.html',
  },
  {
    // This is surely a typo but because I want my tests to pass and I can't change the actual product data I have to include the same typo here
    name: 'Mona Pullover Hoodlie',
    rating: '87%',
    reviews: '3 Reviews',
    price: 'As low as $57.00',
    sizes: Sizes,
    colors: [Colors.Green, Colors.Orange, Colors.Purple],
    link: '/mona-pullover-hoodlie.html',
  },
];
