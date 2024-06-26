import { Links as HeaderLinks } from '../pageHeader';
import { Product } from '../products';
import { FilterCategory, ProductCategoryExpectedText } from './shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Gear  Watches',
  Title: 'Watches',
  ProductCount: '9 Items',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Gear: HeaderLinks.Topnav.Gear,
  },
};

export const Filters: FilterCategory[] = [
  {
    title: 'CATEGORY',
    options: [
      { title: 'Electronic', count: 9, link: `${HeaderLinks.Topnav.GearSubMenu.Watches}?category_gear=86` },
      { title: 'Exercise', count: 7, link: `${HeaderLinks.Topnav.GearSubMenu.Watches}?category_gear=87` },
      { title: 'Fashion', count: 2, link: `${HeaderLinks.Topnav.GearSubMenu.Watches}?category_gear=88` },
      { title: 'Timepiece', count: 9, link: `${HeaderLinks.Topnav.GearSubMenu.Watches}?category_gear=90` },
    ],
  },
  {
    title: 'ACTIVITY',
    options: [
      { title: 'Outdoor', count: 4, link: `${HeaderLinks.Topnav.GearSubMenu.Watches}?activity=5` },
      { title: 'Recreation', count: 7, link: `${HeaderLinks.Topnav.GearSubMenu.Watches}?activity=9` },
      { title: 'Gym', count: 5, link: `${HeaderLinks.Topnav.GearSubMenu.Watches}?activity=11` },
      { title: 'Athletic', count: 5, link: `${HeaderLinks.Topnav.GearSubMenu.Watches}?activity=16` },
      { title: 'Sports', count: 4, link: `${HeaderLinks.Topnav.GearSubMenu.Watches}?activity=17` },
    ],
  },
  {
    title: 'GENDER',
    options: [
      { title: 'Men', count: 5, link: `${HeaderLinks.Topnav.GearSubMenu.Watches}?gender=80` },
      { title: 'Women', count: 5, link: `${HeaderLinks.Topnav.GearSubMenu.Watches}?gender=81` },
      { title: 'Unisex', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.Watches}?gender=84` },
    ],
  },
  {
    title: 'MATERIAL',
    options: [
      { title: 'Leather', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.Watches}?material=35` },
      { title: 'Metal', count: 3, link: `${HeaderLinks.Topnav.GearSubMenu.Watches}?material=43` },
      { title: 'Plastic', count: 4, link: `${HeaderLinks.Topnav.GearSubMenu.Watches}?material=44` },
      { title: 'Rubber', count: 5, link: `${HeaderLinks.Topnav.GearSubMenu.Watches}?material=45` },
      { title: 'Stainless Steel', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.Watches}?material=47` },
      { title: 'Silicone', count: 5, link: `${HeaderLinks.Topnav.GearSubMenu.Watches}?material=48` },
    ],
  },
  {
    title: 'NEW',
    options: [{ title: 'Yes', count: 4, link: `${HeaderLinks.Topnav.GearSubMenu.Watches}?new=1` }],
  },
  {
    title: 'PRICE',
    options: [
      { title: '$40.00 - $49.99', count: 4, link: `${HeaderLinks.Topnav.GearSubMenu.Watches}?price=40-50` },
      { title: '$50.00 - $59.99', count: 3, link: `${HeaderLinks.Topnav.GearSubMenu.Watches}?price=50-60` },
      { title: '$90.00 and above', count: 2, link: `${HeaderLinks.Topnav.GearSubMenu.Watches}?price=90-` },
    ],
  },
  {
    title: 'SALE',
    options: [{ title: 'Yes', count: 2, link: `${HeaderLinks.Topnav.GearSubMenu.Watches}?sale=1` }],
  },
];

export const ProductDetails: Record<string, Product> = {
  Didi: {
    name: 'Didi Sport Watch',
    rating: '70%',
    reviews: '2 Reviews',
    price: '$92.00',
    link: '/didi-sport-watch.html',
  },
  Clamber: {
    name: 'Clamber Watch',
    rating: '53%',
    reviews: '3 Reviews',
    price: '$54.00',
    link: '/clamber-watch.html',
  },
  Bolo: {
    name: 'Bolo Sport Watch',
    rating: '67%',
    reviews: '3 Reviews',
    price: '$49.00',
    link: '/bolo-sport-watch.html',
  },
  Luma: {
    name: 'Luma Analog Watch',
    rating: '80%',
    reviews: '2 Reviews',
    price: '$43.00',
    link: '/luma-analog-watch.html',
  },
  Dash: {
    name: 'Dash Digital Watch',
    rating: '73%',
    reviews: '3 Reviews',
    price: '$92.00',
    link: '/dash-digital-watch.html',
  },
  Cruise: {
    name: 'Cruise Dual Analog Watch',
    rating: '65%',
    reviews: '4 Reviews',
    price: '$55.00',
    link: '/cruise-dual-analog-watch.html',
  },
  Summit: {
    name: 'Summit Watch',
    rating: '47%',
    reviews: '3 Reviews',
    price: '$54.00',
    link: '/summit-watch.html',
  },
  Endurance: {
    name: 'Endurance Watch',
    rating: '87%',
    reviews: '3 Reviews',
    price: '$49.00',
    link: '/endurance-watch.html',
  },
  Aim: {
    name: 'Aim Analog Watch',
    rating: '80%',
    reviews: '2 Reviews',
    price: '$45.00',
    link: '/aim-analog-watch.html',
  },
};

export const Products = [
  ProductDetails.Didi,
  ProductDetails.Clamber,
  ProductDetails.Bolo,
  ProductDetails.Luma,
  ProductDetails.Dash,
  ProductDetails.Cruise,
  ProductDetails.Summit,
  ProductDetails.Endurance,
  ProductDetails.Aim,
];
