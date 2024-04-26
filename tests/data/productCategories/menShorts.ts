import { Links as HeaderLinks } from '../pageHeader';
import { Colors, Product } from '../products';
import { FilterOptions, ProductCategoryExpectedText } from './shared';

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
