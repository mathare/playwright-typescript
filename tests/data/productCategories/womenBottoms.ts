import { Links as HeaderLinks } from '../pageHeader';
import { Product } from '../products';
import { FilterCategory, ProductCategoryExpectedText } from './shared';
import { Products as Pants } from './womenPants';
import { Products as Shorts } from './womenShorts';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Women  Bottoms',
  Title: 'Bottoms',
  ProductCount: 'Items 1-12 of 25',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Women: HeaderLinks.Topnav.Women,
  },
};

export const Filters: FilterCategory[] = [
  {
    title: 'CATEGORY',
    options: [
      { title: 'Pants', count: 13, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?cat=27` },
      { title: 'Shorts', count: 12, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?cat=28` },
    ],
  },
  {
    title: 'STYLE',
    options: [
      { title: 'Base Layer', count: 4, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?style_bottom=104` },
      { title: 'Basic', count: 10, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?style_bottom=105` },
      { title: 'Capri', count: 8, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?style_bottom=106` },
      { title: 'Compression', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?style_bottom=107` },
      { title: 'Leggings', count: 4, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?style_bottom=108` },
      { title: 'Parachute', count: 2, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?style_bottom=109` },
      { title: 'Snug', count: 5, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?style_bottom=111` },
      { title: 'Sweatpants', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?style_bottom=112` },
      { title: 'Track Pants', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?style_bottom=114` },
    ],
  },
  {
    title: 'SIZE',
    options: [
      { title: '28', link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?size=171` },
      { title: '29', link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?size=172` },
      { title: '30', link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?size=173` },
      { title: '31', link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?size=174` },
      { title: '32', link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?size=175` },
    ],
  },
  {
    title: 'CLIMATE',
    options: [
      { title: 'All-Weather', count: 10, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?climate=201` },
      { title: 'Cool', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?climate=203` },
      { title: 'Indoor', count: 20, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?climate=204` },
      { title: 'Mild', count: 17, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?climate=205` },
      { title: 'Spring', count: 7, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?climate=207` },
      { title: 'Warm', count: 15, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?climate=208` },
      { title: 'Hot', count: 16, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?climate=211` },
    ],
  },
  {
    title: 'COLOR',
    options: [
      { title: 'Black', link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?color=49` },
      { title: 'Blue', link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?color=50` },
      { title: 'Gray', link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?color=52` },
      { title: 'Green', link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?color=53` },
      { title: 'Orange', link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?color=56` },
      { title: 'Purple', link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?color=57` },
      { title: 'Red', link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?color=58` },
      { title: 'White', link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?color=59` },
      { title: 'Yellow', link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?color=60` },
    ],
  },
  {
    title: 'ECO COLLECTION',
    options: [
      { title: 'Yes', count: 7, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?eco_collection=1` },
      { title: 'No', count: 18, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?eco_collection=0` },
    ],
  },
  {
    title: 'ERIN RECOMMENDS',
    options: [
      { title: 'Yes', count: 5, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?erin_recommends=1` },
      { title: 'No', count: 20, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?erin_recommends=0` },
    ],
  },
  {
    title: 'MATERIAL',
    options: [
      {
        title: 'Cocona® performance fabric',
        count: 4,
        link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?material=142`,
      },
      { title: 'Cotton', count: 4, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?material=33` },
      { title: 'LumaTech™', count: 5, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?material=147` },
      { title: 'Mesh', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?material=36` },
      { title: 'Lycra®', count: 2, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?material=148` },
      { title: 'Nylon', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?material=37` },
      { title: 'Microfiber', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?material=149` },
      { title: 'Polyester', count: 7, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?material=38` },
      { title: 'Rayon', count: 2, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?material=39` },
      { title: 'Spandex', count: 11, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?material=150` },
      { title: 'Organic Cotton', count: 13, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?material=153` },
      { title: 'CoolTech™', count: 4, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?material=155` },
      { title: 'Wool', count: 2, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?material=158` },
    ],
  },
  {
    title: 'NEW',
    options: [
      { title: 'Yes', count: 4, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?new=1` },
      { title: 'No', count: 21, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?new=0` },
    ],
  },
  {
    title: 'PATTERN',
    options: [
      { title: 'Color-Blocked', count: 5, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?pattern=194` },
      { title: 'Graphic Print', count: 1, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?pattern=195` },
      { title: 'Solid', count: 13, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?pattern=196` },
      { title: 'Solid-Highlight', count: 5, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?pattern=197` },
      { title: 'Striped', count: 1, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?pattern=198` },
    ],
  },
  {
    title: 'PERFORMANCE FABRIC',
    options: [
      { title: 'Yes', count: 7, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?performance_fabric=1` },
      { title: 'No', count: 18, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?performance_fabric=0` },
    ],
  },
  {
    title: 'PRICE',
    options: [
      { title: '$20.00 - $29.99', count: 4, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?price=20-30` },
      { title: '$30.00 - $39.99', count: 7, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?price=30-40` },
      { title: '$40.00 - $49.99', count: 10, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?price=40-50` },
      { title: '$50.00 - $59.99', count: 2, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?price=50-60` },
      { title: '$60.00 and above', count: 2, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?price=60-` },
    ],
  },
  {
    title: 'SALE',
    options: [
      { title: 'Yes', count: 2, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?sale=1` },
      { title: 'No', count: 23, link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?sale=0` },
    ],
  },
];

export const Products: Product[] = [...Shorts, ...Pants];
