import { Links as HeaderLinks } from '../pageHeader';
import { FilterOptions, ProductCategoryExpectedText } from ./shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Women  Bottoms  Pants',
  Title: 'Pants',
  Filters: [...FilterOptions],
  ProductCount: 'Items 1-12 of 13',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Women: HeaderLinks.Topnav.Women,
    Bottoms: HeaderLinks.Topnav.WomenSubMenu.Bottoms,
  },
};
