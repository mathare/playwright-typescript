import { Links as HeaderLinks } from '../pageHeader';
import { FilterOptions, ProductCategoryExpectedText } from './shared';
import { Products as Hoodies } from './womenHoodies';
import { Products as Jackets } from './womenJackets';
import { Products as Tanks } from './womenTanks';
import { Products as Tees } from './womenTees';

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

export const Products = [...Tanks, ...Tees, ...Jackets, ...Hoodies];
