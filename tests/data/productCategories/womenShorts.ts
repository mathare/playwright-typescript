import { Links as HeaderLinks } from '../pageHeader';
import { Colors, Product } from '../products';
import { FilterOptions, ProductCategoryExpectedText } from './shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Women  Bottoms  Shorts',
  Title: 'Shorts',
  Filters: [...FilterOptions],
  ProductCount: '12 Items',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Women: HeaderLinks.Topnav.Women,
    Bottoms: HeaderLinks.Topnav.WomenSubMenu.Bottoms,
  },
};

const Sizes = { All: ['28', '29', '30', '31', '32'], Small: ['28', '29'] };

export const Products: Product[] = [
  {
    title: 'Erika Running Short',
    rating: '60%',
    reviews: '3 Reviews',
    price: 'As low as $45.00',
    sizes: Sizes.All,
    colors: [Colors.Green, Colors.Purple, Colors.Red],
    link: '/erika-running-short.html',
  },
  {
    title: 'Ina Compression Short',
    rating: '73%',
    reviews: '3 Reviews',
    price: 'As low as $49.00',
    sizes: Sizes.Small,
    colors: [Colors.Blue, Colors.Orange, Colors.Red],
    link: '/ina-compression-short.html',
  },
  {
    title: 'Ana Running Short',
    rating: '80%',
    reviews: '3 Reviews',
    price: 'As low as $40.00',
    sizes: Sizes.Small,
    colors: [Colors.Black, Colors.Orange, Colors.White],
    link: '/ana-running-short.html',
  },
  {
    title: 'Mimi All-Purpose Short',
    rating: '67%',
    reviews: '3 Reviews',
    price: 'As low as $44.00',
    sizes: Sizes.Small,
    colors: [Colors.Grey, Colors.Green, Colors.White],
    link: '/mimi-all-purpose-short.html',
  },
  {
    title: 'Sybil Running Short',
    rating: '93%',
    reviews: '3 Reviews',
    price: 'As low as $44.00',
    sizes: Sizes.All,
    colors: [Colors.Purple],
    link: '/sybil-running-short.html',
  },
  {
    title: 'Echo Fit Compression Short',
    rating: '67%',
    reviews: '3 Reviews',
    price: 'As low as $24.00',
    sizes: Sizes.Small,
    colors: [Colors.Black, Colors.Blue, Colors.Purple],
    link: '/echo-fit-compression-short.html',
  },
  {
    title: 'Angel Light Running Short',
    rating: '70%',
    reviews: '2 Reviews',
    price: 'As low as $42.00',
    sizes: Sizes.Small,
    colors: [Colors.Grey, Colors.Orange, Colors.Purple],
    link: '/angel-light-running-short.html',
  },
  {
    title: 'Bess Yoga Short',
    rating: '73%',
    reviews: '3 Reviews',
    price: 'As low as $28.00',
    sizes: Sizes.All,
    colors: [Colors.Blue, Colors.Purple, Colors.Yellow],
    link: '/bess-yoga-short.html',
  },
  {
    title: 'Artemis Running Short',
    rating: '80%',
    reviews: '2 Reviews',
    price: 'As low as $45.00',
    sizes: Sizes.All,
    colors: [Colors.Black, Colors.Green, Colors.Orange],
    link: '/artemis-running-short.html',
  },
  {
    title: 'Gwen Drawstring Bike Short',
    rating: '90%',
    reviews: '2 Reviews',
    price: 'As low as $50.00',
    sizes: Sizes.All,
    colors: [Colors.Blue, Colors.Grey, Colors.Orange],
    link: '/gwen-drawstring-bike-short.html',
  },
  {
    title: 'Maxima Drawstring Short',
    rating: '80%',
    reviews: '3 Reviews',
    price: 'As low as $28.00',
    sizes: Sizes.All,
    colors: [Colors.Grey, Colors.Orange, Colors.Yellow],
    link: '/maxima-drawstring-short.html',
  },
  {
    title: 'Fiona Fitness Short',
    rating: '60%',
    reviews: '3 Reviews',
    price: 'As low as $29.00',
    sizes: Sizes.All,
    colors: [Colors.Black, Colors.Green, Colors.Red],
    link: '/fiona-fitness-short.html',
  },
  {
    title: 'Karmen Yoga Pant',
    rating: '80%',
    reviews: '2 Reviews',
    price: 'As low as $39.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Grey, Colors.White],
    link: '/karmen-yoga-pant.html',
  },
];
