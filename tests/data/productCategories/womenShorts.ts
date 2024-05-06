import { Links as HeaderLinks } from '../pageHeader';
import { Colors, Product } from '../products';
import { Filter, ProductCategoryExpectedText } from './shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Women  Bottoms  Shorts',
  Title: 'Shorts',
  ProductCount: '12 Items',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Women: HeaderLinks.Topnav.Women,
    Bottoms: HeaderLinks.Topnav.WomenSubMenu.Bottoms,
  },
};

export const Filters: Record<string, Filter[]> = {
  Style: [
    {
      title: 'Base Layer',
      count: 4,
      link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?style_bottom=104`,
    },
    { title: 'Basic', count: 10, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?style_bottom=105` },
    {
      title: 'Compression',
      count: 2,
      link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?style_bottom=107`,
    },
    { title: 'Snug', count: 5, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?style_bottom=111` },
  ],
  Size: [
    { title: '28', link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?size=171` },
    { title: '29', link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?size=172` },
    { title: '30', link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?size=173` },
    { title: '31', link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?size=174` },
    { title: '32', link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?size=175` },
  ],
  Climate: [
    { title: 'All-Weather', count: 7, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?climate=201` },
    { title: 'Indoor', count: 7, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?climate=204` },
    { title: 'Mild', count: 6, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?climate=205` },
    { title: 'Warm', count: 9, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?climate=208` },
    { title: 'Hot', count: 10, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?climate=211` },
  ],
  Color: [
    { title: 'Black', link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?color=49` },
    { title: 'Blue', link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?color=50` },
    { title: 'Gray', link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?color=52` },
    { title: 'Green', link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?color=53` },
    { title: 'Orange', link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?color=56` },
    { title: 'Purple', link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?color=57` },
    { title: 'Red', link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?color=58` },
    { title: 'White', link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?color=59` },
    { title: 'Yellow', link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?color=60` },
  ],
  EcoCollection: [
    { title: 'Yes', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?eco_collection=1` },
    { title: 'No', count: 9, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?eco-collection=0` },
  ],
  ErinRecommends: [
    { title: 'Yes', count: 2, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?erin_recommends=1` },
    { title: 'No', count: 10, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?erin_recommends=0` },
  ],
  Material: [
    {
      title: 'Cocona® performance fabric',
      count: 2,
      link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?material=142`,
    },
    { title: 'Cotton', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?material=33` },
    { title: 'LumaTech™', count: 2, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?material=147` },
    { title: 'Mesh', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?material=36` },
    { title: 'Lycra®', count: 1, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?material=148` },
    { title: 'Nylon', count: 1, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?material=37` },
    { title: 'Polyester', count: 5, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?material=38` },
    { title: 'Spandex', count: 5, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?material=150` },
    {
      title: 'Organic Cotton',
      count: 5,
      link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?material=153`,
    },
    { title: 'CoolTech™', count: 2, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?material=155` },
    { title: 'Wool', count: 2, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?material=158` },
  ],
  New: [
    { title: 'Yes', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?new=1` },
    { title: 'No', count: 9, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?new=0` },
  ],
  Pattern: [
    { title: 'Graphic Print', count: 1, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?pattern=195` },
    { title: 'Solid', count: 6, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?pattern=196` },
    {
      title: 'Solid-Highlight',
      count: 5,
      link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?pattern=197`,
    },
  ],
  PerformanceFabric: [
    { title: 'Yes', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?performance_fabric=1` },
    { title: 'No', count: 9, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?performance_fabric=0` },
  ],
  Price: [
    {
      title: '$20.00 - $29.99',
      count: 4,
      link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?price=20-30`,
    },
    {
      title: '$40.00 - $49.99',
      count: 7,
      link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?price=40-50`,
    },
    { title: '$50.00 and above', count: 1, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?price=50-` },
  ],
  Sale: [
    { title: 'Yes', count: 2, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?sale=1` },
    { title: 'No', count: 10, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Shorts}?sale=0` },
  ],
};

const Sizes = { All: ['28', '29', '30', '31', '32'], Small: ['28', '29'] };

export const Products: Product[] = [
  {
    title: 'Erika Running Short',
    rating: '60%',
    reviews: '3 Reviews',
    price: 'As low as $45.00',
    sizes: Sizes.All,
    colors: [Colors.Green, Colors.Purple, Colors.Red],
    link: '/erika-running-short.html',
  },
  {
    title: 'Ina Compression Short',
    rating: '73%',
    reviews: '3 Reviews',
    price: 'As low as $49.00',
    sizes: Sizes.Small,
    colors: [Colors.Blue, Colors.Orange, Colors.Red],
    link: '/ina-compression-short.html',
  },
  {
    title: 'Ana Running Short',
    rating: '80%',
    reviews: '3 Reviews',
    price: 'As low as $40.00',
    sizes: Sizes.Small,
    colors: [Colors.Black, Colors.Orange, Colors.White],
    link: '/ana-running-short.html',
  },
  {
    title: 'Mimi All-Purpose Short',
    rating: '67%',
    reviews: '3 Reviews',
    price: 'As low as $44.00',
    sizes: Sizes.Small,
    colors: [Colors.Grey, Colors.Green, Colors.White],
    link: '/mimi-all-purpose-short.html',
  },
  {
    title: 'Sybil Running Short',
    rating: '93%',
    reviews: '3 Reviews',
    price: 'As low as $44.00',
    sizes: Sizes.All,
    colors: [Colors.Purple],
    link: '/sybil-running-short.html',
  },
  {
    title: 'Echo Fit Compression Short',
    rating: '67%',
    reviews: '3 Reviews',
    price: 'As low as $24.00',
    sizes: Sizes.Small,
    colors: [Colors.Black, Colors.Blue, Colors.Purple],
    link: '/echo-fit-compression-short.html',
  },
  {
    title: 'Angel Light Running Short',
    rating: '70%',
    reviews: '2 Reviews',
    price: 'As low as $42.00',
    sizes: Sizes.Small,
    colors: [Colors.Grey, Colors.Orange, Colors.Purple],
    link: '/angel-light-running-short.html',
  },
  {
    title: 'Bess Yoga Short',
    rating: '73%',
    reviews: '3 Reviews',
    price: 'As low as $28.00',
    sizes: Sizes.All,
    colors: [Colors.Blue, Colors.Purple, Colors.Yellow],
    link: '/bess-yoga-short.html',
  },
  {
    title: 'Artemis Running Short',
    rating: '80%',
    reviews: '2 Reviews',
    price: 'As low as $45.00',
    sizes: Sizes.All,
    colors: [Colors.Black, Colors.Green, Colors.Orange],
    link: '/artemis-running-short.html',
  },
  {
    title: 'Gwen Drawstring Bike Short',
    rating: '90%',
    reviews: '2 Reviews',
    price: 'As low as $50.00',
    sizes: Sizes.All,
    colors: [Colors.Blue, Colors.Grey, Colors.Orange],
    link: '/gwen-drawstring-bike-short.html',
  },
  {
    title: 'Maxima Drawstring Short',
    rating: '80%',
    reviews: '3 Reviews',
    price: 'As low as $28.00',
    sizes: Sizes.All,
    colors: [Colors.Grey, Colors.Orange, Colors.Yellow],
    link: '/maxima-drawstring-short.html',
  },
  {
    title: 'Fiona Fitness Short',
    rating: '60%',
    reviews: '3 Reviews',
    price: 'As low as $29.00',
    sizes: Sizes.All,
    colors: [Colors.Black, Colors.Green, Colors.Red],
    link: '/fiona-fitness-short.html',
  },
  {
    title: 'Karmen Yoga Pant',
    rating: '80%',
    reviews: '2 Reviews',
    price: 'As low as $39.00',
    sizes: Sizes.All,
    colors: [Colors.Black, Colors.Grey, Colors.White],
    link: '/karmen-yoga-pant.html',
  },
];
