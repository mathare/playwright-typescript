import { Links as HeaderLinks } from '../pageHeader';
import { Colors, Sizes } from '../products';
import { FilterOptions, ProductCategoryExpectedText } from './shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Men  Tops  Hoodies & Sweatshirts',
  Title: 'Hoodies & Sweatshirts',
  // The 1st filter option (Style) is not present
  Filters: [...FilterOptions.slice(1)],
  ProductCount: 'Items 1-12 of 13',
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
    title: 'Marco Lightweight Active Hoodie',
    price: 'As low as $74.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Lavender],
    link: '/marco-lightweight-active-hoodie.html',
  },
  {
    title: 'Ajax Full-Zip Sweatshirt',
    price: 'As low as $69.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Red],
    link: '/ajax-full-zip-sweatshirt.html',
  },
  {
    title: 'Grayson Crewneck Sweatshirt',
    price: 'As low as $64.00',
    sizes: Sizes,
    colors: [Colors.Orange, Colors.Red, Colors.White],
    link: '/grayson-crewneck-sweatshirt.html',
  },
  {
    title: 'Mach Street Sweatshirt',
    price: 'As low as $62.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Red],
    link: '/mach-street-sweatshirt.html',
  },
  {
    title: 'Abominable Hoodie',
    price: 'As low as $69.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Red],
    link: '/abominable-hoodie.html',
  },
  {
    title: 'Oslo Trek Hoodie',
    price: 'As low as $42.00',
    sizes: Sizes,
    colors: [Colors.Brown, Colors.Pink, Colors.Red],
    link: '/oslo-trek-hoodie.html',
  },
  {
    title: 'Hero Hoodie',
    price: 'As low as $54.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Grey, Colors.Green],
    link: '/hero-hoodie.html',
  },
  {
    title: 'Stark Fundamental Hoodie',
    price: 'As low as $42.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Pink],
    link: '/stark-fundamental-hoodie.html',
  },
  {
    title: 'Hollister Backyard Sweatshirt',
    price: 'As low as $52.00',
    sizes: Sizes,
    colors: [Colors.Green, Colors.Red, Colors.White],
    link: '/hollister-backyard-sweatshirt.html',
  },
  {
    title: 'Frankie Sweatshirt',
    price: 'As low as $60.00',
    sizes: Sizes,
    colors: [Colors.Green, Colors.White, Colors.Yellow],
    link: '/frankie-sweatshirt.html',
  },
  {
    title: 'Bruno Compete Hoodie',
    price: 'As low as $63.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Green],
    link: '/bruno-compete-hoodie.html',
  },
  {
    title: 'Teton Pullover Hoodie',
    price: 'As low as $70.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Pink, Colors.Red],
    link: '/teton-pullover-hoodie.html',
  },
  {
    title: 'Chaz Kangeroo Hoodie',
    price: 'As low as $63.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Grey, Colors.Orange],
    link: '/chaz-kangeroo-hoodie.html',
  },
];
