import { Links as HeaderLinks } from '../pageHeader';
import { Colors, Product, Sizes } from '../products';
import { FilterCategory, ProductCategoryExpectedText } from './shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Men  Tops  Jackets',
  Title: 'Jackets',
  ProductCount: '11 Items',
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
      { title: 'Insulated', count: 5, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?style_general=116` },
      { title: 'Jacket', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?style_general=117` },
      {
        title: 'Lightweight',
        count: 6,
        link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?style_general=119`,
      },
      { title: 'Hooded', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?style_general=120` },
      { title: 'Heavy Duty', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?style_general=121` },
      { title: 'Rain Coat', count: 5, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?style_general=122` },
      { title: 'Hard Shell', count: 5, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?style_general=123` },
      { title: 'Soft Shell', count: 5, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?style_general=124` },
      {
        title: 'Windbreaker',
        count: 6,
        link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?style_general=125`,
      },
      { title: '¼ zip', count: 7, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?style_general=127` },
      { title: 'Full Zip', count: 5, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?style_general=128` },
      { title: 'Reversible', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?style_general=129` },
    ],
  },
  {
    title: 'SIZE',
    options: [
      { title: 'XS', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?size=166` },
      { title: 'S', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?size=167` },
      { title: 'M', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?size=168` },
      { title: 'L', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?size=169` },
      { title: 'XL', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?size=170` },
    ],
  },
  {
    title: 'CLIMATE',
    options: [
      { title: 'All-Weather', count: 5, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?climate=201` },
      { title: 'Cold', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?climate=202` },
      { title: 'Cool', count: 9, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?climate=203` },
      { title: 'Indoor', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?climate=204` },
      { title: 'Mild', count: 4, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?climate=205` },
      { title: 'Rainy', count: 5, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?climate=206` },
      { title: 'Spring', count: 10, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?climate=207` },
      { title: 'Warm', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?climate=208` },
      { title: 'Windy', count: 9, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?climate=209` },
      { title: 'Wintry', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?climate=210` },
    ],
  },
  {
    title: 'COLOR',
    options: [
      { title: 'Black', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?color=49` },
      { title: 'Blue', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?color=50` },
      { title: 'Gray', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?color=52` },
      { title: 'Green', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?color=53` },
      { title: 'Orange', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?color=56` },
      { title: 'Purple', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?color=57` },
      { title: 'Red', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?color=58` },
      { title: 'White', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?color=59` },
      { title: 'Yellow', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?color=60` },
    ],
  },
  {
    title: 'ECO COLLECTION',
    options: [
      { title: 'Yes', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?eco_collection=1` },
      { title: 'No', count: 9, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?eco_collection=0` },
    ],
  },
  {
    title: 'ERIN RECOMMENDS',
    options: [
      { title: 'Yes', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?erin_recommends=1` },
      { title: 'No', count: 9, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?erin_recommends=0` },
    ],
  },
  {
    title: 'MATERIAL',
    options: [
      {
        title: 'Cocona® performance fabric',
        count: 2,
        link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?material=142`,
      },
      { title: 'Cotton', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?material=33` },
      { title: 'Fleece', count: 5, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?material=144` },
      { title: 'Hemp', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?material=145` },
      { title: 'LumaTech™', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?material=147` },
      { title: 'Lycra®', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?material=148` },
      { title: 'Nylon', count: 5, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?material=37` },
      { title: 'Polyester', count: 9, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?material=38` },
      { title: 'Spandex', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?material=150` },
      { title: 'Wool', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?material=158` },
    ],
  },
  {
    title: 'NEW',
    options: [
      { title: 'Yes', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?new=1` },
      { title: 'No', count: 9, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?new=0` },
    ],
  },
  {
    title: 'PATTERN',
    options: [{ title: 'Solid', count: 11, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?pattern=196` }],
  },
  {
    title: 'PERFORMANCE FABRIC',
    options: [
      { title: 'Yes', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?performance_fabric=1` },
      { title: 'No', count: 8, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?performance_fabric=0` },
    ],
  },
  {
    title: 'PRICE',
    options: [
      { title: '$40.00 - $49.99', count: 4, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?price=40-50` },
      { title: '$50.00 - $59.99', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?price=50-60` },
      { title: '$60.00 - $69.99', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?price=60-70` },
      { title: '$70.00 - $79.99', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?price=70-80` },
      { title: '$90.00 and above', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?price=90-` },
    ],
  },
  {
    title: 'SALE',
    options: [
      { title: 'Yes', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?sale=1` },
      { title: 'No', count: 9, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Jackets}?sale=0` },
    ],
  },
];

export const ProductDetails: Record<string, Product> = {
  Proteus: {
    name: 'Proteus Fitness Jackshirt',
    price: 'As low as $45.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Orange],
    link: '/proteus-fitness-jackshirt.html',
  },
  Montana: {
    name: 'Montana Wind Jacket',
    rating: '53%',
    reviews: '3 Reviews',
    price: 'As low as $49.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Green, Colors.Red],
    link: '/montana-wind-jacket.html',
  },
  Jupiter: {
    name: 'Jupiter All-Weather Trainer',
    rating: '80%',
    reviews: '3 Reviews',
    price: 'As low as $56.99',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Purple],
    link: '/jupiter-all-weather-trainer.html',
  },
  Typhon: {
    name: 'Typhon Performance Fleece-lined Jacket',
    price: 'As low as $60.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Green, Colors.Red],
    link: '/typhon-performance-fleece-lined-jacket.html',
  },
  Mars: {
    name: 'Mars HeatTech™ Pullover',
    rating: '70%',
    reviews: '2 Reviews',
    price: 'As low as $66.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Orange, Colors.Red],
    link: '/mars-heattech-trade-pullover.html',
  },
  Taurus: {
    name: 'Taurus Elements Shell',
    rating: '70%',
    reviews: '2 Reviews',
    price: 'As low as $65.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.White, Colors.Yellow],
    link: '/taurus-elements-shell.html',
  },
  Lando: {
    name: 'Lando Gym Jacket',
    rating: '67%',
    reviews: '3 Reviews',
    price: 'As low as $99.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Gray, Colors.Green],
    link: '/lando-gym-jacket.html',
  },
  Orion: {
    name: 'Orion Two-Tone Fitted Jacket',
    rating: '50%',
    reviews: '2 Reviews',
    price: 'As low as $72.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Red, Colors.Yellow],
    link: '/orion-two-tone-fitted-jacket.html',
  },
  Kenobi: {
    name: 'Kenobi Trail Jacket',
    rating: '93%',
    reviews: '3 Reviews',
    price: 'As low as $47.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Purple],
    link: '/kenobi-trail-jacket.html',
  },
  Hyperion: {
    name: 'Hyperion Elements Jacket',
    rating: '90%',
    reviews: '2 Reviews',
    price: 'As low as $51.00',
    sizes: Sizes,
    colors: [Colors.Green, Colors.Orange, Colors.Red],
    link: '/hyperion-elements-jacket.html',
  },
  Beaumont: {
    name: 'Beaumont Summit Kit',
    rating: '90%',
    reviews: '2 Reviews',
    price: 'As low as $42.00',
    sizes: Sizes,
    colors: [Colors.Orange, Colors.Red, Colors.Yellow],
    link: '/beaumont-summit-kit.html',
  },
};

export const Products = [
  ProductDetails.Proteus,
  ProductDetails.Montana,
  ProductDetails.Jupiter,
  ProductDetails.Typhon,
  ProductDetails.Mars,
  ProductDetails.Taurus,
  ProductDetails.Lando,
  ProductDetails.Orion,
  ProductDetails.Kenobi,
  ProductDetails.Hyperion,
  ProductDetails.Beaumont,
];
