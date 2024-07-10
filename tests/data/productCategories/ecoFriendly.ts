import { FilterCategory, ProductCategoryExpectedText } from './shared';
import { ProductDetails as MenHoodies } from './menHoodies';
import { ProductDetails as MenJackets } from './menJackets';
import { ProductDetails as MenPants } from './menPants';
import { ProductDetails as MenTanks } from './menTanks';
import { ProductDetails as MenTees } from './menTees';
import { ProductDetails as WomenHoodies } from './womenHoodies';
import { ProductDetails as WomenPants } from './womenPants';
import { ProductDetails as WomenShorts } from './womenShorts';
import { ProductDetails as WomenTanks } from './womenTanks';
import { ProductDetails as WomenTees } from './womenTees';
import { Product } from '../products';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Eco Friendly',
  Title: 'Eco Friendly',
  ProductCount: 'Items 1-12 of 18',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
  },
};

export const Url = '/collections/eco-friendly.html';

export const Filters: FilterCategory[] = [
  {
    title: 'STYLE',
    options: [
      { title: 'Base Layer', count: 1, link: `${Url}?style_bottom=104` },
      { title: 'Basic', count: 2, link: `${Url}?style_bottom=105` },
      { title: 'Capri', count: 1, link: `${Url}?style_bottom=106` },
      { title: 'Sweatpants', count: 1, link: `${Url}?style_bottom=112` },
      { title: 'Workout Pants', count: 1, link: `${Url}?style_bottom=115` },
    ],
  },
  {
    title: 'STYLE',
    options: [
      { title: 'Insulated', count: 2, link: `${Url}?style_general=116` },
      { title: 'Lightweight', count: 1, link: `${Url}?style_general=119` },
      { title: 'Soft Shell', count: 2, link: `${Url}?style_general=124` },
      { title: '¼ zip', count: 1, link: `${Url}?style_general=127` },
      { title: 'Full Zip', count: 1, link: `${Url}?style_general=128` },
      { title: 'Bra', count: 1, link: `${Url}?style_general=130` },
      { title: 'Tank', count: 3, link: `${Url}?style_general=134` },
      { title: 'Tee', count: 4, link: `${Url}?style_general=135` },
      { title: 'Pullover', count: 1, link: `${Url}?style_general=136` },
      { title: 'Hoodie', count: 1, link: `${Url}?style_general=137` },
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
      { title: 'All-Weather', count: 10, link: `${Url}?climate=201` },
      { title: 'Cold', count: 2, link: `${Url}?climate=202` },
      { title: 'Cool', count: 5, link: `${Url}?climate=203` },
      { title: 'Indoor', count: 15, link: `${Url}?climate=204` },
      { title: 'Mild', count: 5, link: `${Url}?climate=205` },
      { title: 'Spring', count: 7, link: `${Url}?climate=207` },
      { title: 'Warm', count: 13, link: `${Url}?climate=208` },
      { title: 'Windy', count: 5, link: `${Url}?climate=209` },
      { title: 'Wintry', count: 2, link: `${Url}?climate=210` },
      { title: 'Hot', count: 1, link: `${Url}?climate=211` },
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
    options: [{ title: 'Yes', count: 18, link: `${Url}?eco_collection=1` }],
  },
  {
    title: 'ERIN RECOMMENDS',
    options: [
      { title: 'Yes', count: 2, link: `${Url}?erin_recommends=1` },
      { title: 'No', count: 16, link: `${Url}?erin_recommends=0` },
    ],
  },
  {
    title: 'MATERIAL',
    options: [
      { title: 'Cotton', count: 3, link: `${Url}?material=33` },
      { title: 'Fleece', count: 3, link: `${Url}?material=144` },
      { title: 'Hemp', count: 2, link: `${Url}?material=145` },
      { title: 'Lycra®', count: 1, link: `${Url}?material=148` },
      { title: 'Nylon', count: 2, link: `${Url}?material=37` },
      { title: 'Polyester', count: 5, link: `${Url}?material=38` },
      { title: 'Spandex', count: 2, link: `${Url}?material=150` },
      { title: 'EverCool™', count: 3, link: `${Url}?material=152` },
      { title: 'Organic Cotton', count: 13, link: `${Url}?material=153` },
      { title: 'CoolTech™', count: 1, link: `${Url}?material=155` },
      { title: 'Wool', count: 2, link: `${Url}?material=158` },
    ],
  },
  {
    title: 'NEW',
    options: [
      { title: 'Yes', count: 4, link: `${Url}?new=1` },
      { title: 'No', count: 14, link: `${Url}?new=0` },
    ],
  },
  {
    title: 'PATTERN',
    options: [
      { title: 'Color-Blocked', count: 3, link: `${Url}?pattern=194` },
      { title: 'Solid', count: 14, link: `${Url}?pattern=196` },
      { title: 'Solid-Highlight', count: 1, link: `${Url}?pattern=197` },
    ],
  },
  {
    title: 'PERFORMANCE FABRIC',
    options: [
      { title: 'Yes', count: 2, link: `${Url}?performance_fabric=1` },
      { title: 'No', count: 16, link: `${Url}?performance_fabric=0` },
    ],
  },
  {
    title: 'PRICE',
    options: [
      { title: '$10.00 - $19.99', count: 1, link: `${Url}?price=10-20` },
      { title: '$20.00 - $29.99', count: 8, link: `${Url}?price=20-30` },
      { title: '$30.00 - $39.99', count: 2, link: `${Url}?price=30-40` },
      { title: '$40.00 - $49.99', count: 3, link: `${Url}?price=40-50` },
      { title: '$50.00 - $59.99', count: 2, link: `${Url}?price=50-60` },
      { title: '$60.00 and above', count: 2, link: `${Url}?price=60-` },
    ],
  },
  {
    title: 'SALE',
    options: [
      { title: 'Yes', count: 5, link: `${Url}?sale=1` },
      { title: 'No', count: 13, link: `${Url}?sale=0` },
    ],
  },
];

export const Products: Product[] = [
  WomenShorts.Ana,
  WomenShorts.Fiona,
  WomenPants.Daria,
  WomenTanks.Bella,
  WomenTanks.Electra,
  WomenTees.Tiffany,
  WomenTees.Elisa,
  WomenTees.Layla,
  WomenHoodies.Ariel,
  MenPants.Mithra,
  MenTanks.Atlas,
  MenTanks.Argus,
  MenTees.Helios,
  MenJackets.Jupiter,
  MenJackets.Kenobi,
  MenHoodies.Frankie,
  MenHoodies.Bruno,
  MenHoodies.Chaz,
];
