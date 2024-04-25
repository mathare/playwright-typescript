import { Links as HeaderLinks } from '../pageHeader';
import { Colors } from '../products';
import { FilterOptions, ProductCategoryExpectedText } from './shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Women  Bottoms  Pants',
  Title: 'Pants',
  Filters: [...FilterOptions],
  ProductCount: 'Items 1-12 of 13',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Women: HeaderLinks.Topnav.Women,
    Bottoms: HeaderLinks.Topnav.WomenSubMenu.Bottoms,
  },
};

const Sizes = ['28', '29'];

export const Products = [
  {
    title: 'Portia Capri',
    price: 'As low as $49.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Orange],
    link: '/portia-capri.html',
  },
  {
    title: 'Deirdre Relaxed-Fit Capri',
    price: 'As low as $63.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Grey, Colors.Green],
    link: '/deidre-relaxed-fit-capri.html',
  },
  {
    title: 'Sylvia Capri',
    price: 'As low as $42.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Red],
    link: '/sylvia-capri.html',
  },
  {
    title: 'Daria Bikram Pant',
    price: 'As low as $51.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Grey, Colors.White],
    link: '/daria-bikram-pant.html',
  },
  {
    title: 'Carina Basic Capri',
    price: 'As low as $51.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Pink],
    link: '/carina-basic-capri.html',
  },
  {
    title: 'Bardot Capri',
    price: 'As low as $48.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Green, Colors.Red],
    link: '/bardot-capri.html',
  },
  {
    title: 'Aeon Capri',
    price: 'As low as $48.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Orange],
    link: '/aeon-capri.html',
  },
  {
    title: 'Diana Tights',
    rating: '67%',
    reviews: '3 Reviews',
    price: 'As low as $59.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Orange],
    link: '/diana-tights.html',
  },
  {
    title: 'Sahara Leggings',
    rating: '60%',
    reviews: '2 Reviews',
    price: 'As low as $75.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Grey, Colors.Red],
    link: '/sahara-leggings.html',
  },
  {
    title: 'Cora Parachute Pant',
    rating: '80%',
    reviews: '4 Reviews',
    price: 'As low as $75.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.White],
    link: '/cora-parachute-pant.html',
  },
  {
    title: 'Ida Workout Parachute Pant',
    rating: '67%',
    reviews: '3 Reviews',
    price: 'As low as $48.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Pink],
    link: '/ida-workout-parachute-pant.html',
  },
  {
    title: 'Emma Leggings',
    rating: '93%',
    reviews: '3 Reviews',
    price: 'As low as $42.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Pink, Colors.Red],
    link: '/emma-leggings.html',
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
