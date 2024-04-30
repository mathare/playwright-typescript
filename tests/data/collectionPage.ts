import { TopnavLvl0 } from './pageHeader';
import * as Women from './collections/women';

export const Collections = {
  ...TopnavLvl0,
};

export const ExpectedText = {
  Women: { ...Women.ExpectedText },
};

export const Links = {
  Women: { ...Women.Links },
};

export const Products = {
  Women: [...Women.Products],
};