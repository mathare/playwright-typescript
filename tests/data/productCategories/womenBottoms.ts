import { Links as HeaderLinks } from '../pageHeader';
import { FilterOptions, ProductCategoryExpectedText } from './shared';
import { Products as Pants } from './womenPants';
import { Products as Shorts } from './womenShorts';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Women  Bottoms',
  Title: 'Bottoms',
  Filters: ['CATEGORY', ...FilterOptions],
  ProductCount: 'Items 1-12 of 25',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Women: HeaderLinks.Topnav.Women,
  },
};

export const Products = [...Shorts, ...Pants];
