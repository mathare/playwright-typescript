import { Links as HeaderLinks } from '../pageHeader';
import { Colors, Sizes } from '../products';
import { FilterOptions, ProductCategoryExpectedText } from './shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Men  Tops  Tees',
  Title: 'Tees',
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

export const Products = [
  {
    title: 'Strike Endurance Tee',
    rating: '65%',
    reviews: '4 Reviews',
    price: 'As low as $39.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Red],
    link: '/strike-endurance-tee.html',
  },
  {
    title: 'Deion Long-Sleeve EverCool™ Tee',
    rating: '67%',
    reviews: '3 Reviews',
    price: 'As low as $39.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Green, Colors.White],
    link: '/deion-long-sleeve-evercool-trade-tee.html',
  },
  {
    title: 'Logan HeatTec® Tee',
    rating: '60%',
    reviews: '3 Reviews',
    price: 'As low as $24.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Red],
    link: '/logan-heattec-reg-tee.html',
  },
  {
    title: 'Ryker LumaTech™ Tee (V-neck)',
    rating: '90%',
    reviews: '2 Reviews',
    price: 'As low as $28.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Grey],
    link: '/ryker-lumatech-trade-v-neck-tee.html',
  },
  {
    title: 'Aero Daily Fitness Tee',
    rating: '80%',
    reviews: '3 Reviews',
    price: 'As low as $24.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Brown, Colors.Yellow],
    link: '/aero-daily-fitness-tee.html',
  },
  {
    title: 'Zoltan Gym Tee',
    rating: '70%',
    reviews: '2 Reviews',
    price: 'As low as $29.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Yellow],
    link: '/zoltan-gym-tee.html',
  },
  {
    title: 'Balboa Persistence Tee',
    rating: '60%',
    reviews: '2 Reviews',
    price: 'As low as $29.00',
    sizes: Sizes,
    colors: [Colors.Grey, Colors.Green, Colors.Orange],
    link: '/balboa-persistence-tee.html',
  },
  {
    title: 'Atomic Endurance Running Tee (Crew-Neck)',
    rating: '53%',
    reviews: '3 Reviews',
    price: 'As low as $29.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Red],
    link: '/atomic-endurance-running-tee-crew-neck.html',
  },
  {
    title: 'Atomic Endurance Running Tee (V-neck)',
    rating: '80%',
    reviews: '3 Reviews',
    price: 'As low as $28.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Yellow],
    link: '/atomic-endurance-running-tee-v-neck.html',
  },
  {
    title: 'Ryker LumaTech™ Tee (Crew-neck)',
    rating: '73%',
    reviews: '3 Reviews',
    price: 'As low as $32.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Red],
    link: '/ryker-lumatech-trade-crew-neck-tee.html',
  },
  {
    title: 'Helios EverCool™ Tee',
    rating: '80%',
    reviews: '3 Reviews',
    price: 'As low as $24.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Pink],
    link: '/helios-evercool-trade-tee.html',
  },
  {
    title: 'Gobi HeatTec® Tee',
    rating: '67%',
    reviews: '3 Reviews',
    price: 'As low as $29.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Orange, Colors.Red],
    link: '/gobi-heattec-reg-tee.html',
  },
];
