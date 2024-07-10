import { ProductDetails as WomenTanks } from './productCategories/womenTanks';
import { ProductDetails as WomenTees } from './productCategories/womenTees';
import { ProductDetails as MenHoodies } from './productCategories/menHoodies';
import { ProductDetails as MenTanks } from './productCategories/menTanks';
import { ProductDetails as GearBags } from './productCategories/gearBags';
import * as Yoga from './productCategories/yoga';
import * as ErinRecommends from './productCategories/erinRecommends';
import * as AllPants from './productCategories/allPants';
import * as AllTees from './productCategories/allTees';
import * as EcoFriendly from './productCategories/ecoFriendly';
import * as PerformanceFabrics from './productCategories/performanceFabrics';

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

export const Products = [
  WomenTees.Radiant,
  WomenTanks.BreatheEasy,
  MenTanks.Argus,
  MenHoodies.Hero,
  GearBags.Fusion,
  GearBags.PushIt,
];

export const PromoBlockLinks = [
  Yoga.Url,
  AllPants.Url,
  AllTees.Url,
  ErinRecommends.Url,
  PerformanceFabrics.Url,
  EcoFriendly.Url,
];
