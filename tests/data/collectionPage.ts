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
  SidebarBlocks: [
    'Compare Products\nYou have no items to compare.',
    'My Wish List\nYou have no items in your wish list.',
  ],
};

export const Links = {
  Gear: { ...Gear.Links },
  Men: { ...Men.Links },
  Sale: { ...Sale.Links },
  Training: { ...Training.Links },
  WhatsNew: { ...WhatsNew.Links },
  Women: { ...Women.Links },
};

export const ShoppingOptions = {
  Gear: { ...Gear.Options },
  Men: { ...Men.Options },
  Training: { ...Training.Options },
  Women: { ...Women.Options },
};

export const Filters = {
  Gear: [...Gear.Filters],
  Men: [...Men.Filters],
  Sale: [...Sale.Filters],
  Training: [...Training.Filters],
  WhatsNew: [...WhatsNew.Filters],
  Women: [...Women.Filters],
};

export const Products = {
  Gear: [...Gear.Products],
  Men: [...Men.Products],
  Sale: [...Sale.Products],
  Training: [...Training.Products],
  // The products displayed on the What's New page keep changing so are not included here
  Women: [...Women.Products],
};
