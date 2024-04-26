import { Links as HeaderLinks } from '../pageHeader';
import { Colors, Sizes } from '../products';
import { FilterOptions, ProductCategoryExpectedText } from './shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Women  Tops  Hoodies & Sweatshirts',
  Title: 'Hoodies & Sweatshirts',
  Filters: [...FilterOptions],
  ProductCount: '12 Items',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Women: HeaderLinks.Topnav.Women,
    Tops: HeaderLinks.Topnav.WomenSubMenu.Tops,
  },
};

export const Products = [
  {
    title: 'Circe Hooded Ice Fleece',
    price: 'As low as $68.00',
    sizes: Sizes,
    colors: [Colors.Grey, Colors.Green, Colors.Purple],
    link: '/circe-hooded-ice-fleece.html',
  },
  {
    title: 'Eos V-Neck Hoodie',
    price: 'As low as $54.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Orange],
    link: '/eos-v-neck-hoodie.html',
  },
  {
    title: 'Helena Hooded Fleece',
    price: 'As low as $55.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Grey, Colors.Yellow],
    link: '/helena-hooded-fleece.html',
  },
  {
    title: 'Ariel Roll Sleeve Sweatshirt',
    price: 'As low as $39.00',
    sizes: Sizes,
    colors: [Colors.Green, Colors.Purple, Colors.Red],
    link: '/ariel-roll-sleeve-sweatshirt.html',
  },
  {
    title: 'Cassia Funnel Sweatshirt',
    price: 'As low as $48.00',
    sizes: Sizes,
    colors: [Colors.Orange, Colors.Purple, Colors.White],
    link: '/cassia-funnel-sweatshirt.html',
  },
  {
    title: 'Phoebe Zipper Sweatshirt',
    price: 'As low as $59.00',
    sizes: Sizes,
    colors: [Colors.Grey, Colors.Purple, Colors.White],
    link: '/phoebe-zipper-sweatshirt.html',
  },
  {
    title: 'Daphne Full-Zip Hoodie',
    rating: '80%',
    reviews: '2 Reviews',
    price: 'As low as $59.00',
    sizes: Sizes,
    colors: [Colors.Purple],
    link: '/daphne-full-zip-hoodie.html',
  },
  {
    title: 'Selene Yoga Hoodie',
    rating: '80%',
    reviews: '3 Reviews',
    price: 'As low as $42.00',
    sizes: Sizes,
    colors: [Colors.Orange, Colors.Purple, Colors.White],
    link: '/selene-yoga-hoodie.html',
  },
  {
    title: 'Miko Pullover Hoodie',
    rating: '60%',
    reviews: '3 Reviews',
    price: 'As low as $69.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Orange, Colors.Purple],
    link: '/miko-pullover-hoodie.html',
  },
  {
    title: 'Autumn Pullie',
    rating: '60%',
    reviews: '3 Reviews',
    price: 'As low as $57.00',
    sizes: Sizes,
    colors: [Colors.Green, Colors.Purple, Colors.Red],
    link: '/autumn-pullie.html',
  },
  {
    title: 'Hera Pullover Hoodie',
    rating: '67%',
    reviews: '3 Reviews',
    price: 'As low as $48.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Orange],
    link: '/hera-pullover-hoodie.html',
  },
  {
    // This is surely a typo but because I want my tests to pass and I can't change the actual product data I have to include the same typo here
    title: 'Mona Pullover Hoodlie',
    rating: '87%',
    reviews: '3 Reviews',
    price: 'As low as $57.00',
    sizes: Sizes,
    colors: [Colors.Green, Colors.Orange, Colors.Purple],
    link: '/mona-pullover-hoodlie.html',
  },
];
