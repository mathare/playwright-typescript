import * as WomenTanks from './productCategories/womenTanks';
import * as WomenTees from './productCategories/womenTees';
import * as MenHoodies from './productCategories/menHoodies';
import * as MenTanks from './productCategories/menTanks';
import * as GearBags from './productCategories/gearBags';
import * as Yoga from './productCategories/yoga';
import * as ErinRecommends from './productCategories/erinRecommends';
import * as AllPants from './productCategories/allPants';
import * as AllTees from './productCategories/allTees';

export const ExpectedText = {
  PromoBlocks: [
    'New Luma Yoga Collection Get fit and look fab in new seasonal styles Shop New Yoga',
    '20% OFF Luma pants when you shop today* Shop Pants',
    'Even more ways to mix and match Buy 3 Luma tees get a 4th free Shop Tees',
    'Take it from Erin Luma founder Erin Renny shares her favorites! Shop Erin Recommends',
    'Science meets performance Wicking to raingear, Luma covers you Shop Performance',
    'Twice around, twice as nice Find conscientious, comfy clothing in our eco-friendly collection Shop Eco-Friendly',
  ],
  ContentHeading: 'Hot Sellers Here is what`s trending on Luma right now',
};

// I'm not convinced this is the best way of doing this as I would like to avoid using hardcoded array indices where possible
// However, this works for now and I will look at a better way of doing it down the line
export const Products = [
  WomenTees.Products[2],
  WomenTanks.Products[0],
  MenTanks.Products[5],
  MenHoodies.Products[6],
  GearBags.Products[8],
  GearBags.Products[0],
];

export const PromoBlockLinks = [
  Yoga.Url,
  AllPants.Url,
  AllTees.Url,
  ErinRecommends.Url,
  '/collections/performance-fabrics.html',
  '/collections/eco-friendly.html',
];
