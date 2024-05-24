import { FilterCategory, ProductCategoryExpectedText } from './shared';
import { Products as MenPants } from './menPants';
import { Products as WomenPants } from './womenPants';
import { Product } from '../products';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Pants',
  Title: 'Pants',
  ProductCount: 'Items 1-12 of 25',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
  },
};

export const Url = '/promotions/pants-all.html';

export const Filters: FilterCategory[] = [
  {
    title: 'STYLE',
    options: [
      { title: 'Base Layer', count: 3, link: `${Url}?style_bottom=104` },
      { title: 'Capri', count: 8, link: `${Url}?style_bottom=106` },
      { title: 'Compression', count: 2, link: `${Url}?style_bottom=107` },
      { title: 'Leggings', count: 8, link: `${Url}?style_bottom=108` },
      { title: 'Parachute', count: 2, link: `${Url}?style_bottom=109` },
      { title: 'Sweatpants', count: 11, link: `${Url}?style_bottom=112` },
      { title: 'Track Pants', count: 13, link: `${Url}?style_bottom=114` },
      { title: 'Workout Pants', count: 11, link: `${Url}?style_bottom=115` },
    ],
  },

  {
    title: 'SIZE',
    options: [
      { title: '28', link: `${Url}?size=171` },
      { title: '29', link: `${Url}?size=172` },
      { title: '32', link: `${Url}?size=175` },
      { title: '33', link: `${Url}?size=176` },
      { title: '34', link: `${Url}?size=177` },
      { title: '36', link: `${Url}?size=178` },
    ],
  },
  {
    title: 'CLIMATE',
    options: [
      { title: 'All-Weather', count: 10, link: `${Url}?climate=201` },
      { title: 'Cold', count: 6, link: `${Url}?climate=202` },
      { title: 'Cool', count: 14, link: `${Url}?climate=203` },
      { title: 'Indoor', count: 17, link: `${Url}?climate=204` },
      { title: 'Mild', count: 15, link: `${Url}?climate=205` },
      { title: 'Rainy', count: 1, link: `${Url}?climate=206` },
      { title: 'Spring', count: 14, link: `${Url}?climate=207` },
      { title: 'Warm', count: 6, link: `${Url}?climate=208` },
      { title: 'Windy', count: 9, link: `${Url}?climate=209` },
      { title: 'Wintry', count: 10, link: `${Url}?climate=210` },
      { title: 'Hot', count: 6, link: `${Url}?climate=211` },
    ],
  },
  {
    title: 'COLOR',
    options: [
      { title: 'Black', link: `${Url}?color=49` },
      { title: 'Blue', link: `${Url}?color=50` },
      { title: 'Brown', link: `${Url}?color=51` },
      { title: 'Gray', link: `${Url}?color=52` },
      { title: 'Green', link: `${Url}?color=53` },
      { title: 'Orange', link: `${Url}?color=56` },
      { title: 'Purple', link: `${Url}?color=57` },
      { title: 'Red', link: `${Url}?color=58` },
      { title: 'White', link: `${Url}?color=59` },
    ],
  },
  {
    title: 'ECO COLLECTION',
    options: [
      { title: 'Yes', count: 5, link: `${Url}?eco_collection=1` },
      { title: 'No', count: 20, link: `${Url}?eco_collection=0` },
    ],
  },
  {
    title: 'ERIN RECOMMENDS',
    options: [
      { title: 'Yes', count: 6, link: `${Url}?erin_recommends=1` },
      { title: 'No', count: 19, link: `${Url}?erin_recommends=0` },
    ],
  },
  {
    title: 'MATERIAL',
    options: [
      { title: 'Cocona® performance fabric', count: 4, link: `${Url}?material=142` },
      { title: 'Cotton', count: 2, link: `${Url}?material=33` },
      { title: 'Fleece', count: 4, link: `${Url}?material=144` },
      { title: 'Hemp', count: 2, link: `${Url}?material=145` },
      { title: 'LumaTech™', count: 6, link: `${Url}?material=147` },
      { title: 'Lycra®', count: 1, link: `${Url}?material=148` },
      { title: 'Nylon', count: 3, link: `${Url}?material=37` },
      { title: 'Microfiber', count: 3, link: `${Url}?material=149` },
      { title: 'Polyester', count: 9, link: `${Url}?material=38` },
      { title: 'Rayon', count: 6, link: `${Url}?material=39` },
      { title: 'Spandex', count: 13, link: `${Url}?material=150` },
      { title: 'Organic Cotton', count: 11, link: `${Url}?material=153` },
      { title: 'CoolTech™', count: 5, link: `${Url}?material=155` },
      { title: 'Wool', count: 7, link: `${Url}?material=158` },
    ],
  },
  {
    title: 'NEW',
    options: [
      { title: 'Yes', count: 6, link: `${Url}?new=1` },
      { title: 'No', count: 19, link: `${Url}?new=0` },
    ],
  },
  {
    title: 'PATTERN',
    options: [
      { title: 'Color-Blocked', count: 5, link: `${Url}?pattern=194` },
      { title: 'Solid', count: 19, link: `${Url}?pattern=196` },
      { title: 'Striped', count: 1, link: `${Url}?pattern=198` },
    ],
  },
  {
    title: 'PERFORMANCE FABRIC',
    options: [
      { title: 'Yes', count: 7, link: `${Url}?performance_fabric=1` },
      { title: 'No', count: 18, link: `${Url}?performance_fabric=0` },
    ],
  },
  {
    title: 'PRICE',
    options: [
      { title: '$20.00 - $29.99', count: 2, link: `${Url}?price=20-30` },
      { title: '$30.00 - $39.99', count: 10, link: `${Url}?price=30-40` },
      { title: '$40.00 - $49.99', count: 5, link: `${Url}?price=40-50` },
      { title: '$50.00 - $59.99', count: 4, link: `${Url}?price=50-60` },
      { title: '$60.00 and above', count: 4, link: `${Url}?price=60-` },
    ],
  },
  {
    title: 'SALE',
    options: [{ title: 'No', count: 25, link: `${Url}?sale=0` }],
  },
];

export const Products: Product[] = [...WomenPants, ...MenPants];
