import { Links as HeaderLinks } from './pageHeader';
import { ExpectedText as WomenBottomsText, Links as WomenBottomsLinks } from './productCategories/womenBottoms';
import { ExpectedText as WomenHoodiesText, Links as WomenHoodiesLinks } from './productCategories/womenHoodies';
import { ExpectedText as WomenJacketsText, Links as WomenJacketsLinks } from './productCategories/womenJackets';
import { ExpectedText as WomenPantsText, Links as WomenPantsLinks } from './productCategories/womenPants';
import { ExpectedText as WomenShortsText, Links as WomenShortsLinks } from './productCategories/womenShorts';
import { ExpectedText as WomenTanksText, Links as WomenTanksLinks } from './productCategories/womenTanks';
import { ExpectedText as WomenTeesText, Links as WomenTeesLinks } from './productCategories/womenTees';
import { ExpectedText as WomenTopsText, Links as WomenTopsLinks } from './productCategories/womenTops';

export const ProductCategories = {
  Women: { ...HeaderLinks.Topnav.WomenSubMenu },
  // Men: { ...HeaderLinks.Topnav.MenSubMenu },
  // Gear: { ...HeaderLinks.Topnav.GearSubMenu },
  // Training: { ...HeaderLinks.Topnav.TrainingSubMenu },
};

export const ExpectedText = {
  FiltersTitle: 'Shopping Options',
  WomenBottoms: { ...WomenBottomsText },
  WomenBrasTanks: { ...WomenTanksText },
  WomenHoodiesSweatshirts: { ...WomenHoodiesText },
  WomenJackets: { ...WomenJacketsText },
  WomenPants: { ...WomenPantsText },
  WomenShorts: { ...WomenShortsText },
  WomenTees: { ...WomenTeesText },
  WomenTops: { ...WomenTopsText },
};

export const Links = {
  WomenBottoms: { ...WomenBottomsLinks },
  WomenBrasTanks: { ...WomenTanksLinks },
  WomenHoodiesSweatshirts: { ...WomenHoodiesLinks },
  WomenJackets: { ...WomenJacketsLinks },
  WomenPants: { ...WomenPantsLinks },
  WomenShorts: { ...WomenShortsLinks },
  WomenTees: { ...WomenTeesLinks },
  WomenTops: { ...WomenTopsLinks },
};
