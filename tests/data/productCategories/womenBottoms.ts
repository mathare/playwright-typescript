import { Links as HeaderLinks } from '../pageHeader';
import { Product } from '../products';
import { Filter, FilterOptions, ProductCategoryExpectedText } from './shared';
import { Products as Pants } from './womenPants';
import { Products as Shorts } from './womenShorts';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Women  Bottoms',
  Title: 'Bottoms',
  Filters: ['CATEGORY', ...FilterOptions],
  ProductCount: 'Items 1-12 of 25',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Women: HeaderLinks.Topnav.Women,
  },
};

export const Filters: Record<string, Filter[]> = {
  Category: [
    {
      title: 'Pants',
      count: 13,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?cat=27`,
    },
    {
      title: 'Shorts',
      count: 12,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?cat=28`,
    },
  ],
  Style: [
    {
      title: 'Base Layer',
      count: 4,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?style_general=104`,
    },
    {
      title: 'Basic',
      count: 10,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?style_general=105`,
    },
    {
      title: 'Capri',
      count: 8,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?style_general=106`,
    },
    {
      title: 'Compression',
      count: 3,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?style_general=107`,
    },
    {
      title: 'Leggings',
      count: 4,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?style_general=108`,
    },
    {
      title: 'Parachute',
      count: 2,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?style_general=109`,
    },
    {
      title: 'Snug',
      count: 5,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?style_general=111`,
    },
    {
      title: 'Sweatpants',
      count: 3,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?style_general=112`,
    },
    {
      title: 'Track Pants',
      count: 3,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?style_general=114`,
    },
  ],
  Size: [
    { title: '28', link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?size=171` },
    { title: '29', link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?size=172` },
    { title: '30', link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?size=173` },
    { title: '31', link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?size=174` },
    { title: '32', link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?size=175` },
  ],
  Climate: [
    {
      title: 'All-Weather',
      count: 10,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?climate=201`,
    },
    {
      title: 'Cool',
      count: 3,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?climate=203`,
    },
    {
      title: 'Indoor',
      count: 20,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?climate=204`,
    },
    {
      title: 'Mild',
      count: 17,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?climate=205`,
    },
    {
      title: 'Spring',
      count: 7,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?climate=207`,
    },
    {
      title: 'Warm',
      count: 15,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?climate=208`,
    },
    {
      title: 'Hot',
      count: 16,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?climate=211`,
    },
  ],
  Color: [
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
  EcoCollection: [
    {
      title: 'Yes',
      count: 7,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?eco_collection=1`,
    },
    {
      title: 'No',
      count: 18,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?eco-collection=0`,
    },
  ],
  ErinRecommends: [
    {
      title: 'Yes',
      count: 5,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?erin_recommends=1`,
    },
    {
      title: 'No',
      count: 20,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?erin_recommends=0`,
    },
  ],
  Material: [
    {
      title: 'Cocona® performance fabric',
      count: 4,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?material=142`,
    },
    {
      title: 'Cotton',
      count: 4,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?material=33`,
    },
    {
      title: 'LumaTech™',
      count: 5,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?material=147`,
    },
    {
      title: 'Mesh',
      count: 3,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?material=36`,
    },
    {
      title: 'Lycra®',
      count: 2,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?material=148`,
    },
    {
      title: 'Nylon',
      count: 3,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?material=37`,
    },
    {
      title: 'Microfiber',
      count: 3,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?material=149`,
    },
    {
      title: 'Polyester',
      count: 7,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?material=38`,
    },
    {
      title: 'Rayon',
      count: 2,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?material=39`,
    },
    {
      title: 'Spandex',
      count: 11,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?material=150`,
    },
    {
      title: 'Organic Cotton',
      count: 13,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?material=153`,
    },
    {
      title: 'CoolTech™',
      count: 4,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?material=155`,
    },
    {
      title: 'Wool',
      count: 2,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?material=158`,
    },
  ],
  New: [
    {
      title: 'Yes',
      count: 4,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?new=1`,
    },
    {
      title: 'No',
      count: 21,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?new=0`,
    },
  ],
  Pattern: [
    {
      title: 'Color-Blocked',
      count: 5,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?pattern=194`,
    },
    {
      title: 'Graphic Print',
      count: 1,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?pattern=195`,
    },
    {
      title: 'Solid',
      count: 13,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?pattern=196`,
    },
    {
      title: 'Solid-Highlight',
      count: 5,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?pattern=197`,
    },
    {
      title: 'Striped',
      count: 1,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?pattern=198`,
    },
  ],
  PerformanceFabric: [
    {
      title: 'Yes',
      count: 7,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?performance_fabric=1`,
    },
    {
      title: 'No',
      count: 18,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?performance_fabric=0`,
    },
  ],
  Price: [
    {
      title: '$20.00 - $29.99',
      count: 4,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?price=20-30`,
    },
    {
      title: '$30.00 - $39.99',
      count: 7,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?price=30-40`,
    },
    {
      title: '$40.00 - $49.99',
      count: 10,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?price=40-50`,
    },
    {
      title: '$50.00 - $59.99',
      count: 2,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?price=50-60`,
    },
    {
      title: '$60.00 and above',
      count: 2,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?price=60-`,
    },
  ],
  Sale: [
    {
      title: 'Yes',
      count: 2,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?sale=1`,
    },
    {
      title: 'No',
      count: 23,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Bottoms}?sale=0`,
    },
  ],
};

export const Products: Product[] = [...Shorts, ...Pants];
