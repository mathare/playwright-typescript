import { Links as HeaderLinks } from '../pageHeader';
import { FilterOptions, ProductCategoryExpectedText } from './Shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Women  Tops  Tees',
  Title: 'Tees',
  Filters: [...FilterOptions],
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Women: HeaderLinks.Topnav.Women,
    Tops: HeaderLinks.Topnav.WomenSubMenu.Tops,
  },
};