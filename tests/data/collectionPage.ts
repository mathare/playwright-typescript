import { TopnavLvl0 } from './pageHeader';
import * as WhatsNew from './collections/whatsNew';
import * as Women from './collections/women';
import * as Men from './collections/men';
import * as Gear from './collections/gear';
import * as Training from './collections/training';
import * as Sale from './collections/sale';

export const Collections = {
  ...TopnavLvl0,
};

export const ExpectedText = {
  Gear: { ...Gear.ExpectedText },
  Men: { ...Men.ExpectedText },
  Sale: { ...Sale.ExpectedText },
  Training: { ...Training.ExpectedText },
  WhatsNew: { ...WhatsNew.ExpectedText },
  Women: { ...Women.ExpectedText },
};

export const Links = {
  Gear: { ...Gear.Links },
  Men: { ...Men.Links },
  Sale: { ...Sale.Links },
  Training: { ...Training.Links },
  WhatsNew: { ...WhatsNew.Links },
  Women: { ...Women.Links },
};

export const Products = {
  Gear: [...Gear.Products],
  Men: [...Men.Products],
  Sale: [...Sale.Products],
  Training: [...Training.Products],
  WhatsNew: [...WhatsNew.Products],
  Women: [...Women.Products],
};
