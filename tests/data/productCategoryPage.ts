import { Links as HeaderLinks } from './pageHeader';
import * as WomenBottoms from './productCategories/womenBottoms';
import * as WomenHoodies from './productCategories/womenHoodies';
import * as WomenJackets from './productCategories/womenJackets';
import * as WomenPants from './productCategories/womenPants';
import * as WomenShorts from './productCategories/womenShorts';
import * as WomenTanks from './productCategories/womenTanks';
import * as WomenTees from './productCategories/womenTees';
import * as WomenTops from './productCategories/womenTops';

export const ProductCategories = {
  Women: { ...HeaderLinks.Topnav.WomenSubMenu },
  // Men: { ...HeaderLinks.Topnav.MenSubMenu },
  // Gear: { ...HeaderLinks.Topnav.GearSubMenu },
  // Training: { ...HeaderLinks.Topnav.TrainingSubMenu },
};

export const ExpectedText = {
  FiltersTitle: 'Shopping Options',
  WomenBottoms: { ...WomenBottoms.ExpectedText },
  WomenBrasTanks: { ...WomenTanks.ExpectedText },
  WomenHoodiesSweatshirts: { ...WomenHoodies.ExpectedText },
  WomenJackets: { ...WomenJackets.ExpectedText },
  WomenPants: { ...WomenPants.ExpectedText },
  WomenShorts: { ...WomenShorts.ExpectedText },
  WomenTees: { ...WomenTees.ExpectedText },
  WomenTops: { ...WomenTops.ExpectedText },
};

export const Links = {
  WomenBottoms: { ...WomenBottoms.Links },
  WomenBrasTanks: { ...WomenTanks.Links },
  WomenHoodiesSweatshirts: { ...WomenHoodies.Links },
  WomenJackets: { ...WomenJackets.Links },
  WomenPants: { ...WomenPants.Links },
  WomenShorts: { ...WomenShorts.Links },
  WomenTees: { ...WomenTees.Links },
  WomenTops: { ...WomenTops.Links },
};
