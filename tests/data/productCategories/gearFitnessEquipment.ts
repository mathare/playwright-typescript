import { Links as HeaderLinks } from '../pageHeader';
import { ProductCategoryExpectedText } from './shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Gear  Fitness Equipment',
  Title: 'Fitness Equipment',
  Filters: ['CATEGORY', 'SIZE', 'PRICE', 'COLOR', 'ACTIVITY', 'MATERIAL', 'GENDER', 'ERIN RECOMMENDS', 'NEW', 'SALE'],
  ProductCount: '11 Items',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Gear: HeaderLinks.Topnav.Gear,
  },
};

export const Products = [
  {
    title: 'Sprite Yoga Companion Kit',
    price: 'From $61.00\n\nTo $77.00',
    link: '/sprite-yoga-companion-kit.html',
  },
  {
    title: 'Set of Sprite Yoga Straps',
    price: 'Starting at\n$14.00',
    link: '/set-of-sprite-yoga-straps.html',
  },
  {
    title: 'Harmony Lumaflex™ Strength Band Kit',
    rating: '60%',
    reviews: '3 Reviews',
    price: '$22.00',
    link: '/harmony-lumaflex-trade-strength-band-kit.html',
  },
  {
    title: 'Sprite Foam Roller',
    price: '$19.00',
    link: '/sprite-foam-roller.html',
  },
  {
    title: 'Sprite Foam Yoga Brick',
    price: '$5.00',
    link: '/sprite-foam-yoga-brick.html',
  },
  {
    title: 'Quest Lumaflex™ Band',
    rating: '67%',
    reviews: '3 Reviews',
    price: '$19.00',
    link: '/quest-lumaflex-trade-band.html',
  },
  {
    title: "Go-Get'r Pushup Grips",
    rating: '87%',
    reviews: '3 Reviews',
    price: '$19.00',
    link: '/go-get-r-pushup-grips.html',
  },
  {
    title: 'Pursuit Lumaflex™ Tone Band',
    rating: '60%',
    reviews: '2 Reviews',
    price: '$16.00',
    link: '/pursuit-lumaflex-trade-tone-band.html',
  },
  {
    title: 'Zing Jump Rope',
    rating: '93%',
    reviews: '3 Reviews',
    price: '$12.00',
    link: '/zing-jump-rope.html',
  },
  {
    title: 'Dual Handle Cardio Ball',
    rating: '100%',
    reviews: '2 Reviews',
    price: '$12.00',
    link: '/dual-handle-cardio-ball.html',
  },
  {
    title: 'Affirm Water Bottle',
    rating: '60%',
    reviews: '1 Review',
    price: '$7.00',
    link: '/affirm-water-bottle.html',
  },
];
