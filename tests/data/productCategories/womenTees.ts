import { Links as HeaderLinks } from '../pageHeader';
import { Colors, Sizes } from '../products';
import { FilterOptions, ProductCategoryExpectedText } from './shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Women  Tops  Tees',
  Title: 'Tees',
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
    title: 'Desiree Fitness Tee',
    rating: '73%',
    reviews: '3 Reviews',
    price: 'As low as $24.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Orange, Colors.Yellow],
    link: '/desiree-fitness-tee.html',
  },
  {
    title: 'Gwyn Endurance Tee',
    rating: '87%',
    reviews: '3 Reviews',
    price: 'As low as $24.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Green, Colors.Yellow],
    link: '/gwyn-endurance-tee.html',
  },
  {
    title: 'Radiant Tee',
    rating: '60%',
    reviews: '3 Reviews',
    price: 'As low as $22.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Orange, Colors.Purple],
    link: '/radiant-tee.html',
    images: {
      default: '/w/s/ws12-orange_main_2.jpg',
      colors: ['/w/s/ws12-blue_main_1.jpg', '/w/s/ws12-orange_main_1.jpg', '/w/s/ws12-purple_main_1.jpg'],
      // The tee has 2 different images for the size options
      sizes: [
        '/w/s/ws12-blue_main_1.jpg',
        '/w/s/ws12-blue_main_1.jpg',
        '/w/s/ws12-blue_main_2.jpg',
        '/w/s/ws12-blue_main_2.jpg',
        '/w/s/ws12-blue_main_2.jpg',
      ],
    },
  },
  {
    title: 'Diva Gym Tee',
    rating: '87%',
    reviews: '3 Reviews',
    price: 'As low as $32.00',
    sizes: Sizes,
    colors: [Colors.Green, Colors.Orange, Colors.Yellow],
    link: '/diva-gym-tee.html',
  },
  {
    title: 'Karissa V-Neck Tee',
    rating: '80%',
    reviews: '3 Reviews',
    price: 'As low as $32.00',
    sizes: Sizes,
    colors: [Colors.Green, Colors.Red, Colors.Yellow],
    link: '/karissa-v-neck-tee.html',
  },
  {
    title: 'Tiffany Fitness Tee',
    rating: '73%',
    reviews: '3 Reviews',
    price: 'As low as $28.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Red, Colors.White],
    link: '/tiffany-fitness-tee.html',
  },
  {
    title: 'Minerva LumaTech™ V-Tee',
    rating: '47%',
    reviews: '3 Reviews',
    price: 'As low as $32.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Red],
    link: '/minerva-lumatech-trade-v-tee.html',
  },
  {
    title: 'Juliana Short-Sleeve Tee',
    rating: '60%',
    reviews: '2 Reviews',
    price: 'As low as $42.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.White, Colors.Yellow],
    link: '/juliana-short-sleeve-tee.html',
  },
  {
    title: 'Elisa EverCool™ Tee',
    price: 'As low as $29.00',
    sizes: Sizes,
    colors: [Colors.Grey, Colors.Purple, Colors.Red],
    link: '/elisa-evercool-trade-tee.html',
  },
  {
    title: 'Layla Tee',
    rating: '60%',
    reviews: '2 Reviews',
    price: 'As low as $29.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Red],
    link: '/layla-tee.html',
  },
  {
    title: 'Iris Workout Top',
    rating: '60%',
    reviews: '4 Reviews',
    price: 'As low as $29.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Red],
    link: '/iris-workout-top.html',
  },
  {
    title: 'Gabrielle Micro Sleeve Top',
    rating: '73%',
    reviews: '3 Reviews',
    price: 'As low as $28.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Red],
    link: '/gabrielle-micro-sleeve-top.html',
  },
];
