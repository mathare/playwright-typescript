import { Links } from './pageHeader';
import { ExpectedText as WomenTopsText } from './productCategories/WomenTops';

export const ProductCategories = {
  Women: { ...Links.Topnav.WomenSubMenu },
  Men: { ...Links.Topnav.MenSubMenu },
  Gear: { ...Links.Topnav.GearSubMenu },
  Training: { ...Links.Topnav.TrainingSubMenu },
};

export type ProductCategoryExpectedText = {
  Breadcrumbs: string;
  Title: string;
};

export const ExpectedText = {
  FiltersTitle: 'Shopping Options',
  WomenTops: { ...WomenTopsText },
};
