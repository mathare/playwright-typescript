import { FilterCategory, ProductCategoryExpectedText } from './shared';
import { Products as Bags } from './gearBags';
import { Products as FitnessEquipment } from './gearFitnessEquipment';
import { Products as Watches } from './gearWatches';
import { Products as MenPants } from './menPants';
import { Products as MenShorts } from './menShorts';
import { Products as WomenHoodies } from './womenHoodies';
import { Products as WomenJackets } from './womenJackets';
import { Products as WomenPants } from './womenPants';
import { Products as WomenShorts } from './womenShorts';
import { Products as WomenTanks } from './womenTanks';
import { Products as WomenTees } from './womenTees';
import { Product } from '../products';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  New Luma Yoga Collection',
  Title: 'New Luma Yoga Collection',
  ProductCount: 'Items 1-12 of 32',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
  },
};

export const Url = '/collections/yoga-new.html';

export const Filters: FilterCategory[] = [
  {
    title: 'STYLE',
    options: [
      { title: 'Duffel', count: 1, link: `${Url}?style_bags=26` },
      { title: 'Messenger', count: 2, link: `${Url}?style_bags=27` },
      { title: 'Laptop', count: 2, link: `${Url}?style_bags=28` },
      { title: 'Exercise', count: 1, link: `${Url}?style_bags=29` },
    ],
  },
  {
    title: 'CATEGORY',
    options: [
      { title: 'Electronic', count: 4, link: `${Url}?category_gear=86` },
      { title: 'Exercise', count: 4, link: `${Url}?category_gear=87` },
      { title: 'Fashion', count: 1, link: `${Url}?category_gear=88` },
      { title: 'Timepiece', count: 4, link: `${Url}?category_gear=90` },
    ],
  },
  {
    title: 'STYLE',
    options: [
      { title: 'Base Layer', count: 8, link: `${Url}?style_bottom=104` },
      { title: 'Basic', count: 2, link: `${Url}?style_bottom=105` },
      { title: 'Compression', count: 3, link: `${Url}?style_bottom=107` },
      { title: 'Leggings', count: 2, link: `${Url}?style_bottom=108` },
      { title: 'Parachute', count: 1, link: `${Url}?style_bottom=109` },
      { title: 'Snug', count: 2, link: `${Url}?style_bottom=111` },
      { title: 'Sweatpants', count: 4, link: `${Url}?style_bottom=112` },
      { title: 'Track Pants', count: 5, link: `${Url}?style_bottom=114` },
      { title: 'Workout Pants', count: 6, link: `${Url}?style_bottom=115` },
    ],
  },
  {
    title: 'STYLE',
    options: [
      { title: 'Insulated', count: 1, link: `${Url}?style_general=116` },
      { title: 'Jacket', count: 4, link: `${Url}?style_general=117` },
      { title: 'Lightweight', count: 2, link: `${Url}?style_general=119` },
      { title: 'Hooded', count: 2, link: `${Url}?style_general=120` },
      { title: 'Rain Coat', count: 1, link: `${Url}?style_general=122` },
      { title: 'Hard Shell', count: 1, link: `${Url}?style_general=123` },
      { title: 'Soft Shell', count: 2, link: `${Url}?style_general=124` },
      { title: 'Windbreaker', count: 1, link: `${Url}?style_general=125` },
      { title: '¼ zip', count: 1, link: `${Url}?style_general=127` },
      { title: 'Full Zip', count: 5, link: `${Url}?style_general=128` },
      { title: 'Reversible', count: 1, link: `${Url}?style_general=129` },
      { title: 'Bra', count: 1, link: `${Url}?style_general=130` },
      { title: 'Sweatshirt', count: 1, link: `${Url}?style_general=132` },
      { title: 'Tank', count: 1, link: `${Url}?style_general=134` },
      { title: 'Tee', count: 4, link: `${Url}?style_general=135` },
      { title: 'Pullover', count: 2, link: `${Url}?style_general=136` },
      { title: 'Hoodie', count: 3, link: `${Url}?style_general=137` },
    ],
  },
  {
    title: 'SIZE',
    options: [
      { title: 'XS', link: `${Url}?size=166` },
      { title: 'S', link: `${Url}?size=167` },
      { title: 'M', link: `${Url}?size=168` },
      { title: 'L', link: `${Url}?size=169` },
      { title: 'XL', link: `${Url}?size=170` },
      { title: '28', link: `${Url}?size=171` },
      { title: '29', link: `${Url}?size=172` },
      { title: '30', link: `${Url}?size=173` },
      { title: '31', link: `${Url}?size=174` },
      { title: '32', link: `${Url}?size=175` },
      { title: '33', link: `${Url}?size=176` },
      { title: '34', link: `${Url}?size=177` },
      { title: '36', link: `${Url}?size=178` },
    ],
  },
  {
    title: 'ACTIVITY',
    options: [
      { title: 'Outdoor', count: 2, link: `${Url}?activity=5` },
      { title: 'Recreation', count: 2, link: `${Url}?activity=9` },
      { title: 'Gym', count: 5, link: `${Url}?activity=11` },
      { title: 'Athletic', count: 4, link: `${Url}?activity=16` },
      { title: 'Sports', count: 2, link: `${Url}?activity=17` },
      { title: 'Overnight', count: 2, link: `${Url}?activity=19` },
      { title: 'Travel', count: 3, link: `${Url}?activity=22` },
      { title: 'Urban', count: 1, link: `${Url}?activity=23` },
    ],
  },
  {
    title: 'CLIMATE',
    options: [
      { title: 'All-Weather', count: 9, link: `${Url}?climate=201` },
      { title: 'Cold', count: 2, link: `${Url}?climate=202` },
      { title: 'Cool', count: 9, link: `${Url}?climate=203` },
      { title: 'Indoor', count: 15, link: `${Url}?climate=204` },
      { title: 'Mild', count: 8, link: `${Url}?climate=205` },
      { title: 'Rainy', count: 1, link: `${Url}?climate=206` },
      { title: 'Spring', count: 10, link: `${Url}?climate=207` },
      { title: 'Warm', count: 11, link: `${Url}?climate=208` },
      { title: 'Windy', count: 7, link: `${Url}?climate=209` },
      { title: 'Wintry', count: 6, link: `${Url}?climate=210` },
      { title: 'Hot', count: 6, link: `${Url}?climate=211` },
    ],
  },
  {
    title: 'COLOR',
    options: [
      { title: 'Black', link: `${Url}?color=49` },
      { title: 'Blue', link: `${Url}?color=50` },
      { title: 'Gray', link: `${Url}?color=52` },
      { title: 'Green', link: `${Url}?color=53` },
      { title: 'Orange', link: `${Url}?color=56` },
      { title: 'Purple', link: `${Url}?color=57` },
      { title: 'Red', link: `${Url}?color=58` },
      { title: 'White', link: `${Url}?color=59` },
      { title: 'Yellow', link: `${Url}?color=60` },
    ],
  },
  {
    title: 'ECO COLLECTION',
    options: [
      { title: 'Yes', count: 5, link: `${Url}?eco_collection=1` },
      { title: 'No', count: 19, link: `${Url}?eco_collection=0` },
    ],
  },
  {
    title: 'ERIN RECOMMENDS',
    options: [
      { title: 'Yes', count: 7, link: `${Url}?erin_recommends=1` },
      { title: 'No', count: 18, link: `${Url}?erin_recommends=0` },
    ],
  },
  {
    title: 'FEATURES',
    options: [
      { title: 'Flapover', count: 1, link: `${Url}?features_bags=73` },
      { title: 'Waterproof', count: 2, link: `${Url}?features_bags=74` },
      { title: 'Lightweight', count: 2, link: `${Url}?features_bags=75` },
      { title: 'Reflective', count: 1, link: `${Url}?features_bags=77` },
      { title: 'Laptop Sleeve', count: 2, link: `${Url}?features_bags=78` },
      { title: 'Lockable', count: 2, link: `${Url}?features_bags=79` },
    ],
  },
  {
    title: 'GENDER',
    options: [
      { title: 'Men', count: 4, link: `${Url}?gender=80` },
      { title: 'Women', count: 3, link: `${Url}?gender=81` },
      { title: 'Unisex', count: 2, link: `${Url}?gender=84` },
    ],
  },
  {
    title: 'MATERIAL',
    options: [
      { title: 'Cocona® performance fabric', count: 4, link: `${Url}?material=142` },
      { title: 'Cotton', count: 4, link: `${Url}?material=33` },
      { title: 'Fleece', count: 3, link: `${Url}?material=144` },
      { title: 'Hemp', count: 1, link: `${Url}?material=145` },
      { title: 'Leather', count: 3, link: `${Url}?material=35` },
      { title: 'LumaTech™', count: 3, link: `${Url}?material=147` },
      { title: 'Mesh', count: 1, link: `${Url}?material=36` },
      { title: 'Lycra®', count: 4, link: `${Url}?material=148` },
      { title: 'Nylon', count: 8, link: `${Url}?material=37` },
      { title: 'Polyester', count: 12, link: `${Url}?material=38` },
      { title: 'Rayon', count: 5, link: `${Url}?material=39` },
      { title: 'Spandex', count: 8, link: `${Url}?material=150` },
      { title: 'EverCool™', count: 1, link: `${Url}?material=152` },
      { title: 'Suede', count: 1, link: `${Url}?material=41` },
      { title: 'Organic Cotton', count: 6, link: `${Url}?material=153` },
      { title: 'Metal', count: 2, link: `${Url}?material=43` },
      { title: 'CoolTech™', count: 5, link: `${Url}?material=155` },
      { title: 'Plastic', count: 3, link: `${Url}?material=44` },
      { title: 'Rubber', count: 3, link: `${Url}?material=45` },
      { title: 'Wool', count: 6, link: `${Url}?material=158` },
      { title: 'Silicone', count: 2, link: `${Url}?material=48` },
    ],
  },
  {
    title: 'NEW',
    options: [{ title: 'Yes', count: 32, link: `${Url}?new=1` }],
  },
  {
    title: 'PATTERN',
    options: [
      { title: 'Color-Blocked', count: 1, link: `${Url}?pattern=194` },
      { title: 'Solid', count: 23, link: `${Url}?pattern=196` },
    ],
  },
  {
    title: 'PERFORMANCE FABRIC',
    options: [
      { title: 'Yes', count: 6, link: `${Url}?performance_fabric=1` },
      { title: 'No', count: 18, link: `${Url}?performance_fabric=0` },
    ],
  },
  {
    title: 'PRICE',
    options: [
      { title: '$10.00 - $19.99', count: 1, link: `${Url}?price=10-20` },
      { title: '$20.00 - $29.99', count: 5, link: `${Url}?price=20-30` },
      { title: '$30.00 - $39.99', count: 5, link: `${Url}?price=30-40` },
      { title: '$40.00 - $49.99', count: 6, link: `${Url}?price=40-50` },
      { title: '$50.00 - $59.99', count: 7, link: `${Url}?price=50-60` },
      { title: '$60.00 - $69.99', count: 4, link: `${Url}?price=60-70` },
      { title: '$70.00 - $79.99', count: 1, link: `${Url}?price=70-80` },
      { title: '$80.00 - $89.99', count: 1, link: `${Url}?price=80-90` },
      { title: '$90.00 and above', count: 2, link: `${Url}?price=90-` },
    ],
  },
  {
    title: 'SALE',
    options: [{ title: 'No', count: 24, link: `${Url}?sale=0` }],
  },
  {
    title: 'STRAP/HANDLE',
    options: [
      { title: 'Adjustable', count: 2, link: `${Url}?strap_bags=61` },
      { title: 'Cross Body', count: 1, link: `${Url}?strap_bags=62` },
      { title: 'Detachable', count: 1, link: `${Url}?strap_bags=63` },
      { title: 'Double', count: 2, link: `${Url}?strap_bags=64` },
      { title: 'Padded', count: 1, link: `${Url}?strap_bags=65` },
      { title: 'Shoulder', count: 2, link: `${Url}?strap_bags=66` },
      { title: 'Single', count: 1, link: `${Url}?strap_bags=67` },
    ],
  },
];

export const Products: Product[] = [
  WomenShorts[5],
  WomenShorts[9],
  WomenShorts[11],
  WomenPants[10],
  WomenTanks[6],
  WomenTanks[11],
  WomenTees[7],
  WomenTees[8],
  WomenTees[9],
  WomenTees[11],
  WomenJackets[2],
  WomenJackets[3],
  WomenJackets[8],
  WomenJackets[11],
  WomenHoodies[2],
  WomenHoodies[5],
  WomenHoodies[11],
  MenShorts[2],
  MenShorts[6],
  MenPants[3],
  MenPants[4],
  MenPants[5],
  MenPants[7],
  MenPants[9],
  Watches[0],
  Watches[4],
  Watches[5],
  Watches[6],
  FitnessEquipment[6],
  Bags[1],
  Bags[9],
  Bags[10],
];
