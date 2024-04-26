import { Links as HeaderLinks } from '../pageHeader';
import { Colors, Product, Sizes } from '../products';
import { FilterOptions, ProductCategoryExpectedText } from './shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Women  Tops  Jackets',
  Title: 'Jackets',
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

export const Products: Product[] = [
  {
    title: 'Olivia 1/4 Zip Light Jacket',
    price: 'As low as $77.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Purple],
    link: '/olivia-1-4-zip-light-jacket.html',
  },
  {
    title: 'Juno Jacket',
    rating: '87%',
    reviews: '3 Reviews',
    price: 'As low as $77.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Purple],
    link: '/juno-jacket.html',
  },
  {
    title: 'Neve Studio Dance Jacket',
    rating: '87%',
    reviews: '3 Reviews',
    price: 'As low as $69.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Orange],
    link: '/neve-studio-dance-jacket.html',
  },
  {
    title: 'Nadia Elements Shell',
    rating: '60%',
    reviews: '3 Reviews',
    price: 'As low as $69.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Orange, Colors.Yellow],
    link: '/nadia-elements-shell.html',
  },
  {
    title: 'Jade Yoga Jacket',
    rating: '87%',
    reviews: '3 Reviews',
    price: 'As low as $32.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Grey, Colors.Green],
    link: '/jade-yoga-jacket.html',
  },
  {
    title: 'Adrienne Trek Jacket',
    rating: '60%',
    reviews: '2 Reviews',
    price: 'As low as $57.00',
    sizes: Sizes,
    colors: [Colors.Grey, Colors.Orange, Colors.Purple],
    link: '/adrienne-trek-jacket.html',
  },
  {
    title: 'Inez Full Zip Jacket',
    rating: '67%',
    reviews: '3 Reviews',
    price: 'As low as $59.00',
    sizes: Sizes,
    colors: [Colors.Orange, Colors.Purple, Colors.Red],
    link: '/inez-full-zip-jacket.html',
  },
  {
    title: 'Riona Full Zip Jacket',
    rating: '87%',
    reviews: '3 Reviews',
    price: 'As low as $60.00',
    sizes: Sizes,
    colors: [Colors.Brown, Colors.Green, Colors.Red],
    link: '/riona-full-zip-jacket.html',
  },
  {
    title: 'Ingrid Running Jacket',
    rating: '90%',
    reviews: '2 Reviews',
    price: 'As low as $84.00',
    sizes: Sizes,
    colors: [Colors.Orange, Colors.Red, Colors.White],
    link: '/ingrid-running-jacket.html',
  },
  {
    title: 'Augusta Pullover Jacket',
    rating: '87%',
    reviews: '3 Reviews',
    price: 'As low as $57.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Orange, Colors.Red],
    link: '/augusta-pullover-jacket.html',
  },
  {
    title: 'Josie Yoga Jacket',
    rating: '70%',
    reviews: '4 Reviews',
    price: 'As low as $56.25',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Grey],
    link: '/josie-yoga-jacket.html',
  },
  {
    title: 'Stellar Solar Jacket',
    rating: '67%',
    reviews: '3 Reviews',
    price: 'As low as $75.00',
    sizes: ['S', 'M', 'L'],
    colors: [Colors.Blue, Colors.Red, Colors.Yellow],
    link: '/stellar-solar-jacket.html',
  },
];
