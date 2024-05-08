import { Links as HeaderLinks } from '../pageHeader';
import { Filter, ProductCategoryExpectedText } from './shared';
import { Products as Hoodies } from './menHoodies';
import { Products as Jackets } from './menJackets';
import { Products as Tanks } from './menTanks';
import { Products as Tees } from './menTees';
import { Product } from '../products';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Men  Tops',
  Title: 'Tops',
  ProductCount: 'Items 1-12 of 48',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Men: HeaderLinks.Topnav.Men,
  },
};

export const Filters: Record<string, Filter[]> = {
  Category: [
    { title: 'Jackets', count: 11, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?cat=14` },
    { title: 'Hoodies & Sweatshirts', count: 13, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?cat=15` },
    { title: 'Tees', count: 12, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?cat=16` },
    { title: 'Tanks', count: 12, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?cat=17` },
  ],
  Style: [
    { title: 'Insulated', count: 5, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?style_general=116` },
    { title: 'Jacket', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?style_general=117` },
    { title: 'Lightweight', count: 6, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?style_general=119` },
    { title: 'Hooded', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?style_general=120` },
    { title: 'Heavy Duty', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?style_general=121` },
    { title: 'Rain Coat', count: 5, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?style_general=122` },
    { title: 'Hard Shell', count: 5, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?style_general=123` },
    { title: 'Soft Shell', count: 5, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?style_general=124` },
    { title: 'Windbreaker', count: 6, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?style_general=125` },
    { title: '¼ zip', count: 7, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?style_general=127` },
    { title: 'Full Zip', count: 5, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?style_general=128` },
    { title: 'Reversible', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?style_general=129` },
    { title: 'Tank', count: 12, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?style_general=134` },
    { title: 'Tee', count: 12, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?style_general=135` },
  ],
  Size: [
    { title: 'XS', link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?size=166` },
    { title: 'S', link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?size=167` },
    { title: 'M', link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?size=168` },
    { title: 'L', link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?size=169` },
    { title: 'XL', link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?size=170` },
  ],
  Climate: [
    { title: 'All-Weather', count: 38, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?climate=201` },
    { title: 'Cold', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?climate=202` },
    { title: 'Cool', count: 22, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?climate=203` },
    { title: 'Indoor', count: 35, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?climate=204` },
    { title: 'Mild', count: 4, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?climate=205` },
    { title: 'Rainy', count: 5, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?climate=206` },
    { title: 'Spring', count: 21, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?climate=207` },
    { title: 'Warm', count: 25, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?climate=208` },
    { title: 'Windy', count: 18, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?climate=209` },
    { title: 'Wintry', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?climate=210` },
  ],
  Color: [
    { title: 'Black', link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?color=49` },
    { title: 'Blue', link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?color=50` },
    { title: 'Brown', link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?color=51` },
    { title: 'Gray', link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?color=52` },
    { title: 'Green', link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?color=53` },
    { title: 'Lavender', link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?color=54` },
    { title: 'Orange', link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?color=56` },
    { title: 'Purple', link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?color=57` },
    { title: 'Red', link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?color=58` },
    { title: 'White', link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?color=59` },
    { title: 'Yellow', link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?color=60` },
  ],
  EcoCollection: [
    { title: 'Yes', count: 8, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?eco_collection=1` },
    { title: 'No', count: 40, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?eco_collection=0` },
  ],
  ErinRecommends: [
    { title: 'Yes', count: 10, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?erin_recommends=1` },
    { title: 'No', count: 38, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?erin_recommends=0` },
  ],
  Material: [
    { title: 'Cocona® performance fabric', count: 11, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?material=142` },
    { title: 'Cotton', count: 5, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?material=33` },
    { title: 'Fleece', count: 10, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?material=144` },
    { title: 'Hemp', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?material=145` },
    { title: 'LumaTech™', count: 7, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?material=147` },
    { title: 'Lycra®', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?material=148` },
    { title: 'Nylon', count: 10, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?material=37` },
    { title: 'Polyester', count: 32, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?material=38` },
    { title: 'Rayon', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?material=39` },
    { title: 'Spandex', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?material=150` },
    { title: 'HeatTec®', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?material=151` },
    { title: 'EverCool™', count: 4, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?material=152` },
    { title: 'Organic Cotton', count: 16, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?material=153` },
    { title: 'CoolTech™', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?material=155` },
    { title: 'Wool', count: 7, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?material=158` },
  ],
  New: [
    { title: 'Yes', count: 12, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?new=1` },
    { title: 'No', count: 36, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?new=0` },
  ],
  Pattern: [
    { title: 'Color-Blocked', count: 4, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?pattern=194` },
    { title: 'Solid', count: 43, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?pattern=196` },
    { title: 'Striped', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?pattern=198` },
  ],
  PerformanceFabric: [
    { title: 'Yes', count: 13, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?performance_fabric=1` },
    { title: 'No', count: 35, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?performance_fabric=0` },
  ],
  Price: [
    { title: '$10.00 - $19.99', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?price=10-20` },
    { title: '$20.00 - $29.99', count: 17, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?price=20-30` },
    { title: '$30.00 - $39.99', count: 4, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?price=30-40` },
    { title: '$40.00 - $49.99', count: 6, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?price=40-50` },
    { title: '$50.00 - $59.99', count: 5, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?price=50-60` },
    { title: '$60.00 - $69.99', count: 9, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?price=60-70` },
    { title: '$70.00 - $79.99', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?price=70-80` },
    { title: '$90.00 and above', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?price=90-` },
  ],
  Sale: [
    { title: 'Yes', count: 10, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?sale=1` },
    { title: 'No', count: 38, link: `${HeaderLinks.Topnav.MenSubMenu.Tops}?sale=0` },
  ],
};

export const Products: Product[] = [...Tanks, ...Tees, ...Jackets, ...Hoodies];
