import { Links as HeaderLinks } from '../pageHeader';
import { Colors } from '../products';
import { FilterOptions, ProductCategoryExpectedText } from './shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Men  Bottoms  Pants',
  Title: 'Pants',
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

export const Products = [
  {
    title: 'Cronus Yoga Pant',
    price: 'As low as $48.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Red],
    link: '/cronus-yoga-pant.html',
  },
  {
    title: 'Aether Gym Pant',
    price: 'As low as $74.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Brown, Colors.Green],
    link: '/aether-gym-pant.html',
  },
  {
    title: 'Orestes Yoga Pant',
    price: 'As low as $66.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Green],
    link: '/orestes-yoga-pant.html',
  },
  {
    title: 'Livingston All-Purpose Tight',
    price: 'As low as $75.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Red],
    link: '/livingston-all-purpose-tight.html',
  },
  {
    title: 'Zeppelin Yoga Pant',
    price: 'As low as $82.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Red],
    link: '/zeppelin-yoga-pant.html',
  },
  {
    title: 'Thorpe Track Pant',
    price: 'As low as $68.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Pink],
    link: '/thorpe-track-pant.html',
  },
  {
    title: 'Mithra Warmup Pant',
    price: 'As low as $28.00',
    sizes: Sizes,
    colors: [Colors.Grey, Colors.Green, Colors.Orange],
    link: '/mithra-warmup-pant.html',
  },
  {
    title: 'Kratos Gym Pant',
    rating: '73%',
    reviews: '3 Reviews',
    price: 'As low as $57.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Green],
    link: '/kratos-gym-pant.html',
  },
  {
    title: 'Supernova Sport Pant',
    rating: '87%',
    reviews: '3 Reviews',
    price: 'As low as $45.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Grey, Colors.Green],
    link: '/supernova-sport-pant.html',
  },
  {
    title: 'Geo Insulated Jogging Pant',
    rating: '70%',
    reviews: '2 Reviews',
    price: 'As low as $51.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Red],
    link: '/geo-insulated-jogging-pant.html',
  },
  {
    title: 'Viktor LumaTech™ Pant',
    rating: '47%',
    reviews: '3 Reviews',
    price: 'As low as $46.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Grey, Colors.Red],
    link: '/viktor-lumatech-trade-pant.html',
  },
  {
    title: 'Caesar Warm-Up Pant',
    rating: '47%',
    reviews: '3 Reviews',
    price: 'As low as $35.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Grey, Colors.Pink],
    link: '/caesar-warm-up-pant.html',
  },
];
