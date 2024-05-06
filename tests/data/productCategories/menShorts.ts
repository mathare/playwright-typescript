import { Links as HeaderLinks } from '../pageHeader';
import { Colors, Product } from '../products';
import { Filter, FilterOptions, ProductCategoryExpectedText } from './shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Men  Bottoms  Shorts',
  Title: 'Shorts',
  Filters: [...FilterOptions],
  ProductCount: '12 Items',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Men: HeaderLinks.Topnav.Men,
    Bottoms: HeaderLinks.Topnav.MenSubMenu.Bottoms,
  },
};

export const Filters: Record<string, Filter[]> = {
  Style: [
    { title: 'Base Layer', count: 12, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?style_bottom=104` },
    { title: 'Compression', count: 4, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?style_bottom=107` },
    { title: 'Tights', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?style_bottom=113` },
    {
      title: 'Workout Pants',
      count: 12,
      link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?style_bottom=115`,
    },
  ],
  Size: [
    { title: '32', link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?size=175` },
    { title: '33', link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?size=176` },
    { title: '34', link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?size=177` },
    { title: '36', link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?size=178` },
  ],
  Climate: [
    { title: 'All-Weather', count: 6, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?climate=201` },
    { title: 'Indoor', count: 11, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?climate=204` },
    { title: 'Mild', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?climate=205` },
    { title: 'Spring', count: 5, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?climate=207` },
    { title: 'Warm', count: 10, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?climate=208` },
    { title: 'Hot', count: 8, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?climate=211` },
  ],
  Color: [
    { title: 'Black', link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?color=49` },
    { title: 'Blue', link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?color=50` },
    { title: 'Gray', link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?color=52` },
    { title: 'Green', link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?color=53` },
    { title: 'Purple', link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?color=57` },
    { title: 'Red', link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?color=58` },
    { title: 'Yellow', link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?color=60` },
  ],
  EcoCollection: [
    { title: 'No', count: 12, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?eco-collection=0` },
  ],
  ErinRecommends: [
    { title: 'Yes', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?erin_recommends=1` },
    { title: 'No', count: 10, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?erin_recommends=0` },
  ],
  Material: [
    {
      title: 'Cocona® performance fabric',
      count: 1,
      link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?material=142`,
    },
    { title: 'Cotton', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?material=33` },
    { title: 'LumaTech™', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?material=147` },
    { title: 'Mesh', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?material=36` },
    { title: 'Lycra®', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?material=148` },
    { title: 'Nylon', count: 4, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?material=37` },
    { title: 'Polyester', count: 8, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?material=38` },
    { title: 'Rayon', count: 4, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?material=39` },
    { title: 'Spandex', count: 4, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?material=150` },
    { title: 'CoolTech™', count: 4, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?material=155` },
    { title: 'Linen', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?material=157` },
    { title: 'Wool', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?material=158` },
  ],
  New: [
    { title: 'Yes', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?new=1` },
    { title: 'No', count: 10, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?new=0` },
  ],
  Pattern: [
    { title: 'Solid', count: 12, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?pattern=196` },
    { title: 'Striped', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?pattern=198` },
  ],
  PerformanceFabric: [
    { title: 'Yes', count: 4, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?performance_fabric=1` },
    { title: 'No', count: 8, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?performance_fabric=0` },
  ],
  Price: [
    { title: '$20.00 - $29.99', count: 4, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?price=20-30` },
    { title: '$30.00 - $39.99', count: 7, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?price=30-40` },
    { title: '$40.00 and above', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?price=40-` },
  ],
  Sale: [
    { title: 'Yes', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?sale=1` },
    { title: 'No', count: 9, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Shorts}?sale=0` },
  ],
};

const Sizes = ['32', '33', '34', '36'];

export const Products: Product[] = [
  {
    title: 'Pierce Gym Short',
    price: 'As low as $27.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Grey, Colors.Red],
    link: '/pierce-gym-short.html',
  },
  {
    title: 'Arcadio Gym Short',
    price: 'As low as $20.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Red],
    link: '/arcadio-gym-short.html',
  },
  {
    title: 'Sol Active Short',
    price: 'As low as $32.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Purple],
    link: '/sol-active-short.html',
  },
  {
    title: 'Troy Yoga Short',
    rating: '67%',
    reviews: '3 Reviews',
    price: 'As low as $24.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Green],
    link: '/troy-yoga-short.html',
  },
  {
    title: 'Orestes Fitness Short',
    rating: '60%',
    reviews: '2 Reviews',
    price: 'As low as $35.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Green],
    link: '/orestes-fitness-short.html',
  },
  {
    title: 'Rapha Sports Short',
    rating: '87%',
    reviews: '3 Reviews',
    price: 'As low as $35.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Purple],
    link: '/rapha-sports-short.html',
  },
  {
    title: 'Lono Yoga Short',
    rating: '70%',
    reviews: '2 Reviews',
    price: 'As low as $32.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Grey, Colors.Red],
    link: '/lono-yoga-short.html',
  },
  {
    title: 'Hawkeye Yoga Short',
    rating: '73%',
    reviews: '3 Reviews',
    price: 'As low as $29.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Grey],
    link: '/hawkeye-yoga-short.html',
  },
  {
    title: 'Torque Power Short',
    rating: '60%',
    reviews: '3 Reviews',
    price: 'As low as $32.50',
    sizes: Sizes,
    colors: [Colors.Grey, Colors.Purple, Colors.Yellow],
    link: '/torque-power-short.html',
  },
  {
    title: 'Meteor Workout Short',
    rating: '73%',
    reviews: '3 Reviews',
    price: 'As low as $32.50',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Green],
    link: '/meteor-workout-short.html',
  },
  {
    title: 'Apollo Running Short',
    price: 'As low as $32.50',
    sizes: Sizes,
    colors: [Colors.Black],
    link: '/apollo-running-short.html',
  },
  {
    title: 'Cobalt CoolTech™ Fitness Short',
    rating: '80%',
    reviews: '3 Reviews',
    price: 'As low as $44.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Red],
    link: '/cobalt-cooltech-trade-fitness-short.html',
  },
];
