import { FilterCategory, ProductCategoryExpectedText } from './shared';
import { Products as Bags } from './gearBags';
import { Products as FitnessEquipment } from './gearFitnessEquipment';
import { Products as Watches } from './gearWatches';
import { Products as MenPants } from './menPants';
import { Products as MenShorts } from './menShorts';
import { Products as WomenHoodies } from './womenHoodies';
import { Products as WomenJackets } from './womenJackets';
import { Products as WomenPants } from './womenPants';
import { Products as WomenShorts } from './womenShorts';
import { Products as WomenTanks } from './womenTanks';
import { Products as WomenTees } from './womenTees';
import { Product } from '../products';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Erin Recommends',
  Title: 'Erin Recommends',
  ProductCount: 'Items 1-12 of 21',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
  },
};

export const Url = '/collections/erin-recommends.html';

export const Filters: FilterCategory[] = [
  {
    title: 'STYLE',
    options: [
      { title: 'Base Layer', count: 4, link: `${Url}?style_bottom=104` },
      { title: 'Basic', count: 1, link: `${Url}?style_bottom=105` },
      { title: 'Capri', count: 2, link: `${Url}?style_bottom=106` },
      { title: 'Compression', count: 3, link: `${Url}?style_bottom=107` },
      { title: 'Leggings', count: 4, link: `${Url}?style_bottom=108` },
      { title: 'Snug', count: 2, link: `${Url}?style_bottom=111` },
      { title: 'Sweatpants', count: 3, link: `${Url}?style_bottom=112` },
      { title: 'Track Pants', count: 4, link: `${Url}?style_bottom=114` },
      { title: 'Workout Pants', count: 4, link: `${Url}?style_bottom=115` },
    ],
  },
  {
    title: 'STYLE',
    options: [
      { title: 'Jacket', count: 3, link: `${Url}?style_general=117` },
      { title: 'Lightweight', count: 2, link: `${Url}?style_general=119` },
      { title: 'Hooded', count: 2, link: `${Url}?style_general=120` },
      { title: 'Rain Coat', count: 1, link: `${Url}?style_general=122` },
      { title: 'Hard Shell', count: 1, link: `${Url}?style_general=123` },
      { title: 'Soft Shell', count: 2, link: `${Url}?style_general=124` },
      { title: 'Windbreaker', count: 1, link: `${Url}?style_general=125` },
      { title: '¼ zip', count: 2, link: `${Url}?style_general=127` },
      { title: 'Full Zip', count: 2, link: `${Url}?style_general=128` },
      { title: 'Sweatshirt', count: 2, link: `${Url}?style_general=132` },
      { title: 'Tank', count: 3, link: `${Url}?style_general=134` },
      { title: 'Tee', count: 2, link: `${Url}?style_general=135` },
      { title: 'Pullover', count: 2, link: `${Url}?style_general=136` },
      { title: 'Hoodie', count: 2, link: `${Url}?style_general=137` },
      { title: 'Camisole', count: 1, link: `${Url}?style_general=141` },
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
      { title: '33', link: `${Url}?size=176` },
      { title: '34', link: `${Url}?size=177` },
      { title: '36', link: `${Url}?size=178` },
    ],
  },
  {
    title: 'CLIMATE',
    options: [
      { title: 'All-Weather', count: 8, link: `${Url}?climate=201` },
      { title: 'Cold', count: 2, link: `${Url}?climate=202` },
      { title: 'Cool', count: 10, link: `${Url}?climate=203` },
      { title: 'Indoor', count: 14, link: `${Url}?climate=204` },
      { title: 'Mild', count: 11, link: `${Url}?climate=205` },
      { title: 'Rainy', count: 1, link: `${Url}?climate=206` },
      { title: 'Spring', count: 8, link: `${Url}?climate=207` },
      { title: 'Warm', count: 9, link: `${Url}?climate=208` },
      { title: 'Windy', count: 5, link: `${Url}?climate=209` },
      { title: 'Wintry', count: 3, link: `${Url}?climate=210` },
      { title: 'Hot', count: 4, link: `${Url}?climate=211` },
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
      { title: 'Yellow', link: `${Url}?color=60` },
    ],
  },
  {
    title: 'ECO COLLECTION',
    options: [
      { title: 'Yes', count: 4, link: `${Url}?eco_collection=1` },
      { title: 'No', count: 17, link: `${Url}?eco_collection=0` },
    ],
  },
  {
    title: 'ERIN RECOMMENDS',
    options: [{ title: 'Yes', count: 21, link: `${Url}?erin_recommends=1` }],
  },
  {
    title: 'MATERIAL',
    options: [
      { title: 'Cocona® performance fabric', count: 5, link: `${Url}?material=142` },
      { title: 'Cotton', count: 4, link: `${Url}?material=33` },
      { title: 'Fleece', count: 3, link: `${Url}?material=144` },
      { title: 'LumaTech™', count: 2, link: `${Url}?material=147` },
      { title: 'Mesh', count: 1, link: `${Url}?material=36` },
      { title: 'Lycra®', count: 1, link: `${Url}?material=148` },
      { title: 'Nylon', count: 2, link: `${Url}?material=37` },
      { title: 'Microfiber', count: 1, link: `${Url}?material=149` },
      { title: 'Polyester', count: 11, link: `${Url}?material=38` },
      { title: 'Rayon', count: 2, link: `${Url}?material=39` },
      { title: 'Spandex', count: 8, link: `${Url}?material=150` },
      { title: 'Organic Cotton', count: 5, link: `${Url}?material=153` },
      { title: 'CoolTech™', count: 3, link: `${Url}?material=155` },
      { title: 'Wool', count: 4, link: `${Url}?material=158` },
    ],
  },
  {
    title: 'NEW',
    options: [
      { title: 'Yes', count: 6, link: `${Url}?new=1` },
      { title: 'No', count: 15, link: `${Url}?new=0` },
    ],
  },
  {
    title: 'PATTERN',
    options: [
      { title: 'Graphic Print', count: 1, link: `${Url}?pattern=195` },
      { title: 'Solid', count: 20, link: `${Url}?pattern=196` },
      { title: 'Striped', count: 1, link: `${Url}?pattern=198` },
    ],
  },
  {
    title: 'PERFORMANCE FABRIC',
    options: [
      { title: 'Yes', count: 6, link: `${Url}?performance_fabric=1` },
      { title: 'No', count: 15, link: `${Url}?performance_fabric=0` },
    ],
  },
  {
    title: 'PRICE',
    options: [
      { title: '$30.00 - $39.99', count: 7, link: `${Url}?price=30-40` },
      { title: '$40.00 - $49.99', count: 5, link: `${Url}?price=40-50` },
      { title: '$50.00 - $59.99', count: 6, link: `${Url}?price=50-60` },
      { title: '$60.00 - $69.99', count: 2, link: `${Url}?price=60-70` },
      { title: '$70.00 and above', count: 1, link: `${Url}?price=70-` },
    ],
  },
  {
    title: 'SALE',
    options: [
      { title: 'Yes', count: 4, link: `${Url}?sale=1` },
      { title: 'No', count: 17, link: `${Url}?sale=0` },
    ],
  },
];

export const Products: Product[] = [
  WomenShorts[0],
  WomenShorts[1],
  WomenPants[0],
  WomenPants[7],
  WomenPants[8],
  WomenTanks[0],
  WomenTanks[4],
  WomenTanks[6],
  WomenTees[3],
  WomenTees[7],
  WomenJackets[4],
  WomenJackets[5],
  WomenJackets[11],
  WomenHoodies[1],
  WomenHoodies[5],
  WomenHoodies[11],
  MenShorts[5],
  MenShorts[11],
  MenPants[1],
  MenPants[2],
  MenPants[3],
];
