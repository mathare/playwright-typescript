import { Links as HeaderLinks } from '../pageHeader';
import { FilterOptions, ProductCategoryExpectedText } from './Shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Women  Tops',
  Title: 'Tops',
  Filters: ['CATEGORY', ...FilterOptions],
  ProductCount: 'Items 1-12 of 50',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Women: HeaderLinks.Topnav.Women,
  },
};
