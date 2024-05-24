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
import * as Yoga from './productCategories/yoga';
import * as ErinRecommends from './productCategories/erinRecommends';
import * as WomenSale from './productCategories/womenSale';
import * as MenSale from './productCategories/menSale';
import * as AllPants from './productCategories/allPants';
import * as AllTees from './productCategories/allTees';

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
  Yoga: Yoga.Url,
  ErinRecommends: ErinRecommends.Url,
  WomenSale: WomenSale.Url,
  MenSale: MenSale.Url,
  AllPants: AllPants.Url,
  AllTees: AllTees.Url,
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
  Yoga: { ...Yoga.ExpectedText },
  ErinRecommends: { ...ErinRecommends.ExpectedText },
  WomenSale: { ...WomenSale.ExpectedText },
  MenSale: { ...MenSale.ExpectedText },
  AllPants: { ...AllPants.ExpectedText },
  AllTees: { ...AllTees.ExpectedText },
  SidebarBlocks: [
    'Compare Products\nYou have no items to compare.',
    'My Wish List\nYou have no items in your wish list.',
  ],
  SortOptions: ['Position', 'Product Name', 'Price'],
  PageSizes: {
    Grid: [12, 24, 36],
    List: [5, 10, 15, 20, 25],
  },
  Tooltips: {
    Grid: 'Grid',
    List: 'List',
    SortDescending: 'Set Descending Direction',
    SortAscending: 'Set Ascending Direction',
    NextPage: 'Next',
  },
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
  Yoga: { ...Yoga.Links },
  ErinRecommends: { ...ErinRecommends.Links },
  WomenSale: { ...WomenSale.Links },
  MenSale: { ...MenSale.Links },
  AllPants: { ...AllPants.Links },
  AllTees: { ...AllTees.Links },
};

export const Filters = {
  WomenBottoms: [...WomenBottoms.Filters],
  WomenBrasTanks: [...WomenTanks.Filters],
  WomenHoodiesSweatshirts: [...WomenHoodies.Filters],
  WomenJackets: [...WomenJackets.Filters],
  WomenPants: [...WomenPants.Filters],
  WomenShorts: [...WomenShorts.Filters],
  WomenTees: [...WomenTees.Filters],
  WomenTops: [...WomenTops.Filters],
  MenBottoms: [...MenBottoms.Filters],
  MenHoodiesSweatshirts: [...MenHoodies.Filters],
  MenJackets: [...MenJackets.Filters],
  MenPants: [...MenPants.Filters],
  MenShorts: [...MenShorts.Filters],
  MenTanks: [...MenTanks.Filters],
  MenTees: [...MenTees.Filters],
  MenTops: [...MenTops.Filters],
  GearBags: [...GearBags.Filters],
  GearFitnessEquipment: [...GearFitnessEquipment.Filters],
  GearWatches: [...GearWatches.Filters],
  Yoga: [...Yoga.Filters],
  ErinRecommends: [...ErinRecommends.Filters],
  WomenSale: [...WomenSale.Filters],
  MenSale: [...MenSale.Filters],
  AllPants: [...AllPants.Filters],
  AllTees: [...AllTees.Filters],
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
  Yoga: [...Yoga.Products],
  ErinRecommends: [...ErinRecommends.Products],
  WomenSale: [...WomenSale.Products],
  MenSale: [...MenSale.Products],
  AllPants: [...AllPants.Products],
  AllTees: [...AllTees.Products],
};

export const Defaults = {
  PageSize: {
    Grid: 12,
    List: 10,
  },
};

export const QueryParams = {
  DisplayMode: {
    Grid: '',
    List: 'product_list_mode=list',
  },
  SortBy: 'product_list_order',
  SortDir: {
    Ascending: '',
    Descending: 'product_list_dir=desc',
  },
  Page: 'p',
  PageSize: 'product_list_limit',
};
