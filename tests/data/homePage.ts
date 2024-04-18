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

export const Colors = {
  Black: 'rgb(0, 0, 0)',
  Blue: 'rgb(24, 87, 247)',
  DarkGrey: 'rgb(51, 51, 51)',
  Green: 'rgb(83, 168, 40)',
  Grey: 'rgb(143, 143, 143)',
  LightGrey: 'rgb(240, 240, 240)',
  Orange: 'rgb(235, 103, 3)',
  Pink: 'rgb(239, 61, 255)',
  White: 'rgb(255, 255, 255)',
  Yellow: 'rgb(255, 213, 0)',
  Swatch: {
    Selected: 'rgb(255, 85, 1)',
    Size: {
      Hovered: 'rgb(153, 153, 153)',
      NotSelected: 'rgb(148, 148, 148)',
    },
    Color: {
      Hovered: 'rgb(195, 64, 0)',
    },
  },
};

type Product = {
  title: string;
  rating?: string;
  reviews?: string;
  price: string;
  sizes?: string[];
  colors?: string[];
  link: string;
  images: Record<string, string | string[]>;
};

export const Products: Product[] = [
  {
    title: 'Radiant Tee',
    rating: '60%',
    reviews: '3 Reviews',
    price: 'As low as $22.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Orange, Colors.Pink],
    link: '/radiant-tee.html',
    images: {
      default: '/w/s/ws12-orange_main_2.jpg',
      colors: ['/w/s/ws12-blue_main_1.jpg', '/w/s/ws12-orange_main_1.jpg', '/w/s/ws12-purple_main_1.jpg'],
      // The tee has 2 different images for the size options
      sizes: [
        '/w/s/ws12-blue_main_1.jpg',
        '/w/s/ws12-blue_main_1.jpg',
        '/w/s/ws12-blue_main_2.jpg',
        '/w/s/ws12-blue_main_2.jpg',
        '/w/s/ws12-blue_main_2.jpg',
      ],
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
    colors: [Colors.Grey],
    link: '/argus-all-weather-tank.html',
    images: {
      default: '/m/t/mt07-gray_main_1.jpg',
      colors: ['/m/t/mt07-gray_main_1.jpg'],
      sizes: '/m/t/mt07-gray_main_1.jpg',
    },
  },
  {
    title: 'Hero Hoodie',
    price: 'As low as $54.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Grey, Colors.Green],
    link: '/hero-hoodie.html',
    images: {
      default: '/m/h/mh07-gray_main_2.jpg',
      colors: ['/m/h/mh07-black_main_1.jpg', '/m/h/mh07-gray_main_1.jpg', '/m/h/mh07-green_main_1.jpg'],
      // The hoodie has 2 different images for the size options
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
    Selected: `${Colors.Swatch.Selected} solid 2px`,
    NotSelected: `${Colors.Swatch.Size.NotSelected} none 0px`,
    Hovered: `${Colors.Swatch.Size.Hovered} solid 1px`,
  },
  Colors: {
    Selected: `${Colors.Swatch.Selected} solid 2px`,
    Hovered: `${Colors.Swatch.Color.Hovered} solid 2px`,
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
