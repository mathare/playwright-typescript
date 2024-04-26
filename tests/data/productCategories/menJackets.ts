import { Links as HeaderLinks } from '../pageHeader';
import { Colors, Product, Sizes } from '../products';
import { FilterOptions, ProductCategoryExpectedText } from './shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Men  Tops  Jackets',
  Title: 'Jackets',
  Filters: [...FilterOptions],
  ProductCount: '11 Items',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Men: HeaderLinks.Topnav.Men,
    Tops: HeaderLinks.Topnav.MenSubMenu.Tops,
  },
};

export const Products: Product[] = [
  {
    title: 'Proteus Fitness Jackshirt',
    price: 'As low as $45.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Orange],
    link: '/proteus-fitness-jackshirt.html',
  },
  {
    title: 'Montana Wind Jacket',
    rating: '53%',
    reviews: '3 Reviews',
    price: 'As low as $49.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Green, Colors.Red],
    link: '/montana-wind-jacket.html',
  },
  {
    title: 'Jupiter All-Weather Trainer',
    rating: '80%',
    reviews: '3 Reviews',
    price: 'As low as $56.99',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Purple],
    link: '/jupiter-all-weather-trainer.html',
  },
  {
    title: 'Typhon Performance Fleece-lined Jacket',
    price: 'As low as $60.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Green, Colors.Red],
    link: '/typhon-performance-fleece-lined-jacket.html',
  },
  {
    title: 'Mars HeatTech™ Pullover',
    rating: '70%',
    reviews: '2 Reviews',
    price: 'As low as $66.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Orange, Colors.Red],
    link: '/mars-heattech-trade-pullover.html',
  },
  {
    title: 'Taurus Elements Shell',
    rating: '70%',
    reviews: '2 Reviews',
    price: 'As low as $65.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.White, Colors.Yellow],
    link: '/taurus-elements-shell.html',
  },
  {
    title: 'Lando Gym Jacket',
    rating: '67%',
    reviews: '3 Reviews',
    price: 'As low as $99.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Grey, Colors.Green],
    link: '/lando-gym-jacket.html',
  },
  {
    title: 'Orion Two-Tone Fitted Jacket',
    rating: '50%',
    reviews: '2 Reviews',
    price: 'As low as $72.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Red, Colors.Yellow],
    link: '/orion-two-tone-fitted-jacket.html',
  },
  {
    title: 'Kenobi Trail Jacket',
    rating: '93%',
    reviews: '3 Reviews',
    price: 'As low as $47.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Purple],
    link: '/kenobi-trail-jacket.html',
  },
  {
    title: 'Hyperion Elements Jacket',
    rating: '90%',
    reviews: '2 Reviews',
    price: 'As low as $51.00',
    sizes: Sizes,
    colors: [Colors.Green, Colors.Orange, Colors.Red],
    link: '/hyperion-elements-jacket.html',
  },
  {
    title: 'Beaumont Summit Kit',
    rating: '90%',
    reviews: '2 Reviews',
    price: 'As low as $42.00',
    sizes: Sizes,
    colors: [Colors.Orange, Colors.Red, Colors.Yellow],
    link: '/beaumont-summit-kit.html',
  },
];
