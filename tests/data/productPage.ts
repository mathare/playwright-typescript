import { ProductDetails as WomenTees } from './productCategories/womenTees';
import { Product } from './products';

export const Products: Record<string, Product> = {
  RadiantTee: WomenTees.Radiant,
};

export const SimilarProducts: Record<string, Product[]> = {
  RadiantTee: [
    WomenTees.Gwyn,
    WomenTees.Gabrielle,
    WomenTees.Iris,
    WomenTees.Layla,
    WomenTees.Desiree,
    WomenTees.Elisa,
    WomenTees.Juliana,
    WomenTees.Minerva,
    WomenTees.Tiffany,
    WomenTees.Karissa,
    WomenTees.Diva,
  ],
};
