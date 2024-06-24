import { Links as HeaderLinks } from '../pageHeader';
import { Colors, Product, Sizes } from '../products';
import { FilterCategory, ProductCategoryExpectedText } from './shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Women  Tops  Jackets',
  Title: 'Jackets',
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
        title: 'Insulated',
        count: 4,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?style_general=116`,
      },
      { title: 'Jacket', count: 12, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?style_general=117` },
      {
        title: 'Lightweight',
        count: 6,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?style_general=119`,
      },
      { title: 'Hooded', count: 5, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?style_general=120` },
      {
        title: 'Heavy Duty',
        count: 1,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?style_general=121`,
      },
      {
        title: 'Rain Coat',
        count: 2,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?style_general=122`,
      },
      {
        title: 'Hard Shell',
        count: 3,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?style_general=123`,
      },
      {
        title: 'Soft Shell',
        count: 8,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?style_general=124`,
      },
      {
        title: 'Windbreaker',
        count: 4,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?style_general=125`,
      },
      { title: '¼ zip', count: 5, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?style_general=127` },
      { title: 'Full Zip', count: 6, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?style_general=128` },
      {
        title: 'Reversible',
        count: 2,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?style_general=129`,
      },
      { title: 'Pullover', count: 4, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?style_general=136` },
    ],
  },
  {
    title: 'SIZE',
    options: [
      { title: 'XS', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?size=166` },
      { title: 'S', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?size=167` },
      { title: 'M', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?size=168` },
      { title: 'L', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?size=169` },
      { title: 'XL', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?size=170` },
    ],
  },
  {
    title: 'CLIMATE',
    options: [
      { title: 'All-Weather', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?climate=201` },
      { title: 'Cold', count: 2, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?climate=202` },
      { title: 'Cool', count: 8, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?climate=203` },
      { title: 'Indoor', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?climate=204` },
      { title: 'Mild', count: 8, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?climate=205` },
      { title: 'Rainy', count: 2, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?climate=206` },
      { title: 'Spring', count: 12, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?climate=207` },
      { title: 'Warm', count: 1, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?climate=208` },
      { title: 'Windy', count: 7, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?climate=209` },
      { title: 'Wintry', count: 4, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?climate=210` },
    ],
  },
  {
    title: 'COLOR',
    options: [
      { title: 'Black', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?color=49` },
      { title: 'Blue', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?color=50` },
      { title: 'Brown', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?color=51` },
      { title: 'Gray', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?color=52` },
      { title: 'Green', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?color=53` },
      { title: 'Orange', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?color=56` },
      { title: 'Purple', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?color=57` },
      { title: 'Red', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?color=58` },
      { title: 'White', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?color=59` },
      { title: 'Yellow', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?color=60` },
    ],
  },
  {
    title: 'ECO COLLECTION',
    options: [
      { title: 'Yes', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?eco_collection=1` },
      { title: 'No', count: 9, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?eco_collection=0` },
    ],
  },
  {
    title: 'ERIN RECOMMENDS',
    options: [
      { title: 'Yes', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?erin_recommends=1` },
      { title: 'No', count: 9, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?erin_recommends=0` },
    ],
  },
  {
    title: 'MATERIAL',
    options: [
      {
        title: 'Cocona® performance fabric',
        count: 3,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?material=142`,
      },
      { title: 'Cotton', count: 2, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?material=33` },
      { title: 'Fleece', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?material=144` },
      { title: 'LumaTech™', count: 1, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?material=147` },
      { title: 'Mesh', count: 1, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?material=36` },
      { title: 'Lycra®', count: 2, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?material=148` },
      { title: 'Nylon', count: 5, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?material=37` },
      { title: 'Polyester', count: 6, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?material=38` },
      { title: 'Spandex', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?material=150` },
      { title: 'CoolTech™', count: 5, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?material=155` },
      { title: 'Wool', count: 2, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?material=158` },
    ],
  },
  {
    title: 'NEW',
    options: [
      { title: 'Yes', count: 4, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?new=1` },
      { title: 'No', count: 8, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?new=0` },
    ],
  },
  {
    title: 'PATTERN',
    options: [
      { title: 'Color-Blocked', count: 1, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?pattern=194` },
      { title: 'Solid', count: 11, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?pattern=196` },
    ],
  },
  {
    title: 'PERFORMANCE FABRIC',
    options: [
      { title: 'Yes', count: 4, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?performance_fabric=1` },
      { title: 'No', count: 8, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?performance_fabric=0` },
    ],
  },
  {
    title: 'PRICE',
    options: [
      {
        title: '$30.00 - $39.99',
        count: 1,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?price=30-40`,
      },
      {
        title: '$50.00 - $59.99',
        count: 4,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?price=50-60`,
      },
      {
        title: '$60.00 - $69.99',
        count: 3,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?price=60-70`,
      },
      {
        title: '$70.00 - $79.99',
        count: 3,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?price=70-80`,
      },
      { title: '$80.00 and above', count: 1, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?price=80-` },
    ],
  },
  {
    title: 'SALE',
    options: [
      { title: 'Yes', count: 4, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?sale=1` },
      { title: 'No', count: 8, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Jackets}?sale=0` },
    ],
  },
];

export const ProductDetails: Record<string, Product> = {
  Olivia: {
    name: 'Olivia 1/4 Zip Light Jacket',
    price: 'As low as $77.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Purple],
    link: '/olivia-1-4-zip-light-jacket.html',
  },
  Juno: {
    name: 'Juno Jacket',
    rating: '87%',
    reviews: '3 Reviews',
    price: 'As low as $77.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Purple],
    link: '/juno-jacket.html',
  },
  Neve: {
    name: 'Neve Studio Dance Jacket',
    rating: '87%',
    reviews: '3 Reviews',
    price: 'As low as $69.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Orange],
    link: '/neve-studio-dance-jacket.html',
  },
  Nadia: {
    name: 'Nadia Elements Shell',
    rating: '60%',
    reviews: '3 Reviews',
    price: 'As low as $69.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Orange, Colors.Yellow],
    link: '/nadia-elements-shell.html',
  },
  Jade: {
    name: 'Jade Yoga Jacket',
    rating: '87%',
    reviews: '3 Reviews',
    price: 'As low as $32.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Grey, Colors.Green],
    link: '/jade-yoga-jacket.html',
  },
  Adrienne: {
    name: 'Adrienne Trek Jacket',
    rating: '60%',
    reviews: '2 Reviews',
    price: 'As low as $57.00',
    sizes: Sizes,
    colors: [Colors.Grey, Colors.Orange, Colors.Purple],
    link: '/adrienne-trek-jacket.html',
  },
  Inez: {
    name: 'Inez Full Zip Jacket',
    rating: '67%',
    reviews: '3 Reviews',
    price: 'As low as $59.00',
    sizes: Sizes,
    colors: [Colors.Orange, Colors.Purple, Colors.Red],
    link: '/inez-full-zip-jacket.html',
  },
  Riona: {
    name: 'Riona Full Zip Jacket',
    rating: '87%',
    reviews: '3 Reviews',
    price: 'As low as $60.00',
    sizes: Sizes,
    colors: [Colors.Brown, Colors.Green, Colors.Red],
    link: '/riona-full-zip-jacket.html',
  },
  Ingrid: {
    name: 'Ingrid Running Jacket',
    rating: '90%',
    reviews: '2 Reviews',
    price: 'As low as $84.00',
    sizes: Sizes,
    colors: [Colors.Orange, Colors.Red, Colors.White],
    link: '/ingrid-running-jacket.html',
  },
  Augusta: {
    name: 'Augusta Pullover Jacket',
    rating: '87%',
    reviews: '3 Reviews',
    price: 'As low as $57.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Orange, Colors.Red],
    link: '/augusta-pullover-jacket.html',
  },
  Josie: {
    name: 'Josie Yoga Jacket',
    rating: '70%',
    reviews: '4 Reviews',
    price: 'As low as $56.25',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Grey],
    link: '/josie-yoga-jacket.html',
  },
  Stellar: {
    name: 'Stellar Solar Jacket',
    rating: '67%',
    reviews: '3 Reviews',
    price: 'As low as $75.00',
    sizes: ['S', 'M', 'L'],
    colors: [Colors.Blue, Colors.Red, Colors.Yellow],
    link: '/stellar-solar-jacket.html',
  },
};

export const Products = [
  ProductDetails.Olivia,
  ProductDetails.Juno,
  ProductDetails.Neve,
  ProductDetails.Nadia,
  ProductDetails.Jade,
  ProductDetails.Adrienne,
  ProductDetails.Inez,
  ProductDetails.Riona,
  ProductDetails.Ingrid,
  ProductDetails.Augusta,
  ProductDetails.Josie,
  ProductDetails.Stellar,
];
