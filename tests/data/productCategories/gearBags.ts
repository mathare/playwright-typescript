import { Links as HeaderLinks } from '../pageHeader';
import { Product } from '../products';
import { ProductCategoryExpectedText } from './shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Gear  Bags',
  Title: 'Bags',
  Filters: [
    'STYLE',
    'PRICE',
    'ACTIVITY',
    'MATERIAL',
    'STRAP/HANDLE',
    'FEATURES',
    'PERFORMANCE FABRIC',
    'ERIN RECOMMENDS',
    'NEW',
    'SALE',
  ],
  ProductCount: 'Items 1-12 of 14',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Gear: HeaderLinks.Topnav.Gear,
  },
};

export const Products: Product[] = [
  {
    title: 'Push It Messenger Bag',
    rating: '67%',
    reviews: '3 Reviews',
    price: '$45.00',
    link: '/push-it-messenger-bag.html',
    images: { default: '/w/b/wb04-blue-0.jpg' },
  },
  {
    title: 'Overnight Duffle',
    rating: '60%',
    reviews: '3 Reviews',
    price: '$45.00',
    link: '/overnight-duffle.html',
  },
  {
    title: 'Driven Backpack',
    rating: '90%',
    reviews: '2 Reviews',
    price: '$36.00',
    link: '/driven-backpack.html',
  },
  {
    title: 'Endeavor Daytrip Backpack',
    rating: '73%',
    reviews: '3 Reviews',
    price: '$33.00',
    link: '/endeavor-daytrip-backpack.html',
  },
  {
    title: 'Savvy Shoulder Tote',
    rating: '80%',
    reviews: '2 Reviews',
    price: 'Special Price\n$24.00 Regular Price $32.00',
    link: '/savvy-shoulder-tote.html',
  },
  {
    title: 'Compete Track Tote',
    rating: '70%',
    reviews: '2 Reviews',
    price: '$32.00',
    link: '/compete-track-tote.html',
  },
  {
    title: 'Voyage Yoga Bag',
    rating: '67%',
    reviews: '3 Reviews',
    price: '$32.00',
    link: '/voyage-yoga-bag.html',
  },
  {
    title: 'Impulse Duffle',
    rating: '80%',
    reviews: '3 Reviews',
    price: '$74.00',
    link: '/impulse-duffle.html',
  },
  {
    title: 'Fusion Backpack',
    rating: '67%',
    reviews: '3 Reviews',
    price: '$59.00',
    link: '/fusion-backpack.html',
    images: { default: '/m/b/mb02-gray-0.jpg' },
  },
  {
    title: 'Rival Field Messenger',
    rating: '70%',
    reviews: '2 Reviews',
    price: '$45.00',
    link: '/rival-field-messenger.html',
  },
  {
    title: 'Wayfarer Messenger Bag',
    rating: '67%',
    reviews: '3 Reviews',
    price: '$45.00',
    link: '/wayfarer-messenger-bag.html',
  },
  {
    title: 'Crown Summit Backpack',
    rating: '67%',
    reviews: '3 Reviews',
    price: '$38.00',
    link: '/crown-summit-backpack.html',
  },
  {
    title: 'Strive Shoulder Pack',
    rating: '90%',
    reviews: '2 Reviews',
    price: '$32.00',
    link: '/strive-shoulder-pack.html',
  },
  {
    title: 'Joust Duffle Bag',
    rating: '50%',
    reviews: '2 Reviews',
    price: '$34.00',
    link: '/joust-duffle-bag.html',
  },
];
