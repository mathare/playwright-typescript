import { Product } from '../products';
import { CollectionExpectedText } from './shared';
import * as WomenHoodies from '../productCategories/womenHoodies';
import * as WomenJackets from '../productCategories/womenJackets';
import * as MenTees from '../productCategories/menTees';
import { Links as HeaderLinks } from '../pageHeader';

export const ExpectedText: CollectionExpectedText = {
  Breadcrumbs: "Home  What's New",
  Title: "What's New",
  PromoBlocks: [
    'New Luma Yoga Collection\nThe very latest yoga styles plus twists on timeless classics\nShop New Yoga',
    'Whatever day brings\nLuma Cocona™ for breathability, CoolTech™ for wicking, or a blend of both.\nPerformance Fabrics',
    'A sense of renewal\nEnjoy comfort of body and mind with Luma eco-friendly choices\nShop Eco Friendly ',
  ],
  ProductsGrid: {
    Title: "Luma's Latest",
    Subtitle: 'Just in time for the new season!',
  },
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
  },
  PromoBlocks: ['/collections/yoga-new.html', '/collections/performance-new.html', '/collections/eco-new.html'],
};

export const Products: Product[] = [
  WomenHoodies.Products[5],
  MenTees.Products[11],
  WomenJackets.Products[11],
  MenTees.Products[5],
];
