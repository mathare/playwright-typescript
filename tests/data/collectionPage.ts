import { TopnavLvl0 } from './pageHeader';
import * as WhatsNew from './collections/whatsNew';
import * as Women from './collections/women';

export const Collections = {
  ...TopnavLvl0,
};

export const ExpectedText = {
  WhatsNew: { ...WhatsNew.ExpectedText },
  Women: { ...Women.ExpectedText },
};

export const Links = {
  WhatsNew: { ...WhatsNew.Links },
  Women: { ...Women.Links },
};

export const Products = {
  WhatsNew: [...WhatsNew.Products],
  Women: [...Women.Products],
};
