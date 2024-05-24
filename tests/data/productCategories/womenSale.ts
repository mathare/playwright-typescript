import { FilterCategory, ProductCategoryExpectedText } from './shared';
import { Products as WomenHoodies } from './womenHoodies';
import { Products as WomenJackets } from './womenJackets';
import { Products as WomenShorts } from './womenShorts';
import { Products as WomenTanks } from './womenTanks';
import { Products as WomenTees } from './womenTees';
import { Product } from '../products';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Women Sale',
  Title: 'Women Sale',
  ProductCount: 'Items 1-12 of 14',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
  },
};

export const Url = '/promotions/women-sale.html';

export const Filters: FilterCategory[] = [
  {
    title: 'STYLE',
    options: [{ title: 'Basic', count: 2, link: `${Url}?style_bottom=105` }],
  },
  {
    title: 'STYLE',
    options: [
      { title: 'Insulated', count: 1, link: `${Url}?style_general=116` },
      { title: 'Jacket', count: 4, link: `${Url}?style_general=117` },
      { title: 'Lightweight', count: 3, link: `${Url}?style_general=119` },
      { title: 'Heavy Duty', count: 1, link: `${Url}?style_general=121` },
      { title: 'Rain Coat', count: 1, link: `${Url}?style_general=122` },
      { title: 'Hard Shell', count: 2, link: `${Url}?style_general=123` },
      { title: 'Soft Shell', count: 2, link: `${Url}?style_general=124` },
      { title: 'Windbreaker', count: 1, link: `${Url}?style_general=125` },
      { title: '¼ zip', count: 2, link: `${Url}?style_general=127` },
      { title: 'Full Zip', count: 2, link: `${Url}?style_general=128` },
      { title: 'Reversible', count: 1, link: `${Url}?style_general=129` },
      { title: 'Bra', count: 1, link: `${Url}?style_general=130` },
      { title: 'Tank', count: 2, link: `${Url}?style_general=134` },
      { title: 'Tee', count: 3, link: `${Url}?style_general=135` },
      { title: 'Pullover', count: 3, link: `${Url}?style_general=136` },
      { title: 'Hoodie', count: 2, link: `${Url}?style_general=137` },
    ],
  },
  {
    title: 'SIZE',
    options: [
      { title: 'XS', link: `${Url}?size=166` },
      { title: 'S', link: `${Url}?size=167` },
      { title: 'M', link: `${Url}?size=168` },
      { title: 'L', link: `${Url}?size=169` },
      { title: 'XL', link: `${Url}?size=170` },
      { title: '28', link: `${Url}?size=171` },
      { title: '29', link: `${Url}?size=172` },
      { title: '30', link: `${Url}?size=173` },
      { title: '31', link: `${Url}?size=174` },
      { title: '32', link: `${Url}?size=175` },
    ],
  },
  {
    title: 'CLIMATE',
    options: [
      { title: 'All-Weather', count: 4, link: `${Url}?climate=201` },
      { title: 'Cold', count: 1, link: `${Url}?climate=202` },
      { title: 'Cool', count: 4, link: `${Url}?climate=203` },
      { title: 'Indoor', count: 9, link: `${Url}?climate=204` },
      { title: 'Mild', count: 5, link: `${Url}?climate=205` },
      { title: 'Spring', count: 6, link: `${Url}?climate=207` },
      { title: 'Warm', count: 9, link: `${Url}?climate=208` },
      { title: 'Windy', count: 2, link: `${Url}?climate=209` },
      { title: 'Wintry', count: 2, link: `${Url}?climate=210` },
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
      { title: 'Yes', count: 3, link: `${Url}?eco_collection=1` },
      { title: 'No', count: 11, link: `${Url}?eco_collection=0` },
    ],
  },
  {
    title: 'ERIN RECOMMENDS',
    options: [
      { title: 'Yes', count: 3, link: `${Url}?erin_recommends=1` },
      { title: 'No', count: 11, link: `${Url}?erin_recommends=0` },
    ],
  },
  {
    title: 'MATERIAL',
    options: [
      { title: 'Cocona® performance fabric', count: 4, link: `${Url}?material=142` },
      { title: 'Cotton', count: 7, link: `${Url}?material=33` },
      { title: 'Fleece', count: 1, link: `${Url}?material=144` },
      { title: 'Mesh', count: 1, link: `${Url}?material=36` },
      { title: 'Lycra®', count: 1, link: `${Url}?material=148` },
      { title: 'Nylon', count: 4, link: `${Url}?material=37` },
      { title: 'Polyester', count: 5, link: `${Url}?material=38` },
      { title: 'Spandex', count: 3, link: `${Url}?material=150` },
      { title: 'HeatTec®', count: 1, link: `${Url}?material=151` },
      { title: 'EverCool™', count: 1, link: `${Url}?material=152` },
      { title: 'Organic Cotton', count: 2, link: `${Url}?material=153` },
      { title: 'CoolTech™', count: 2, link: `${Url}?material=155` },
      { title: 'Wool', count: 1, link: `${Url}?material=158` },
    ],
  },
  {
    title: 'NEW',
    options: [{ title: 'No', count: 14, link: `${Url}?new=0` }],
  },
  {
    title: 'PATTERN',
    options: [
      { title: 'Solid', count: 13, link: `${Url}?pattern=196` },
      { title: 'Solid-Highlight', count: 1, link: `${Url}?pattern=197` },
    ],
  },
  {
    title: 'PERFORMANCE FABRIC',
    options: [
      { title: 'Yes', count: 5, link: `${Url}?performance_fabric=1` },
      { title: 'No', count: 9, link: `${Url}?performance_fabric=0` },
    ],
  },
  {
    title: 'PRICE',
    options: [
      { title: '$20.00 - $29.99', count: 3, link: `${Url}?price=20-30` },
      { title: '$30.00 - $39.99', count: 5, link: `${Url}?price=30-40` },
      { title: '$40.00 - $49.99', count: 2, link: `${Url}?price=40-50` },
      { title: '$50.00 - $59.99', count: 2, link: `${Url}?price=50-60` },
      { title: '$70.00 and above', count: 2, link: `${Url}?price=70-` },
    ],
  },
  {
    title: 'SALE',
    options: [{ title: 'Yes', count: 14, link: `${Url}?sale=1` }],
  },
];

export const Products: Product[] = [
  WomenShorts[7],
  WomenShorts[10],
  WomenTanks[0],
  WomenTanks[1],
  WomenTanks[13],
  WomenTees[3],
  WomenTees[5],
  WomenTees[6],
  WomenJackets[0],
  WomenJackets[1],
  WomenJackets[5],
  WomenJackets[10],
  WomenHoodies[4],
  WomenHoodies[10],
];
