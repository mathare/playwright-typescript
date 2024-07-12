import { ProductDetails as MenShorts } from './productCategories/menShorts';
import { ProductDetails as MenTanks } from './productCategories/menTanks';
import { ProductDetails as MenTees } from './productCategories/menTees';
import { ProductDetails as WomenShorts } from './productCategories/womenShorts';
import { ProductDetails as WomenTanks } from './productCategories/womenTanks';
import { ProductDetails as WomenTees } from './productCategories/womenTees';
import { Product } from './products';

export const ExpectedText = {
  Quantity: {
    BelowMin: 'Please enter a quantity greater than 0.',
    AboveMax: 'The maximum you may purchase is 10000.',
  },
  RequiredField: 'This is a required field.',
};

export const Products: Record<string, Product> = {
  RadiantTee: WomenTees.Radiant,
  BreatheEasyTank: WomenTanks.BreatheEasy,
  ArgusTank: MenTanks.Argus,
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
  BreatheEasyTank: [WomenShorts.Mimi, WomenTees.Gabrielle, WomenShorts.Ana, WomenTees.Juliana],
  ArgusTank: [MenShorts.Apollo, MenShorts.Pierce, MenTees.AtomicCrew, MenTees.Gobi],
};
