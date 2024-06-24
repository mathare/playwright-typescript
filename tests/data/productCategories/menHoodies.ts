import { Links as HeaderLinks } from '../pageHeader';
import { Colors, Product, Sizes } from '../products';
import { FilterCategory, ProductCategoryExpectedText } from './shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Men  Tops  Hoodies & Sweatshirts',
  Title: 'Hoodies & Sweatshirts',
  ProductCount: 'Items 1-12 of 13',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Men: HeaderLinks.Topnav.Men,
    Tops: HeaderLinks.Topnav.MenSubMenu.Tops,
  },
};

export const Filters: FilterCategory[] = [
  {
    title: 'SIZE',
    options: [
      { title: 'XS', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?size=166` },
      { title: 'S', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?size=167` },
      { title: 'M', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?size=168` },
      { title: 'L', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?size=169` },
      { title: 'XL', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?size=170` },
    ],
  },
  {
    title: 'CLIMATE',
    options: [
      {
        title: 'All-Weather',
        count: 9,
        link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?climate=201`,
      },
      { title: 'Cool', count: 11, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?climate=203` },
      {
        title: 'Indoor',
        count: 9,
        link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?climate=204`,
      },
      {
        title: 'Spring',
        count: 11,
        link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?climate=207`,
      },
      { title: 'Windy', count: 9, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?climate=209` },
    ],
  },
  {
    title: 'COLOR',
    options: [
      { title: 'Black', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?color=49` },
      { title: 'Blue', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?color=50` },
      { title: 'Brown', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?color=51` },
      { title: 'Gray', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?color=52` },
      { title: 'Green', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?color=53` },
      { title: 'Lavender', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?color=54` },
      { title: 'Orange', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?color=56` },
      { title: 'Purple', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?color=57` },
      { title: 'Red', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?color=58` },
      { title: 'White', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?color=59` },
      { title: 'Yellow', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?color=60` },
    ],
  },
  {
    title: 'ECO COLLECTION',
    options: [
      {
        title: 'Yes',
        count: 3,
        link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?eco_collection=1`,
      },
      {
        title: 'No',
        count: 10,
        link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?eco_collection=0`,
      },
    ],
  },
  {
    title: 'ERIN RECOMMENDS',
    options: [
      {
        title: 'Yes',
        count: 3,
        link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?erin_recommends=1`,
      },
      {
        title: 'No',
        count: 10,
        link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?erin_recommends=0`,
      },
    ],
  },
  {
    title: 'MATERIAL',
    options: [
      {
        title: 'Cocona® performance fabric',
        count: 1,
        link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?material=142`,
      },
      {
        title: 'Fleece',
        count: 5,
        link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?material=144`,
      },
      { title: 'Hemp', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?material=145` },
      {
        title: 'LumaTech™',
        count: 1,
        link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?material=147`,
      },
      { title: 'Nylon', count: 5, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?material=37` },
      {
        title: 'Polyester',
        count: 5,
        link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?material=38`,
      },
      {
        title: 'Organic Cotton',
        count: 4,
        link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?material=153`,
      },
      {
        title: 'CoolTech™',
        count: 1,
        link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?material=155`,
      },
      { title: 'Wool', count: 6, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?material=158` },
    ],
  },
  {
    title: 'NEW',
    options: [
      { title: 'Yes', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?new=1` },
      { title: 'No', count: 10, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?new=0` },
    ],
  },
  {
    title: 'PATTERN',
    options: [
      {
        title: 'Color-Blocked',
        count: 4,
        link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?pattern=194`,
      },
      { title: 'Solid', count: 8, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?pattern=196` },
      {
        title: 'Striped',
        count: 1,
        link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?pattern=198`,
      },
    ],
  },
  {
    title: 'PERFORMANCE FABRIC',
    options: [
      {
        title: 'Yes',
        count: 3,
        link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?performance_fabric=1`,
      },
      {
        title: 'No',
        count: 10,
        link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?performance_fabric=0`,
      },
    ],
  },
  {
    title: 'PRICE',
    options: [
      {
        title: '$40.00 - $49.99',
        count: 2,
        link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?price=40-50`,
      },
      {
        title: '$50.00 - $59.99',
        count: 3,
        link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?price=50-60`,
      },
      {
        title: '$60.00 - $69.99',
        count: 6,
        link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?price=60-70`,
      },
      {
        title: '$70.00 and above',
        count: 2,
        link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?price=70-`,
      },
    ],
  },
  {
    title: 'SALE',
    options: [
      { title: 'Yes', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?sale=1` },
      { title: 'No', count: 10, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.HoodiesSweatshirts}?sale=0` },
    ],
  },
];

export const ProductDetails: Record<string, Product> = {
  Marco: {
    name: 'Marco Lightweight Active Hoodie',
    price: 'As low as $74.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Lavender],
    link: '/marco-lightweight-active-hoodie.html',
  },
  Ajax: {
    name: 'Ajax Full-Zip Sweatshirt',
    price: 'As low as $69.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Red],
    link: '/ajax-full-zip-sweatshirt.html',
  },
  Grayson: {
    name: 'Grayson Crewneck Sweatshirt',
    price: 'As low as $64.00',
    sizes: Sizes,
    colors: [Colors.Orange, Colors.Red, Colors.White],
    link: '/grayson-crewneck-sweatshirt.html',
  },
  Mach: {
    name: 'Mach Street Sweatshirt',
    price: 'As low as $62.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Red],
    link: '/mach-street-sweatshirt.html',
  },
  Abominable: {
    name: 'Abominable Hoodie',
    price: 'As low as $69.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Red],
    link: '/abominable-hoodie.html',
  },
  Oslo: {
    name: 'Oslo Trek Hoodie',
    price: 'As low as $42.00',
    sizes: Sizes,
    colors: [Colors.Brown, Colors.Purple, Colors.Red],
    link: '/oslo-trek-hoodie.html',
  },
  Hero: {
    name: 'Hero Hoodie',
    price: 'As low as $54.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Grey, Colors.Green],
    link: '/hero-hoodie.html',
    images: {
      default: '/m/h/mh07-gray_main_2.jpg',
      colors: ['/m/h/mh07-black_main_1.jpg', '/m/h/mh07-gray_main_1.jpg', '/m/h/mh07-green_main_1.jpg'],
      // The hoodie has 2 different images for the size options
      sizes: [
        '/m/h/mh07-black_main_1.jpg',
        '/m/h/mh07-black_main_1.jpg',
        '/m/h/mh07-black_main_2.jpg',
        '/m/h/mh07-black_main_2.jpg',
        '/m/h/mh07-black_main_2.jpg',
      ],
    },
  },
  Stark: {
    name: 'Stark Fundamental Hoodie',
    price: 'As low as $42.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Purple],
    link: '/stark-fundamental-hoodie.html',
  },
  Hollister: {
    name: 'Hollister Backyard Sweatshirt',
    price: 'As low as $52.00',
    sizes: Sizes,
    colors: [Colors.Green, Colors.Red, Colors.White],
    link: '/hollister-backyard-sweatshirt.html',
  },
  Frankie: {
    name: 'Frankie Sweatshirt',
    price: 'As low as $60.00',
    sizes: Sizes,
    colors: [Colors.Green, Colors.White, Colors.Yellow],
    link: '/frankie-sweatshirt.html',
  },
  Bruno: {
    name: 'Bruno Compete Hoodie',
    price: 'As low as $63.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Green],
    link: '/bruno-compete-hoodie.html',
  },
  Teton: {
    name: 'Teton Pullover Hoodie',
    price: 'As low as $70.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Purple, Colors.Red],
    link: '/teton-pullover-hoodie.html',
  },
  Chaz: {
    name: 'Chaz Kangeroo Hoodie',
    price: 'As low as $52.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Grey, Colors.Orange],
    link: '/chaz-kangeroo-hoodie.html',
  },
};

export const Products = [
  ProductDetails.Marco,
  ProductDetails.Ajax,
  ProductDetails.Grayson,
  ProductDetails.Mach,
  ProductDetails.Abominable,
  ProductDetails.Oslo,
  ProductDetails.Hero,
  ProductDetails.Stark,
  ProductDetails.Hollister,
  ProductDetails.Frankie,
  ProductDetails.Bruno,
  ProductDetails.Teton,
  ProductDetails.Chaz,
];
