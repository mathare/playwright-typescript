import { Links as HeaderLinks } from './pageHeader';
import * as WomenBottoms from './productCategories/womenBottoms';
import * as WomenHoodies from './productCategories/womenHoodies';
import * as WomenJackets from './productCategories/womenJackets';
import * as WomenPants from './productCategories/womenPants';
import * as WomenShorts from './productCategories/womenShorts';
import * as WomenTanks from './productCategories/womenTanks';
import * as WomenTees from './productCategories/womenTees';
import * as WomenTops from './productCategories/womenTops';
import * as MenBottoms from './productCategories/menBottoms';
import * as MenHoodies from './productCategories/menHoodies';
import * as MenJackets from './productCategories/menJackets';
import * as MenPants from './productCategories/menPants';
import * as MenShorts from './productCategories/menShorts';
import * as MenTanks from './productCategories/menTanks';
import * as MenTees from './productCategories/menTees';
import * as MenTops from './productCategories/menTops';
import * as GearBags from './productCategories/gearBags';
import * as GearFitnessEquipment from './productCategories/gearFitnessEquipment';
import * as GearWatches from './productCategories/gearWatches';

export function FilterCategoryName(filterCategory: string): string {
  return filterCategory
    .toLowerCase()
    .split(' ')
    .map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join('');
}

export const ProductCategories = {
  Women: {
    Tops: HeaderLinks.Topnav.WomenSubMenu.Tops,
    TopsSubMenu: { ...HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu },
    Bottoms: HeaderLinks.Topnav.WomenSubMenu.Bottoms,
    BottomsSubMenu: { ...HeaderLinks.Topnav.WomenSubMenu.BottomsSubMenu },
  },
  Men: {
    Tops: HeaderLinks.Topnav.MenSubMenu.Tops,
    TopsSubMenu: { ...HeaderLinks.Topnav.MenSubMenu.TopsSubMenu },
    Bottoms: HeaderLinks.Topnav.MenSubMenu.Bottoms,
    BottomsSubMenu: { ...HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu },
  },
  Gear: { ...HeaderLinks.Topnav.GearSubMenu },
  // There are no products under Training > Video Downloads so the whole Training category is omitted
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
  MenBottoms: { ...MenBottoms.ExpectedText },
  MenHoodiesSweatshirts: { ...MenHoodies.ExpectedText },
  MenJackets: { ...MenJackets.ExpectedText },
  MenPants: { ...MenPants.ExpectedText },
  MenShorts: { ...MenShorts.ExpectedText },
  MenTanks: { ...MenTanks.ExpectedText },
  MenTees: { ...MenTees.ExpectedText },
  MenTops: { ...MenTops.ExpectedText },
  GearBags: { ...GearBags.ExpectedText },
  GearFitnessEquipment: { ...GearFitnessEquipment.ExpectedText },
  GearWatches: { ...GearWatches.ExpectedText },
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
  MenBottoms: { ...MenBottoms.Links },
  MenHoodiesSweatshirts: { ...MenHoodies.Links },
  MenJackets: { ...MenJackets.Links },
  MenPants: { ...MenPants.Links },
  MenShorts: { ...MenShorts.Links },
  MenTanks: { ...MenTanks.Links },
  MenTees: { ...MenTees.Links },
  MenTops: { ...MenTops.Links },
  GearBags: { ...GearBags.Links },
  GearFitnessEquipment: { ...GearFitnessEquipment.Links },
  GearWatches: { ...GearWatches.Links },
};

export const Products = {
  WomenBottoms: [...WomenBottoms.Products],
  WomenBrasTanks: [...WomenTanks.Products],
  WomenHoodiesSweatshirts: [...WomenHoodies.Products],
  WomenJackets: [...WomenJackets.Products],
  WomenPants: [...WomenPants.Products],
  WomenShorts: [...WomenShorts.Products],
  WomenTees: [...WomenTees.Products],
  WomenTops: [...WomenTops.Products],
  MenBottoms: [...MenBottoms.Products],
  MenHoodiesSweatshirts: [...MenHoodies.Products],
  MenJackets: [...MenJackets.Products],
  MenPants: [...MenPants.Products],
  MenShorts: [...MenShorts.Products],
  MenTanks: [...MenTanks.Products],
  MenTees: [...MenTees.Products],
  MenTops: [...MenTops.Products],
  GearBags: [...GearBags.Products],
  GearFitnessEquipment: [...GearFitnessEquipment.Products],
  GearWatches: [...GearWatches.Products],
};
