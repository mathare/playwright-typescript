import { Links as HeaderLinks } from '../pageHeader';
import { Colors, Product, Sizes } from '../products';
import { Filter, ProductCategoryExpectedText } from './shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Women  Tops  Bras & Tanks',
  Title: 'Bras & Tanks',
  ProductCount: 'Items 1-12 of 14',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Women: HeaderLinks.Topnav.Women,
    Tops: HeaderLinks.Topnav.WomenSubMenu.Tops,
  },
};

export const Filters: Record<string, Filter[]> = {
  Style: [
    { title: 'Bra', count: 5, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?style_general=130` },
    { title: 'Tank', count: 9, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?style_general=134` },
    { title: 'Camisole', count: 1, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?style_general=141` },
  ],
  Size: [
    { title: 'XS', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?size=166` },
    { title: 'S', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?size=167` },
    { title: 'M', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?size=168` },
    { title: 'L', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?size=169` },
    { title: 'XL', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?size=170` },
  ],
  Climate: [
    { title: 'Indoor', count: 14, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?climate=204` },
    { title: 'Warm', count: 14, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?climate=208` },
  ],
  Color: [
    { title: 'Black', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?color=49` },
    { title: 'Blue', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?color=50` },
    { title: 'Gray', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?color=52` },
    { title: 'Green', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?color=53` },
    { title: 'Orange', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?color=56` },
    { title: 'Purple', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?color=57` },
    { title: 'Red', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?color=58` },
    { title: 'White', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?color=59` },
    { title: 'Yellow', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?color=60` },
  ],
  EcoCollection: [
    { title: 'Yes', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?eco_collection=1` },
    { title: 'No', count: 11, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?eco_collection=0` },
  ],
  ErinRecommends: [
    { title: 'Yes', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?erin_recommends=1` },
    { title: 'No', count: 11, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?erin_recommends=0` },
  ],
  Material: [
    {
      title: 'Cocona® performance fabric',
      count: 4,
      link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?material=142`,
    },
    { title: 'Cotton', count: 4, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?material=33` },
    { title: 'Mesh', count: 1, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?material=36` },
    { title: 'Lycra®', count: 2, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?material=148` },
    { title: 'Nylon', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?material=37` },
    { title: 'Microfiber', count: 1, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?material=149` },
    { title: 'Polyester', count: 5, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?material=38` },
    { title: 'Spandex', count: 2, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?material=150` },
    { title: 'HeatTec®', count: 1, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?material=151` },
    { title: 'EverCool™', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?material=152` },
    {
      title: 'Organic Cotton',
      count: 6,
      link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?material=153`,
    },
  ],
  New: [
    { title: 'Yes', count: 2, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?new=1` },
    { title: 'No', count: 12, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?new=0` },
  ],
  Pattern: [
    { title: 'Checked', count: 1, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?pattern=193` },
    { title: 'Solid', count: 12, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?pattern=196` },
    { title: 'Striped', count: 1, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?pattern=198` },
  ],
  PerformanceFabric: [
    { title: 'Yes', count: 5, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?performance_fabric=1` },
    { title: 'No', count: 9, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?performance_fabric=0` },
  ],
  Price: [
    {
      title: '$20.00 - $29.99',
      count: 4,
      link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?price=20-30`,
    },
    {
      title: '$30.00 and above',
      count: 10,
      link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?price=30-`,
    },
  ],
  Sale: [
    { title: 'Yes', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?sale=1` },
    { title: 'No', count: 11, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.BrasTanks}?sale=0` },
  ],
};

export const Products: Product[] = [
  {
    title: 'Breathe-Easy Tank',
    rating: '70%',
    reviews: '2 Reviews',
    price: 'As low as $34.00',
    sizes: Sizes,
    colors: [Colors.Purple, Colors.White, Colors.Yellow],
    link: '/breathe-easy-tank.html',
    images: {
      default: '/w/t/wt09-white_main_1.jpg',
      colors: ['/w/t/wt09-purple_main_1.jpg', '/w/t/wt09-white_main_1.jpg', '/w/t/wt09-yellow_main_1.jpg'],
      sizes: '/w/t/wt09-purple_main_1.jpg',
    },
  },
  {
    title: 'Antonia Racer Tank',
    rating: '60%',
    reviews: '3 Reviews',
    price: 'As low as $34.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Purple, Colors.Yellow],
    link: '/antonia-racer-tank.html',
  },
  {
    title: 'Maya Tunic',
    rating: '80%',
    reviews: '1 Review',
    price: 'As low as $29.00',
    sizes: Sizes,
    colors: [Colors.Green, Colors.White, Colors.Yellow],
    link: '/maya-tunic.html',
  },
  {
    title: 'Chloe Compete Tank',
    rating: '73%',
    reviews: '3 Reviews',
    price: 'As low as $39.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Red, Colors.Yellow],
    link: '/chloe-compete-tank.html',
  },
  {
    title: 'Leah Yoga Top',
    price: 'As low as $39.00',
    sizes: Sizes,
    colors: [Colors.Orange, Colors.Purple, Colors.White],
    link: '/leah-yoga-top.html',
  },
  {
    title: 'Nona Fitness Tank',
    price: 'As low as $39.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Purple, Colors.Red],
    link: '/nona-fitness-tank.html',
  },
  {
    title: 'Nora Practice Tank',
    price: 'As low as $39.00',
    sizes: Sizes,
    colors: [Colors.Orange, Colors.Purple, Colors.Red],
    link: '/nora-practice-tank.html',
  },
  {
    title: 'Zoe Tank',
    rating: '53%',
    reviews: '3 Reviews',
    price: 'As low as $29.00',
    sizes: Sizes,
    colors: [Colors.Green, Colors.Orange, Colors.Yellow],
    link: '/zoe-tank.html',
  },
  {
    title: 'Bella Tank',
    rating: '80%',
    reviews: '2 Reviews',
    price: 'As low as $29.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Orange],
    link: '/bella-tank.html',
  },
  {
    title: 'Lucia Cross-Fit Bra',
    rating: '40%',
    reviews: '3 Reviews',
    price: 'As low as $39.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Orange, Colors.Purple],
    link: '/lucia-cross-fit-bra.html',
  },
  {
    title: 'Prima Compete Bra Top',
    rating: '60%',
    reviews: '3 Reviews',
    price: 'As low as $24.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Purple, Colors.Yellow],
    link: '/prima-compete-bra-top.html',
  },
  {
    title: 'Celeste Sports Bra',
    rating: '67%',
    reviews: '3 Reviews',
    price: 'As low as $39.00',
    sizes: Sizes,
    colors: [Colors.Green, Colors.Red, Colors.Yellow],
    link: '/celeste-sports-bra.html',
  },
  {
    title: 'Erica Evercool Sports Bra',
    rating: '60%',
    reviews: '4 Reviews',
    price: 'As low as $39.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Orange, Colors.Yellow],
    link: '/erica-evercool-sports-bra.html',
  },
  {
    title: 'Electra Bra Top',
    rating: '75%',
    reviews: '4 Reviews',
    price: 'As low as $39.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Grey, Colors.Purple],
    link: '/electra-bra-top.html',
  },
];
