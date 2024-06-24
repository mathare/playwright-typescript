import { Product } from '../products';
import { CollectionExpectedText } from './shared';
import { ProductDetails as MenJackets } from '../productCategories/menJackets';
import { ProductDetails as MenTanks } from '../productCategories/menTanks';
import { ProductDetails as WomenJackets } from '../productCategories/womenJackets';
import { ProductDetails as WomenTees } from '../productCategories/womenTees';
import { ProductDetails as WomenShorts } from '../productCategories/womenShorts';

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
  MenJackets.Hyperion,
  MenTanks.Helios,
  WomenJackets.Ingrid,
  WomenTees.Juliana,
  WomenShorts.Gwen,
];
