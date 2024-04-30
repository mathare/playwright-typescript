import { TopnavLvl0 } from './pageHeader';
import * as WhatsNew from './collections/whatsNew';
import * as Women from './collections/women';
import * as Men from './collections/men';
import * as Gear from './collections/gear';

export const Collections = {
  ...TopnavLvl0,
};

export const ExpectedText = {
  Gear: { ...Gear.ExpectedText },
  Men: { ...Men.ExpectedText },
  WhatsNew: { ...WhatsNew.ExpectedText },
  Women: { ...Women.ExpectedText },
};

export const Links = {
  Gear: { ...Gear.Links },
  Men: { ...Men.Links },
  WhatsNew: { ...WhatsNew.Links },
  Women: { ...Women.Links },
};

export const Products = {
  Gear: [...Gear.Products],
  Men: [...Men.Products],
  WhatsNew: [...WhatsNew.Products],
  Women: [...Women.Products],
};
