import { Product } from './products';
import * as RadiantTee from './products/radiantTee';

export const Products = { RadiantTee: { ...RadiantTee.ProductDetails } };