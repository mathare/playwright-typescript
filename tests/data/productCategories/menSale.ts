import { FilterCategory, ProductCategoryExpectedText } from './shared';
import { ProductDetails as MenShorts } from './menShorts';
import { Product } from '../products';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Men Sale',
  Title: 'Men Sale',
  ProductCount: '3 Items',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
  },
};

export const Url = '/promotions/men-sale.html';

export const Filters: FilterCategory[] = [
  {
    title: 'STYLE',
    options: [
      { title: 'Base Layer', count: 3, link: `${Url}?style_bottom=104` },
      { title: 'Compression', count: 2, link: `${Url}?style_bottom=107` },
      { title: 'Tights', count: 1, link: `${Url}?style_bottom=113` },
      { title: 'Workout Pants', count: 3, link: `${Url}?style_bottom=115` },
    ],
  },
  {
    title: 'SIZE',
    options: [
      { title: '32', link: `${Url}?size=175` },
      { title: '33', link: `${Url}?size=176` },
      { title: '34', link: `${Url}?size=177` },
      { title: '36', link: `${Url}?size=178` },
    ],
  },
  {
    title: 'CLIMATE',
    options: [
      { title: 'All-Weather', count: 1, link: `${Url}?climate=201` },
      { title: 'Indoor', count: 3, link: `${Url}?climate=204` },
      { title: 'Spring', count: 1, link: `${Url}?climate=207` },
      { title: 'Warm', count: 2, link: `${Url}?climate=208` },
      { title: 'Hot', count: 2, link: `${Url}?climate=211` },
    ],
  },
  {
    title: 'COLOR',
    options: [
      { title: 'Black', link: `${Url}?color=49` },
      { title: 'Blue', link: `${Url}?color=50` },
      { title: 'Gray', link: `${Url}?color=52` },
      { title: 'Green', link: `${Url}?color=53` },
      { title: 'Purple', link: `${Url}?color=57` },
      { title: 'Red', link: `${Url}?color=58` },
    ],
  },
  {
    title: 'ECO COLLECTION',
    options: [{ title: 'No', count: 3, link: `${Url}?eco_collection=0` }],
  },
  {
    title: 'ERIN RECOMMENDS',
    options: [
      { title: 'Yes', count: 1, link: `${Url}?erin_recommends=1` },
      { title: 'No', count: 2, link: `${Url}?erin_recommends=0` },
    ],
  },
  {
    title: 'MATERIAL',
    options: [
      { title: 'LumaTech™', count: 2, link: `${Url}?material=147` },
      { title: 'Mesh', count: 2, link: `${Url}?material=36` },
      { title: 'Polyester', count: 2, link: `${Url}?material=38` },
      { title: 'Rayon', count: 1, link: `${Url}?material=39` },
      { title: 'Spandex', count: 1, link: `${Url}?material=150` },
      { title: 'CoolTech™', count: 1, link: `${Url}?material=155` },
    ],
  },
  {
    title: 'NEW',
    options: [{ title: 'No', count: 3, link: `${Url}?new=0` }],
  },
  {
    title: 'PATTERN',
    options: [
      { title: 'Solid', count: 3, link: `${Url}?pattern=196` },
      { title: 'Striped', count: 1, link: `${Url}?pattern=198` },
    ],
  },
  {
    title: 'PERFORMANCE FABRIC',
    options: [
      { title: 'Yes', count: 1, link: `${Url}?performance_fabric=1` },
      { title: 'No', count: 2, link: `${Url}?performance_fabric=0` },
    ],
  },
  {
    title: 'PRICE',
    options: [
      { title: '$20.00 - $29.99', count: 1, link: `${Url}?price=20-30` },
      { title: '$30.00 and above', count: 2, link: `${Url}?price=30-` },
    ],
  },
  {
    title: 'SALE',
    options: [{ title: 'Yes', count: 3, link: `${Url}?sale=1` }],
  },
];

export const Products: Product[] = [MenShorts.Pierce, MenShorts.Orestes, MenShorts.Rapha];
