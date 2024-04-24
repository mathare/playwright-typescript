import { Links as HeaderLinks } from '../pageHeader';
import { FilterOptions, ProductCategoryExpectedText } from './Shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Women  Bottoms  Shorts',
  Title: 'Shorts',
  Filters: [...FilterOptions],
  ProductCount: '12 Items',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Women: HeaderLinks.Topnav.Women,
    Bottoms: HeaderLinks.Topnav.WomenSubMenu.Bottoms,
  },
};
