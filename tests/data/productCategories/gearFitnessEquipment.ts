import { Links as HeaderLinks } from '../pageHeader';
import { Product } from '../products';
import { FilterCategory, ProductCategoryExpectedText } from './shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Gear  Fitness Equipment',
  Title: 'Fitness Equipment',
  ProductCount: '11 Items',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Gear: HeaderLinks.Topnav.Gear,
  },
};

export const Filters: FilterCategory[] = [
  {
    title: 'CATEGORY',
    options: [
      { title: 'Cardio', count: 4, link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?category_gear=85` },
      { title: 'Exercise', count: 10, link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?category_gear=87` },
    ],
  },
  {
    title: 'SIZE',
    options: [
      { title: '55 cm', link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?size=91` },
      { title: '65 cm', link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?size=92` },
      { title: '75 cm', link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?size=93` },
      { title: '6 foot', link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?size=94` },
      { title: '8 foot', link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?size=95` },
      { title: '10 foot', link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?size=96` },
    ],
  },
  {
    title: 'ACTIVITY',
    options: [
      { title: 'Yoga', count: 5, link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?activity=8` },
      { title: 'Recreation', count: 3, link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?activity=9` },
      { title: 'Gym', count: 10, link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?activity=11` },
      { title: 'Athletic', count: 2, link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?activity=16` },
      { title: 'Sports', count: 4, link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?activity=17` },
    ],
  },
  {
    title: 'COLOR',
    options: [{ title: 'Blue', link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?color=50` }],
  },
  {
    title: 'ERIN RECOMMENDS',
    options: [{ title: 'Yes', count: 2, link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?erin_recommends=1` }],
  },
  {
    title: 'GENDER',
    options: [
      { title: 'Men', count: 10, link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?gender=80` },
      { title: 'Women', count: 10, link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?gender=81` },
      { title: 'Boys', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?gender=82` },
      { title: 'Girls', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?gender=83` },
      { title: 'Unisex', count: 10, link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?gender=84` },
    ],
  },
  {
    title: 'MATERIAL',
    options: [
      { title: 'Canvas', count: 2, link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?material=32` },
      { title: 'Leather', count: 3, link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?material=35` },
      { title: 'Foam', count: 3, link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?material=42` },
      { title: 'Plastic', count: 8, link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?material=44` },
      { title: 'Rubber', count: 4, link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?material=45` },
      { title: 'Synthetic', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?material=46` },
    ],
  },
  {
    title: 'NEW',
    options: [{ title: 'Yes', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?new=1` }],
  },
  {
    title: 'PRICE',
    options: [
      { title: '$0.00 - $9.99', count: 2, link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?price=-10` },
      { title: '$10.00 - $19.99', count: 7, link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?price=10-20` },
      { title: '$20.00 - $29.99', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?price=20-30` },
      { title: '$60.00 and above', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?price=60-` },
    ],
  },
  {
    title: 'SALE',
    options: [{ title: 'Yes', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.FitnessEquipment}?sale=1` }],
  },
];

export const ProductDetails: Record<string, Product> = {
  SpriteKit: {
    name: 'Sprite Yoga Companion Kit',
    price: 'From $61.00\n\nTo $77.00',
    link: '/sprite-yoga-companion-kit.html',
  },
  SpriteStraps: {
    name: 'Set of Sprite Yoga Straps',
    price: 'Starting at\n$14.00',
    link: '/set-of-sprite-yoga-straps.html',
  },
  HarmonyKit: {
    name: 'Harmony Lumaflex™ Strength Band Kit',
    rating: '60%',
    reviews: '3 Reviews',
    price: '$22.00',
    link: '/harmony-lumaflex-trade-strength-band-kit.html',
  },
  SpriteRoller: {
    name: 'Sprite Foam Roller',
    price: '$19.00',
    link: '/sprite-foam-roller.html',
  },
  SpriteBrick: {
    name: 'Sprite Foam Yoga Brick',
    price: '$5.00',
    link: '/sprite-foam-yoga-brick.html',
  },
  QuestBand: {
    name: 'Quest Lumaflex™ Band',
    rating: '67%',
    reviews: '3 Reviews',
    price: '$19.00',
    link: '/quest-lumaflex-trade-band.html',
  },
  PushupGrips: {
    name: "Go-Get'r Pushup Grips",
    rating: '87%',
    reviews: '3 Reviews',
    price: '$19.00',
    link: '/go-get-r-pushup-grips.html',
  },
  PursuitBand: {
    name: 'Pursuit Lumaflex™ Tone Band',
    rating: '60%',
    reviews: '2 Reviews',
    price: '$16.00',
    link: '/pursuit-lumaflex-trade-tone-band.html',
  },
  JumpRope: {
    name: 'Zing Jump Rope',
    rating: '93%',
    reviews: '3 Reviews',
    price: '$12.00',
    link: '/zing-jump-rope.html',
  },
  CardioBall: {
    name: 'Dual Handle Cardio Ball',
    rating: '100%',
    reviews: '2 Reviews',
    price: '$12.00',
    link: '/dual-handle-cardio-ball.html',
  },
  WaterBottle: {
    name: 'Affirm Water Bottle',
    rating: '60%',
    reviews: '1 Review',
    price: '$7.00',
    link: '/affirm-water-bottle.html',
  },
};

export const Products = [
  ProductDetails.SpriteKit,
  ProductDetails.SpriteStraps,
  ProductDetails.HarmonyKit,
  ProductDetails.SpriteRoller,
  ProductDetails.SpriteBrick,
  ProductDetails.QuestBand,
  ProductDetails.PushupGrips,
  ProductDetails.PursuitBand,
  ProductDetails.JumpRope,
  ProductDetails.CardioBall,
  ProductDetails.WaterBottle,
];
