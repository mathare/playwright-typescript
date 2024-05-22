import { Links as HeaderLinks } from '../pageHeader';
import { Colors, Product } from '../products';
import { Filter, ProductCategoryExpectedText } from './shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Women  Bottoms  Pants',
  Title: 'Pants',
  ProductCount: 'Items 1-12 of 13',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Women: HeaderLinks.Topnav.Women,
    Bottoms: HeaderLinks.Topnav.WomenSubMenu.Bottoms,
  },
};

export const Filters = [
  {
    title: 'STYLE',
    options: [
      { title: 'Capri', count: 8, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?style_bottom=106` },
      {
        title: 'Compression',
        count: 1,
        link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?style_bottom=107`,
      },
      { title: 'Leggings', count: 4, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?style_bottom=108` },
      {
        title: 'Parachute',
        count: 2,
        link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?style_bottom=109`,
      },
      {
        title: 'Sweatpants',
        count: 3,
        link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?style_bottom=112`,
      },
      {
        title: 'Track Pants',
        count: 3,
        link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?style_bottom=114`,
      },
    ],
  },
  {
    title: 'SIZE',
    options: [
      { title: '28', link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?size=171` },
      { title: '29', link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?size=172` },
    ],
  },
  {
    title: 'CLIMATE',
    options: [
      { title: 'All-Weather', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?climate=201` },
      { title: 'Cool', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?climate=203` },
      { title: 'Indoor', count: 13, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?climate=204` },
      { title: 'Mild', count: 11, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?climate=205` },
      { title: 'Spring', count: 7, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?climate=207` },
      { title: 'Warm', count: 6, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?climate=208` },
      { title: 'Hot', count: 6, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?climate=211` },
    ],
  },
  {
    title: 'COLOR',
    options: [
      { title: 'Black', link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?color=49` },
      { title: 'Blue', link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?color=50` },
      { title: 'Gray', link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?color=52` },
      { title: 'Green', link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?color=53` },
      { title: 'Orange', link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?color=56` },
      { title: 'Purple', link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?color=57` },
      { title: 'Red', link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?color=58` },
      { title: 'White', link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?color=59` },
    ],
  },
  {
    title: 'ECO COLLECTION',
    options: [
      { title: 'Yes', count: 4, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?eco_collection=1` },
      { title: 'No', count: 9, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?eco_collection=0` },
    ],
  },
  {
    title: 'ERIN RECOMMENDS',
    options: [
      { title: 'Yes', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?erin_recommends=1` },
      { title: 'No', count: 10, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?erin_recommends=0` },
    ],
  },
  {
    title: 'MATERIAL',
    options: [
      {
        title: 'Cocona® performance fabric',
        count: 2,
        link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?material=142`,
      },
      { title: 'Cotton', count: 1, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?material=33` },
      { title: 'LumaTech™', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?material=147` },
      { title: 'Lycra®', count: 1, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?material=148` },
      { title: 'Nylon', count: 2, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?material=37` },
      { title: 'Microfiber', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?material=149` },
      { title: 'Polyester', count: 2, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?material=38` },
      { title: 'Rayon', count: 2, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?material=39` },
      { title: 'Spandex', count: 6, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?material=150` },
      {
        title: 'Organic Cotton',
        count: 8,
        link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?material=153`,
      },
      { title: 'CoolTech™', count: 2, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?material=155` },
    ],
  },
  {
    title: 'NEW',
    options: [
      { title: 'Yes', count: 1, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?new=1` },
      { title: 'No', count: 12, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?new=0` },
    ],
  },
  {
    title: 'PATTERN',
    options: [
      { title: 'Color-Blocked', count: 5, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?pattern=194` },
      { title: 'Solid', count: 7, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?pattern=196` },
      { title: 'Striped', count: 1, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?pattern=198` },
    ],
  },
  {
    title: 'PERFORMANCE FABRIC',
    options: [
      { title: 'Yes', count: 4, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?performance_fabric=1` },
      { title: 'No', count: 9, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?performance_fabric=0` },
    ],
  },
  {
    title: 'PRICE',
    options: [
      {
        title: '$30.00 - $39.99',
        count: 7,
        link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?price=30-40`,
      },
      {
        title: '$40.00 - $49.99',
        count: 3,
        link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?price=40-50`,
      },
      {
        title: '$50.00 - $59.99',
        count: 1,
        link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?price=50-60`,
      },
      {
        title: '$60.00 and above',
        count: 2,
        link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?price=60-`,
      },
    ],
  },
  {
    title: 'SALE',
    options: [{ title: 'No', count: 13, link: `${HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu.Pants}?sale=0` }],
  },
];

const Sizes = ['28', '29'];

export const Products: Product[] = [
  {
    name: 'Portia Capri',
    price: 'As low as $49.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Orange],
    link: '/portia-capri.html',
  },
  {
    name: 'Deirdre Relaxed-Fit Capri',
    price: 'As low as $63.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Grey, Colors.Green],
    link: '/deirdre-relaxed-fit-capri.html',
  },
  {
    name: 'Sylvia Capri',
    price: 'As low as $42.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Red],
    link: '/sylvia-capri.html',
  },
  {
    name: 'Daria Bikram Pant',
    price: 'As low as $51.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Grey, Colors.White],
    link: '/daria-bikram-pant.html',
  },
  {
    name: 'Carina Basic Capri',
    price: 'As low as $51.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Purple],
    link: '/carina-basic-capri.html',
  },
  {
    name: 'Bardot Capri',
    price: 'As low as $48.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Green, Colors.Red],
    link: '/bardot-capri.html',
  },
  {
    name: 'Aeon Capri',
    price: 'As low as $48.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Orange],
    link: '/aeon-capri.html',
  },
  {
    name: 'Diana Tights',
    rating: '67%',
    reviews: '3 Reviews',
    price: 'As low as $59.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Orange],
    link: '/diana-tights.html',
  },
  {
    name: 'Sahara Leggings',
    rating: '60%',
    reviews: '2 Reviews',
    price: 'As low as $75.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Grey, Colors.Red],
    link: '/sahara-leggings.html',
  },
  {
    name: 'Cora Parachute Pant',
    rating: '80%',
    reviews: '4 Reviews',
    price: 'As low as $75.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.White],
    link: '/cora-parachute-pant.html',
  },
  {
    name: 'Ida Workout Parachute Pant',
    rating: '67%',
    reviews: '3 Reviews',
    price: 'As low as $48.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Purple],
    link: '/ida-workout-parachute-pant.html',
  },
  {
    name: 'Emma Leggings',
    rating: '93%',
    reviews: '3 Reviews',
    price: 'As low as $42.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Purple, Colors.Red],
    link: '/emma-leggings.html',
  },
  {
    name: 'Karmen Yoga Pant',
    rating: '80%',
    reviews: '2 Reviews',
    price: 'As low as $39.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Grey, Colors.White],
    link: '/karmen-yoga-pant.html',
  },
];
