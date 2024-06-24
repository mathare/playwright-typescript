import { Links as HeaderLinks } from '../pageHeader';
import { Colors, Product, Sizes } from '../products';
import { FilterCategory, ProductCategoryExpectedText } from './shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Men  Tops  Tanks',
  Title: 'Tanks',
  ProductCount: '12 Items',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Men: HeaderLinks.Topnav.Men,
    Tops: HeaderLinks.Topnav.MenSubMenu.Tops,
  },
};

export const Filters: FilterCategory[] = [
  {
    title: 'STYLE',
    options: [
      { title: 'Tank', count: 12, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?style_general=134` },
    ],
  },
  {
    title: 'SIZE',
    options: [
      { title: 'XS', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?size=166` },
      { title: 'S', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?size=167` },
      { title: 'M', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?size=168` },
      { title: 'L', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?size=169` },
      { title: 'XL', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?size=170` },
    ],
  },
  {
    title: 'CLIMATE',
    options: [
      { title: 'All-Weather', count: 12, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?climate=201` },
      { title: 'Indoor', count: 12, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?climate=204` },
      { title: 'Warm', count: 12, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?climate=208` },
    ],
  },
  {
    title: 'COLOR',
    options: [
      { title: 'Black', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?color=49` },
      { title: 'Blue', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?color=50` },
      { title: 'Gray', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?color=52` },
      { title: 'Green', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?color=53` },
      { title: 'Orange', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?color=56` },
      { title: 'Red', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?color=58` },
      { title: 'White', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?color=59` },
      { title: 'Yellow', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?color=60` },
    ],
  },
  {
    title: 'ECO COLLECTION',
    options: [
      { title: 'Yes', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?eco_collection=1` },
      { title: 'No', count: 10, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?eco_collection=0` },
    ],
  },
  {
    title: 'ERIN RECOMMENDS',
    options: [
      { title: 'Yes', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?erin_recommends=1` },
      { title: 'No', count: 10, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?erin_recommends=0` },
    ],
  },
  {
    title: 'MATERIAL',
    options: [
      {
        title: 'Cocona® performance fabric',
        count: 4,
        link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?material=142`,
      },
      { title: 'Cotton', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?material=33` },
      { title: 'LumaTech™', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?material=147` },
      { title: 'Lycra®', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?material=148` },
      { title: 'Polyester', count: 10, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?material=38` },
      { title: 'HeatTec®', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?material=151` },
      { title: 'EverCool™', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?material=152` },
      { title: 'Organic Cotton', count: 6, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?material=153` },
    ],
  },
  {
    title: 'NEW',
    options: [
      { title: 'Yes', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?new=1` },
      { title: 'No', count: 9, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?new=0` },
    ],
  },
  {
    title: 'PATTERN',
    options: [{ title: 'Solid', count: 12, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?pattern=196` }],
  },
  {
    title: 'PERFORMANCE FABRIC',
    options: [
      { title: 'Yes', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?performance_fabric=1` },
      { title: 'No', count: 9, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?performance_fabric=0` },
    ],
  },
  {
    title: 'PRICE',
    options: [
      { title: '$10.00 - $19.99', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?price=10-20` },
      { title: '$20.00 - $29.99', count: 8, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?price=20-30` },
      { title: '$30.00 and above', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?price=30-` },
    ],
  },
  {
    title: 'SALE',
    options: [
      { title: 'Yes', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?sale=1` },
      { title: 'No', count: 9, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tanks}?sale=0` },
    ],
  },
];

export const ProductDetails: Record<string, Product> = {
  Cassius: {
    name: 'Cassius Sparring Tank',
    price: 'As low as $18.00',
    sizes: Sizes,
    colors: [Colors.Blue],
    link: '/cassius-sparring-tank.html',
  },
  Atlas: {
    name: 'Atlas Fitness Tank',
    price: 'As low as $18.00',
    sizes: Sizes,
    colors: [Colors.Blue],
    link: '/atlas-fitness-tank.html',
  },
  Tiberius: {
    name: 'Tiberius Gym Tank',
    price: 'As low as $18.00',
    sizes: Sizes,
    colors: [Colors.Yellow],
    link: '/tiberius-gym-tank.html',
  },
  Sinbad: {
    name: 'Sinbad Fitness Tank',
    price: 'As low as $29.00',
    sizes: Sizes,
    colors: [Colors.Blue],
    link: '/sinbad-fitness-tank.html',
  },
  Sparta: {
    name: 'Sparta Gym Tank',
    price: 'As low as $29.00',
    sizes: Sizes,
    colors: [Colors.Green],
    link: '/sparta-gym-tank.html',
  },
  Argus: {
    name: 'Argus All-Weather Tank',
    price: 'As low as $22.00',
    sizes: Sizes,
    colors: [Colors.Grey],
    link: '/argus-all-weather-tank.html',
    images: {
      default: '/m/t/mt07-gray_main_1.jpg',
      colors: ['/m/t/mt07-gray_main_1.jpg'],
      sizes: '/m/t/mt07-gray_main_1.jpg',
    },
  },
  Vulcan: {
    name: 'Vulcan Weightlifting Tank',
    price: 'As low as $28.00',
    sizes: Sizes,
    colors: [Colors.Black],
    link: '/vulcan-weightlifting-tank.html',
  },
  Rocco: {
    name: 'Rocco Gym Tank',
    price: 'As low as $24.00',
    sizes: Sizes,
    colors: [Colors.Blue],
    link: '/rocco-gym-tank.html',
  },
  Helios: {
    name: 'Helios Endurance Tank',
    rating: '70%',
    reviews: '4 Reviews',
    price: 'As low as $32.00',
    sizes: Sizes,
    colors: [Colors.Blue],
    link: '/helios-endurance-tank.html',
  },
  Primo: {
    name: 'Primo Endurance Tank',
    rating: '53%',
    reviews: '3 Reviews',
    price: 'As low as $29.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Red, Colors.Yellow],
    link: '/primo-endurance-tank.html',
  },
  Tristan: {
    name: 'Tristan Endurance Tank',
    rating: '80%',
    reviews: '3 Reviews',
    price: 'As low as $29.00',
    sizes: Sizes,
    colors: [Colors.Grey, Colors.Red, Colors.White],
    link: '/tristan-endurance-tank.html',
  },
  Erikssen: {
    name: 'Erikssen CoolTech™ Fitness Tank',
    rating: '55%',
    reviews: '4 Reviews',
    price: 'As low as $29.00',
    sizes: Sizes,
    colors: [Colors.Grey, Colors.Orange, Colors.Red],
    link: '/erikssen-cooltech-trade-fitness-tank.html',
  },
};

export const Products = [
  ProductDetails.Cassius,
  ProductDetails.Atlas,
  ProductDetails.Tiberius,
  ProductDetails.Sinbad,
  ProductDetails.Sparta,
  ProductDetails.Argus,
  ProductDetails.Vulcan,
  ProductDetails.Rocco,
  ProductDetails.Helios,
  ProductDetails.Primo,
  ProductDetails.Tristan,
  ProductDetails.Erikssen,
];
