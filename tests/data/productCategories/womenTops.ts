import { Links as HeaderLinks } from '../pageHeader';
import { Product } from '../products';
import { Filter, FilterOptions, ProductCategoryExpectedText } from './shared';
import { Products as Hoodies } from './womenHoodies';
import { Products as Jackets } from './womenJackets';
import { Products as Tanks } from './womenTanks';
import { Products as Tees } from './womenTees';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Women  Tops',
  Title: 'Tops',
  Filters: ['CATEGORY', ...FilterOptions],
  ProductCount: 'Items 1-12 of 50',
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
      title: 'Jackets',
      count: 12,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?cat=23`,
    },
    {
      title: 'Hoodies & Sweatshirts',
      count: 12,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?cat=24`,
    },
    {
      title: 'Tees',
      count: 12,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?cat=25`,
    },
    {
      title: 'Bras & Tanks',
      count: 14,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?cat=26`,
    },
  ],
  Style: [
    {
      title: 'Insulated',
      count: 4,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?style_general=116`,
    },
    {
      title: 'Jacket',
      count: 12,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?style_general=117`,
    },
    {
      title: 'Lightweight',
      count: 6,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?style_general=119`,
    },
    {
      title: 'Hooded',
      count: 5,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?style_general=120`,
    },
    {
      title: 'Heavy Duty',
      count: 1,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?style_general=121`,
    },
    {
      title: 'Rain Coat',
      count: 2,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?style_general=122`,
    },
    {
      title: 'Hard Shell',
      count: 3,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?style_general=123`,
    },
    {
      title: 'Soft Shell',
      count: 8,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?style_general=124`,
    },
    {
      title: 'Windbreaker',
      count: 4,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?style_general=125`,
    },
    {
      title: '¼ zip',
      count: 5,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?style_general=127`,
    },
    {
      title: 'Full Zip',
      count: 12,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?style_general=128`,
    },
    {
      title: 'Reversible',
      count: 2,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?style_general=129`,
    },
    {
      title: 'Bra',
      count: 5,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?style_general=130`,
    },
    {
      title: 'Sweatshirt',
      count: 5,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?style_general=132`,
    },
    {
      title: 'Tank',
      count: 9,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?style_general=134`,
    },
    {
      title: 'Tee',
      count: 12,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?style_general=135`,
    },
    {
      title: 'Pullover',
      count: 10,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?style_general=136`,
    },
    {
      title: 'Hoodie',
      count: 9,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?style_general=137`,
    },
    {
      title: 'Camisole',
      count: 1,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?style_general=141`,
    },
  ],
  Size: [
    { title: 'XS', link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?size=166` },
    { title: 'S', link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?size=167` },
    { title: 'M', link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?size=168` },
    { title: 'L', link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?size=169` },
    { title: 'XL', link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?size=170` },
  ],
  Climate: [
    {
      title: 'All-Weather',
      count: 8,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?climate=201`,
    },
    {
      title: 'Cold',
      count: 4,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?climate=202`,
    },
    {
      title: 'Cool',
      count: 17,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?climate=203`,
    },
    {
      title: 'Indoor',
      count: 35,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?climate=204`,
    },
    {
      title: 'Mild',
      count: 16,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?climate=205`,
    },
    {
      title: 'Rainy',
      count: 2,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?climate=206`,
    },
    {
      title: 'Spring',
      count: 21,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?climate=207`,
    },
    {
      title: 'Warm',
      count: 28,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?climate=208`,
    },
    {
      title: 'Windy',
      count: 8,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?climate=209`,
    },
    {
      title: 'Wintry',
      count: 6,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?climate=210`,
    },
  ],
  Color: [
    { title: 'Black', link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?color=49` },
    { title: 'Blue', link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?color=50` },
    { title: 'Brown', link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?color=51` },
    { title: 'Gray', link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?color=52` },
    { title: 'Green', link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?color=53` },
    { title: 'Orange', link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?color=56` },
    { title: 'Purple', link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?color=57` },
    { title: 'Red', link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?color=58` },
    { title: 'White', link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?color=59` },
    { title: 'Yellow', link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?color=60` },
  ],
  EcoCollection: [
    {
      title: 'Yes',
      count: 12,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?eco_collection=1`,
    },
    {
      title: 'No',
      count: 38,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?eco-collection=0`,
    },
  ],
  ErinRecommends: [
    {
      title: 'Yes',
      count: 11,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?erin_recommends=1`,
    },
    {
      title: 'No',
      count: 39,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?erin_recommends=0`,
    },
  ],
  Material: [
    {
      title: 'Cocona® performance fabric',
      count: 9,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?material=142`,
    },
    {
      title: 'Cotton',
      count: 16,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?material=33`,
    },
    {
      title: 'Fleece',
      count: 6,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?material=144`,
    },
    {
      title: 'Hemp',
      count: 2,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?material=145`,
    },
    {
      title: 'Jersey',
      count: 1,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?material=33`,
    },
    {
      title: 'LumaTech™',
      count: 1,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?material=147`,
    },
    {
      title: 'Mesh',
      count: 2,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?material=36`,
    },
    {
      title: 'Lycra®',
      count: 6,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?material=148`,
    },
    {
      title: 'Nylon',
      count: 10,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?material=37`,
    },
    {
      title: 'Microfiber',
      count: 1,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?material=149`,
    },
    {
      title: 'Polyester',
      count: 22,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?material=38`,
    },
    {
      title: 'Spandex',
      count: 13,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?material=150`,
    },
    {
      title: 'HeatTec®',
      count: 3,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?material=151`,
    },
    {
      title: 'EverCool™',
      count: 5,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?material=152`,
    },
    {
      title: 'Organic Cotton',
      count: 9,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?material=153`,
    },
    {
      title: 'TENCEL',
      count: 1,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?material=154`,
    },
    {
      title: 'CoolTech™',
      count: 6,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?material=155`,
    },
    {
      title: 'Wool',
      count: 4,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?material=158`,
    },
  ],
  New: [
    {
      title: 'Yes',
      count: 13,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?new=1`,
    },
    {
      title: 'No',
      count: 37,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?new=0`,
    },
  ],
  Pattern: [
    {
      title: 'Checked',
      count: 1,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?pattern=193`,
    },
    {
      title: 'Color-Blocked',
      count: 2,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?pattern=194`,
    },
    {
      title: 'Solid',
      count: 46,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?pattern=196`,
    },
    {
      title: 'Striped',
      count: 1,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?pattern=198`,
    },
  ],
  PerformanceFabric: [
    {
      title: 'Yes',
      count: 15,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?performance_fabric=1`,
    },
    {
      title: 'No',
      count: 35,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?performance_fabric=0`,
    },
  ],
  Price: [
    {
      title: '$20.00 - $29.99',
      count: 12,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?price=20-30`,
    },
    {
      title: '$30.00 - $39.99',
      count: 15,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?price=30-40`,
    },
    {
      title: '$40.00 - $49.99',
      count: 4,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?price=40-50`,
    },
    {
      title: '$50.00 - $59.99',
      count: 10,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?price=50-60`,
    },
    {
      title: '$60.00 - $69.99',
      count: 5,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?price=60-70`,
    },
    {
      title: '$70.00 - $79.99',
      count: 3,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?price=70-80`,
    },
    {
      title: '$80.00 and above',
      count: 1,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?price=80-`,
    },
  ],
  Sale: [
    {
      title: 'Yes',
      count: 12,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?sale=1`,
    },
    {
      title: 'No',
      count: 38,
      link: `${HeaderLinks.Topnav.WomenSubMenu.Tops}?sale=0`,
    },
  ],
};

export const Products: Product[] = [...Tanks, ...Tees, ...Jackets, ...Hoodies];
