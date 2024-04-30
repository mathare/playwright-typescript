import { TopnavLvl0 } from './pageHeader';
import * as WhatsNew from './collections/whatsNew';
import * as Women from './collections/women';
import * as Men from './collections/men';

export const Collections = {
  ...TopnavLvl0,
};

export const ExpectedText = {
  Men: { ...Men.ExpectedText },
  WhatsNew: { ...WhatsNew.ExpectedText },
  Women: { ...Women.ExpectedText },
};

export const Links = {
  Men: { ...Men.Links },
  WhatsNew: { ...WhatsNew.Links },
  Women: { ...Women.Links },
};

export const Products = {
  Men: [...Men.Products],
  WhatsNew: [...WhatsNew.Products],
  Women: [...Women.Products],
};
