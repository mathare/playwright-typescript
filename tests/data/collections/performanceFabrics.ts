import { Product } from '../products';
import { CollectionExpectedText } from './shared';
import * as MenJackets from '../productCategories/menJackets';
import * as MenTanks from '../productCategories/menTanks';
import * as WomenJackets from '../productCategories/womenJackets';
import * as WomenTees from '../productCategories/womenTees';
import * as WomenShorts from '../productCategories/womenShorts';

export const Url = '/collections/performance-new.html';

export const ExpectedText: CollectionExpectedText = {
  Breadcrumbs: 'Home  Performance Sportswear New',
  Title: 'Performance Sportswear New',
  PromoBlocks: ["You're the best\nMake a strong statement with Luma Performance sportswear"],
  ProductsGrid: {},
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
  },
  PromoBlocks: [''],
};

export const Products: Product[] = [
  MenJackets.Products[9],
  MenTanks.Products[8],
  WomenJackets.Products[8],
  WomenTees.Products[7],
  WomenShorts.Products[9],
];
