import { Product } from '../products';
import { CollectionExpectedText } from './shared';
import { ProductDetails as MenHoodies } from '../productCategories/menHoodies';
import { ProductDetails as WomenTees } from '../productCategories/womenTees';
import { ProductDetails as WomenShorts } from '../productCategories/womenShorts';
import { ProductDetails as WomenJackets } from '../productCategories/womenJackets';

export const Url = '/collections/eco-new.html';

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
  MenHoodies.Bruno,
  WomenTees.Layla,
  WomenShorts.Fiona,
  WomenJackets.Stellar,
  WomenTees.Elisa,
];
