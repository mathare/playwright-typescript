import { Links as HeaderLinks } from '../pageHeader';
import { FilterOptions, ProductCategoryExpectedText } from './shared';
import { Products as Hoodies } from './menHoodies';
import { Products as Jackets } from './menJackets';
import { Products as Tanks } from './menTanks';
import { Products as Tees } from './menTees';
import { Product } from '../products';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Men  Tops',
  Title: 'Tops',
  Filters: ['CATEGORY', ...FilterOptions],
  ProductCount: 'Items 1-12 of 48',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Men: HeaderLinks.Topnav.Men,
  },
};

export const Products: Product[] = [...Tanks, ...Tees, ...Jackets, ...Hoodies];
