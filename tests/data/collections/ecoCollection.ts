import { Product } from '../products';
import { CollectionExpectedText } from './shared';
import * as MenHoodies from '../productCategories/menHoodies';
import * as WomenTees from '../productCategories/womenTees';
import * as WomenShorts from '../productCategories/womenShorts';
import * as WomenJackets from '../productCategories/womenJackets';

export const ExpectedText: CollectionExpectedText = {
  Breadcrumbs: 'Home  Eco Collection New',
  Title: 'Eco Collection New',
  PromoBlocks: ['Eco-friendly, ego-friendly\nRecycled polyester, hemp and organic cotton apperel'],
  ProductsGrid: {},
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
  },
  PromoBlocks: [''],
};

export const Products: Product[] = [
  MenHoodies.Products[10],
  WomenTees.Products[9],
  WomenShorts.Products[11],
  WomenJackets.Products[11],
  WomenTees.Products[8],
];
