import { Links } from './pageHeader';
import { ExpectedText as WomenBottomsText } from './productCategories/WomenBottoms';
import { ExpectedText as WomenHoodiesText } from './productCategories/WomenHoodies';
import { ExpectedText as WomenJacketsText } from './productCategories/WomenJackets';
import { ExpectedText as WomenPantsText } from './productCategories/WomenPants';
import { ExpectedText as WomenShortsText } from './productCategories/WomenShorts';
import { ExpectedText as WomenTanksText } from './productCategories/WomenTanks';
import { ExpectedText as WomenTeesText } from './productCategories/WomenTees';
import { ExpectedText as WomenTopsText } from './productCategories/WomenTops';

export const ProductCategories = {
  Women: { ...Links.Topnav.WomenSubMenu },
  // Men: { ...Links.Topnav.MenSubMenu },
  // Gear: { ...Links.Topnav.GearSubMenu },
  // Training: { ...Links.Topnav.TrainingSubMenu },
};

export type ProductCategoryExpectedText = {
  Breadcrumbs: string;
  Title: string;
  Filters: string[];
};

export const ExpectedText = {
  FiltersTitle: 'Shopping Options',
  WomenBottoms: { ...WomenBottomsText },
  WomenHoodies: { ...WomenHoodiesText },
  WomenJackets: { ...WomenJacketsText },
  WomenPants: { ...WomenPantsText },
  WomenShorts: { ...WomenShortsText },
  WomenTanks: { ...WomenTanksText },
  WomenTees: { ...WomenTeesText },
  WomenTops: { ...WomenTopsText },
};
