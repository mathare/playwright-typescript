import { Colors } from './shared';

export const ExpectedText = {
  PromoBlocks: [
    'New Luma Yoga Collection Get fit and look fab in new seasonal styles Shop New Yoga',
    '20% OFF Luma pants when you shop today* Shop Pants',
    'Even more ways to mix and match Buy 3 Luma tees get a 4th free Shop Tees',
    'Take it from Erin Luma founder Erin Renny shares her favorites! Shop Erin Recommends',
    'Science meets performance Wicking to raingear, Luma covers you Shop Performance',
    'Twice around, twice as nice Find conscientious, comfy clothing in our eco-friendly collection Shop Eco-Friendly',
  ],
  ContentHeading: 'Hot Sellers Here is what`s trending on Luma right now',
};

const Sizes = ['XS', 'S', 'M', 'L', 'XL'];

type Product = {
  title: string;
  rating?: string;
  reviews?: string;
  price: string;
  sizes?: string[];
  colors?: string[];
  link: string;
  images: Record<'default' | 'colors' | 'sizes', string | string[]>;
};

export const Products: Product[] = [
  {
    title: 'Radiant Tee',
    rating: '60%',
    reviews: '3 Reviews',
    price: 'As low as $22.00',
    sizes: Sizes,
    colors: [Colors.ElectricBlue, Colors.Orange, Colors.Pink],
    link: '/radiant-tee.html',
    images: {
      default: '/w/s/ws12-orange_main_2.jpg',
      colors: ['/w/s/ws12-blue_main_1.jpg', '/w/s/ws12-orange_main_1.jpg', '/w/s/ws12-purple_main_1.jpg'],
      sizes: '/w/s/ws12-blue_main_1.jpg',
    },
  },
  {
    title: 'Breathe-Easy Tank',
    rating: '70%',
    reviews: '2 Reviews',
    price: 'As low as $34.00',
    sizes: Sizes,
    colors: [Colors.Pink, Colors.White, Colors.Yellow],
    link: '/breathe-easy-tank.html',
    images: {
      default: '/w/t/wt09-white_main_1.jpg',
      colors: ['/w/t/wt09-purple_main_1.jpg', '/w/t/wt09-white_main_1.jpg', '/w/t/wt09-yellow_main_1.jpg'],
      sizes: '/w/t/wt09-purple_main_1.jpg',
    },
  },
  {
    title: 'Argus All-Weather Tank',
    price: 'As low as $22.00',
    sizes: Sizes,
    colors: [Colors.MidGrey],
    link: '/argus-all-weather-tank.html',
    images: {
      default: '/m/t/mt07-gray_main_1.jpg',
      colors: '/m/t/mt07-gray_main_1.jpg',
      sizes: '/m/t/mt07-gray_main_1.jpg',
    },
  },
  {
    title: 'Hero Hoodie',
    price: 'As low as $54.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.MidGrey, Colors.Green],
    link: '/hero-hoodie.html',
    images: {
      default: '/m/h/mh07-gray_main_2.jpg',
      colors: ['/m/h/mh07-black_main_1.jpg', '/m/h/mh07-gray_main_1.jpg', '/m/h/mh07-green_main_1.jpg'],
      // Unlike the other products, the hoodie has 2 different images for the size options
      sizes: [
        '/m/h/mh07-black_main_1.jpg',
        '/m/h/mh07-black_main_1.jpg',
        '/m/h/mh07-black_main_2.jpg',
        '/m/h/mh07-black_main_2.jpg',
        '/m/h/mh07-black_main_2.jpg',
      ],
    },
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
    title: 'Push It Messenger Bag',
    rating: '67%',
    reviews: '3 Reviews',
    price: '$45.00',
    link: '/push-it-messenger-bag.html',
    images: { default: '/w/b/wb04-blue-0.jpg' },
  },
];

export const SwatchOutlineStyles = {
  Sizes: {
    Selected: 'rgb(255, 85, 1) solid 2px',
    // Firefox doesn't include "none" in the outline style
    NotSelected: /rgb\(148, 148, 148\) (none )?0px/,
    Hovered: 'rgb(153, 153, 153) solid 1px',
  },
  Colors: {
    Selected: 'rgb(255, 85, 1) solid 2px',
    Hovered: 'rgb(195, 64, 0) solid 2px',
  },
};

export const PromoBlockLinks = [
  '/collections/yoga-new.html',
  '/promotions/pants-all.html',
  '/promotions/tees-all.html',
  '/collections/erin-recommends.html',
  '/collections/performance-fabrics.html',
  '/collections/eco-friendly.html',
];
