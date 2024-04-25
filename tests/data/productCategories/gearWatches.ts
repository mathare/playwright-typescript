import { Links as HeaderLinks } from '../pageHeader';
import { ProductCategoryExpectedText } from './shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Gear  Watches',
  Title: 'Watches',
  Filters: ['CATEGORY', 'PRICE', 'ACTIVITY', 'MATERIAL', 'GENDER', 'NEW', 'SALE'],
  ProductCount: '9 Items',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Gear: HeaderLinks.Topnav.Gear,
  },
};

export const Products = [
  {
    title: 'Didi Sport Watch',
    rating: '70%',
    reviews: '2 Reviews',
    price: '$92.00',
    link: '/didi-sport-watch.html',
  },
  {
    title: 'Clamber Watch',
    rating: '53%',
    reviews: '3 Reviews',
    price: '$54.00',
    link: '/clamber-watch.html',
  },
  {
    title: 'Bolo Sport Watch',
    rating: '67%',
    reviews: '3 Reviews',
    price: '$49.00',
    link: '/bolo-sport-watch.html',
  },
  {
    title: 'Luma Analog Watch',
    rating: '80%',
    reviews: '2 Reviews',
    price: '$43.00',
    link: '/luma-analog-watch.html',
  },
  {
    title: 'Dash Digital Watch',
    rating: '73%',
    reviews: '3 Reviews',
    price: '$92.00',
    link: '/dash-digital-watch.html',
  },
  {
    title: 'Cruise Dual Analog Watch',
    rating: '65%',
    reviews: '4 Reviews',
    price: '$55.00',
    link: '/cruise-dual-analog-watch.html',
  },
  {
    title: 'Summit Watch',
    rating: '47%',
    reviews: '3 Reviews',
    price: '$54.00',
    link: '/summit-watch.html',
  },
  {
    title: 'Endurance Watch',
    rating: '87%',
    reviews: '3 Reviews',
    price: '$49.00',
    link: '/endurance-watch.html',
  },
  {
    title: 'Aim Analog Watch',
    rating: '80%',
    reviews: '2 Reviews',
    price: '$45.00',
    link: '/aim-analog-watch.html',
  },
];
