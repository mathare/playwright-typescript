import { Links as HeaderLinks } from '../pageHeader';
import { Colors, Product, Sizes } from '../products';
import { FilterOptions, ProductCategoryExpectedText } from './shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Men  Tops  Tanks',
  Title: 'Tanks',
  Filters: [...FilterOptions],
  ProductCount: '12 Items',
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
    title: 'Cassius Sparring Tank',
    price: 'As low as $18.00',
    sizes: Sizes,
    colors: [Colors.Blue],
    link: '/cassius-sparring-tank.html',
  },
  {
    title: 'Atlas Fitness Tank',
    price: 'As low as $18.00',
    sizes: Sizes,
    colors: [Colors.Blue],
    link: '/atlas-fitness-tank.html',
  },
  {
    title: 'Tiberius Gym Tank',
    price: 'As low as $18.00',
    sizes: Sizes,
    colors: [Colors.Yellow],
    link: '/tiberius-gym-tank.html',
  },
  {
    title: 'Sinbad Fitness Tank',
    price: 'As low as $29.00',
    sizes: Sizes,
    colors: [Colors.Blue],
    link: '/sinbad-fitness-tank.html',
  },
  {
    title: 'Sparta Gym Tank',
    price: 'As low as $29.00',
    sizes: Sizes,
    colors: [Colors.Green],
    link: '/sparta-gym-tank.html',
  },
  {
    title: 'Argus All-Weather Tank',
    price: 'As low as $22.00',
    sizes: Sizes,
    colors: [Colors.Grey],
    link: '/argus-all-weather-tank.html',
  },
  {
    title: 'Vulcan Weightlifting Tank',
    price: 'As low as $28.00',
    sizes: Sizes,
    colors: [Colors.Black],
    link: '/vulcan-weightlifting-tank.html',
  },
  {
    title: 'Rocco Gym Tank',
    price: 'As low as $24.00',
    sizes: Sizes,
    colors: [Colors.Blue],
    link: '/rocco-gym-tank.html',
  },
  {
    title: 'Helios Endurance Tank',
    rating: '70%',
    reviews: '4 Reviews',
    price: 'As low as $32.00',
    sizes: Sizes,
    colors: [Colors.Blue],
    link: '/helios-endurance-tank.html',
  },
  {
    title: 'Primo Endurance Tank',
    rating: '53%',
    reviews: '3 Reviews',
    price: 'As low as $29.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Red, Colors.Yellow],
    link: '/primo-endurance-tank.html',
  },
  {
    title: 'Tristan Endurance Tank',
    rating: '80%',
    reviews: '3 Reviews',
    price: 'As low as $29.00',
    sizes: Sizes,
    colors: [Colors.Grey, Colors.Red, Colors.White],
    link: '/tristan-endurance-tank.html',
  },
  {
    title: 'Erikssen CoolTech™ Fitness Tank',
    rating: '55%',
    reviews: '4 Reviews',
    price: 'As low as $29.00',
    sizes: Sizes,
    colors: [Colors.Grey, Colors.Orange, Colors.Red],
    link: '/erikssen-cooltech-trade-fitness-tank.html',
  },
];
