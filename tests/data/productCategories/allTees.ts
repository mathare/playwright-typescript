import { FilterCategory, ProductCategoryExpectedText } from './shared';
import { Products as WomenTees } from './womenTees';
import { Product } from '../products';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Tees',
  Title: 'Tees',
  ProductCount: '12 Items',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
  },
};

export const Url = '/promotions/tees-all.html';

export const Filters: FilterCategory[] = [
  {
    title: 'STYLE',
    options: [{ title: 'Tee', count: 12, link: `${Url}?style_general=135` }],
  },
  {
    title: 'SIZE',
    options: [
      { title: 'XS', link: `${Url}?size=166` },
      { title: 'S', link: `${Url}?size=167` },
      { title: 'M', link: `${Url}?size=168` },
      { title: 'L', link: `${Url}?size=169` },
      { title: 'XL', link: `${Url}?size=170` },
    ],
  },
  {
    title: 'CLIMATE',
    options: [
      { title: 'Indoor', count: 12, link: `${Url}?climate=204` },
      { title: 'Warm', count: 12, link: `${Url}?climate=208` },
    ],
  },
  {
    title: 'COLOR',
    options: [
      { title: 'Black', link: `${Url}?color=49` },
      { title: 'Blue', link: `${Url}?color=50` },
      { title: 'Gray', link: `${Url}?color=52` },
      { title: 'Green', link: `${Url}?color=53` },
      { title: 'Orange', link: `${Url}?color=56` },
      { title: 'Purple', link: `${Url}?color=57` },
      { title: 'Red', link: `${Url}?color=58` },
      { title: 'White', link: `${Url}?color=59` },
      { title: 'Yellow', link: `${Url}?color=60` },
    ],
  },
  {
    title: 'ECO COLLECTION',
    options: [
      { title: 'Yes', count: 4, link: `${Url}?eco_collection=1` },
      { title: 'No', count: 8, link: `${Url}?eco_collection=0` },
    ],
  },
  {
    title: 'ERIN RECOMMENDS',
    options: [
      { title: 'Yes', count: 2, link: `${Url}?erin_recommends=1` },
      { title: 'No', count: 10, link: `${Url}?erin_recommends=0` },
    ],
  },
  {
    title: 'MATERIAL',
    options: [
      {
        title: 'Cocona® performance fabric',
        count: 2,
        link: `${Url}?material=142`,
      },
      { title: 'Cotton', count: 4, link: `${Url}?material=33` },
      { title: 'Hemp', count: 2, link: `${Url}?material=145` },
      { title: 'Lycra®', count: 2, link: `${Url}?material=148` },
      { title: 'Polyester', count: 5, link: `${Url}?material=38` },
      { title: 'Spandex', count: 2, link: `${Url}?material=150` },
      { title: 'HeatTec®', count: 2, link: `${Url}?material=151` },
      { title: 'EverCool™', count: 2, link: `${Url}?material=152` },
      { title: 'Organic Cotton', count: 3, link: `${Url}?material=153` },
      { title: 'TENCEL', count: 1, link: `${Url}?material=154` },
    ],
  },
  {
    title: 'NEW',
    options: [
      { title: 'Yes', count: 4, link: `${Url}?new=1` },
      { title: 'No', count: 8, link: `${Url}?new=0` },
    ],
  },
  {
    title: 'PATTERN',
    options: [{ title: 'Solid', count: 12, link: `${Url}?pattern=196` }],
  },
  {
    title: 'PERFORMANCE FABRIC',
    options: [
      { title: 'Yes', count: 4, link: `${Url}?performance_fabric=1` },
      { title: 'No', count: 8, link: `${Url}?performance_fabric=0` },
    ],
  },
  {
    title: 'PRICE',
    options: [
      { title: '$20.00 - $29.99', count: 8, link: `${Url}?price=20-30` },
      { title: '$30.00 - $39.99', count: 3, link: `${Url}?price=30-40` },
      { title: '$40.00 and above', count: 1, link: `${Url}?price=40-` },
    ],
  },
  {
    title: 'SALE',
    options: [
      { title: 'Yes', count: 3, link: `${Url}?sale=1` },
      { title: 'No', count: 9, link: `${Url}?sale=0` },
    ],
  },
];

export const Products: Product[] = [...WomenTees];
