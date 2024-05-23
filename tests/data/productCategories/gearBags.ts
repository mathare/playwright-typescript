import { Links as HeaderLinks } from '../pageHeader';
import { Product } from '../products';
import { Filter, ProductCategoryExpectedText } from './shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Gear  Bags',
  Title: 'Bags',
  ProductCount: 'Items 1-12 of 14',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Gear: HeaderLinks.Topnav.Gear,
  },
};

export const Filters = [
  {
    title: 'STYLE',
    options: [
      { title: 'Backpack', count: 4, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?style_bags=24` },
      { title: 'Luggage', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?style_bags=25` },
      { title: 'Duffel', count: 2, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?style_bags=26` },
      { title: 'Messenger', count: 4, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?style_bags=27` },
      { title: 'Laptop', count: 6, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?style_bags=28` },
      { title: 'Exercise', count: 6, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?style_bags=29` },
      { title: 'Tote', count: 4, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?style_bags=30` },
    ],
  },
  {
    title: 'ACTIVITY',
    options: [
      { title: 'Yoga', count: 6, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?activity=8` },
      { title: 'Gym', count: 9, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?activity=11` },
      { title: 'Hiking', count: 4, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?activity=18` },
      { title: 'Overnight', count: 4, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?activity=19` },
      { title: 'School', count: 6, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?activity=20` },
      { title: 'Trail', count: 2, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?activity=21` },
      { title: 'Travel', count: 5, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?activity=22` },
      { title: 'Urban', count: 5, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?activity=23` },
    ],
  },
  {
    title: 'ERIN RECOMMENDS',
    options: [{ title: 'Yes', count: 3, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?erin_recommends=1` }],
  },
  {
    title: 'FEATURES',
    options: [
      { title: 'Wheeled', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?features_bags=70` },
      { title: 'Hydration Pocket', count: 2, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?features_bags=71` },
      { title: 'Audio Pocket', count: 6, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?features_bags=72` },
      { title: 'Flapover', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?features_bags=73` },
      { title: 'Waterproof', count: 8, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?features_bags=74` },
      { title: 'Lightweight', count: 10, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?features_bags=75` },
      { title: 'TSA Approved', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?features_bags=76` },
      { title: 'Reflective', count: 5, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?features_bags=77` },
      { title: 'Laptop Sleeve', count: 7, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?features_bags=78` },
      { title: 'Lockable', count: 6, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?features_bags=79` },
    ],
  },
  {
    title: 'MATERIAL',
    options: [
      { title: 'Burlap', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?material=31` },
      { title: 'Canvas', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?material=32` },
      { title: 'Cotton', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?material=33` },
      { title: 'Leather', count: 2, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?material=35` },
      { title: 'Mesh', count: 3, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?material=36` },
      { title: 'Nylon', count: 11, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?material=37` },
      { title: 'Polyester', count: 11, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?material=38` },
      { title: 'Rayon', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?material=39` },
      { title: 'Suede', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?material=41` },
    ],
  },
  {
    title: 'NEW',
    options: [{ title: 'Yes', count: 3, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?new=1` }],
  },
  {
    title: 'PERFORMANCE FABRIC',
    options: [{ title: 'Yes', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?performance_fabric=1` }],
  },
  {
    title: 'PRICE',
    options: [
      { title: '$20.00 - $29.99', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?price=20-30` },
      { title: '$30.00 - $39.99', count: 7, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?price=30-40` },
      { title: '$40.00 - $49.99', count: 4, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?price=40-50` },
      { title: '$50.00 - $59.99', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?price=50-60` },
      { title: '$70.00 and above', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?price=70-` },
    ],
  },
  {
    title: 'SALE',
    options: [{ title: 'Yes', count: 3, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?sale=1` }],
  },
  {
    title: 'STRAP/HANDLE',
    options: [
      { title: 'Adjustable', count: 11, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?strap_bags=61` },
      { title: 'Cross Body', count: 4, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?strap_bags=62` },
      { title: 'Detachable', count: 2, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?strap_bags=63` },
      { title: 'Double', count: 9, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?strap_bags=64` },
      { title: 'Padded', count: 7, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?strap_bags=65` },
      { title: 'Shoulder', count: 7, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?strap_bags=66` },
      { title: 'Single', count: 4, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?strap_bags=67` },
      { title: 'Telescoping', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?strap_bags=68` },
    ],
  },
];

export const Products: Product[] = [
  {
    name: 'Push It Messenger Bag',
    rating: '67%',
    reviews: '3 Reviews',
    price: '$45.00',
    link: '/push-it-messenger-bag.html',
    images: { default: '/w/b/wb04-blue-0.jpg' },
  },
  {
    name: 'Overnight Duffle',
    rating: '60%',
    reviews: '3 Reviews',
    price: '$45.00',
    link: '/overnight-duffle.html',
  },
  {
    name: 'Driven Backpack',
    rating: '90%',
    reviews: '2 Reviews',
    price: '$36.00',
    link: '/driven-backpack.html',
  },
  {
    name: 'Endeavor Daytrip Backpack',
    rating: '73%',
    reviews: '3 Reviews',
    price: '$33.00',
    link: '/endeavor-daytrip-backpack.html',
  },
  {
    name: 'Savvy Shoulder Tote',
    rating: '80%',
    reviews: '2 Reviews',
    price: 'Special Price\n$24.00 Regular Price $32.00',
    link: '/savvy-shoulder-tote.html',
  },
  {
    name: 'Compete Track Tote',
    rating: '70%',
    reviews: '2 Reviews',
    price: '$32.00',
    link: '/compete-track-tote.html',
  },
  {
    name: 'Voyage Yoga Bag',
    rating: '67%',
    reviews: '3 Reviews',
    price: '$32.00',
    link: '/voyage-yoga-bag.html',
  },
  {
    name: 'Impulse Duffle',
    rating: '80%',
    reviews: '3 Reviews',
    price: '$74.00',
    link: '/impulse-duffle.html',
  },
  {
    name: 'Fusion Backpack',
    rating: '67%',
    reviews: '3 Reviews',
    price: '$59.00',
    link: '/fusion-backpack.html',
    images: { default: '/m/b/mb02-gray-0.jpg' },
  },
  {
    name: 'Rival Field Messenger',
    rating: '70%',
    reviews: '2 Reviews',
    price: '$45.00',
    link: '/rival-field-messenger.html',
  },
  {
    name: 'Wayfarer Messenger Bag',
    rating: '67%',
    reviews: '3 Reviews',
    price: '$45.00',
    link: '/wayfarer-messenger-bag.html',
  },
  {
    name: 'Crown Summit Backpack',
    rating: '67%',
    reviews: '3 Reviews',
    price: '$38.00',
    link: '/crown-summit-backpack.html',
  },
  {
    name: 'Strive Shoulder Pack',
    rating: '90%',
    reviews: '2 Reviews',
    price: '$32.00',
    link: '/strive-shoulder-pack.html',
  },
  {
    name: 'Joust Duffle Bag',
    rating: '50%',
    reviews: '2 Reviews',
    price: '$34.00',
    link: '/joust-duffle-bag.html',
  },
];
