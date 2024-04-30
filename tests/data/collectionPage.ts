import { TopnavLvl0 } from './pageHeader';
import * as WhatsNew from './collections/whatsNew';
import * as Women from './collections/women';
import * as Men from './collections/men';
import * as Gear from './collections/gear';
import * as Training from './collections/training';

export const Collections = {
  ...TopnavLvl0,
};

export const ExpectedText = {
  Gear: { ...Gear.ExpectedText },
  Men: { ...Men.ExpectedText },
  Training: { ...Training.ExpectedText },
  WhatsNew: { ...WhatsNew.ExpectedText },
  Women: { ...Women.ExpectedText },
};

export const Links = {
  Gear: { ...Gear.Links },
  Men: { ...Men.Links },
  Training: { ...Training.Links },
  WhatsNew: { ...WhatsNew.Links },
  Women: { ...Women.Links },
};

export const Products = {
  Gear: [...Gear.Products],
  Men: [...Men.Products],
  Training: [...Training.Products],
  WhatsNew: [...WhatsNew.Products],
  Women: [...Women.Products],
};
