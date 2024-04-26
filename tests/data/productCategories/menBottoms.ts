import { Links as HeaderLinks } from '../pageHeader';
import { FilterOptions, ProductCategoryExpectedText } from './shared';
import { Products as Pants } from './menPants';
import { Products as Shorts } from './menShorts';
import { Product } from '../products';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Men  Bottoms',
  Title: 'Bottoms',
  Filters: ['CATEGORY', ...FilterOptions],
  ProductCount: 'Items 1-12 of 24',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Men: HeaderLinks.Topnav.Men,
  },
};
export const Products: Product[]  = [...Shorts, ...Pants];
