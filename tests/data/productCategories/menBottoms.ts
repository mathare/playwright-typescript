import { Links as HeaderLinks } from '../pageHeader';
import { Filter, FilterOptions, ProductCategoryExpectedText } from './shared';
import { Products as Pants } from './menPants';
import { Products as Shorts } from './menShorts';
import { Product } from '../products';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Men  Bottoms',
  Title: 'Bottoms',
  Filters: ['CATEGORY', ...FilterOptions],
  ProductCount: 'Items 1-12 of 24',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Men: HeaderLinks.Topnav.Men,
  },
};

export const Filters: Record<string, Filter[]> = {
  Category: [
    { title: 'Pants', count: 12, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?cat=27` },
    { title: 'Shorts', count: 12, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?cat=28` },
  ],
  Style: [
    { title: 'Base Layer', count: 15, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?style_general=104` },
    { title: 'Compression', count: 5, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?style_general=107` },
    { title: 'Leggings', count: 4, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?style_general=108` },
    { title: 'Sweatpants', count: 8, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?style_general=112` },
    { title: 'Tights', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?style_general=113` },
    { title: 'Track Pants', count: 10, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?style_general=114` },
    { title: 'Workout Pants', count: 23, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?style_general=115` },
  ],
  Size: [
    { title: '32', link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?size=175` },
    { title: '33', link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?size=176` },
    { title: '34', link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?size=177` },
    { title: '36', link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?size=178` },
  ],
  Climate: [
    { title: 'All-Weather', count: 13, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?climate=201` },
    { title: 'Cold', count: 6, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?climate=202` },
    { title: 'Cool', count: 11, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?climate=203` },
    { title: 'Indoor', count: 15, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?climate=204` },
    { title: 'Mild', count: 5, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?climate=205` },
    { title: 'Rainy', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?climate=206` },
    { title: 'Spring', count: 12, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?climate=207` },
    { title: 'Warm', count: 10, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?climate=208` },
    { title: 'Windy', count: 9, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?climate=209` },
    { title: 'Wintry', count: 10, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?climate=210` },
    { title: 'Hot', count: 8, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?climate=211` },
  ],
  Color: [
    { title: 'Black', link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?color=49` },
    { title: 'Blue', link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?color=50` },
    { title: 'Brown', link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?color=51` },
    { title: 'Gray', link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?color=52` },
    { title: 'Green', link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?color=53` },
    { title: 'Orange', link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?color=56` },
    { title: 'Purple', link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?color=57` },
    { title: 'Red', link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?color=58` },
    { title: 'Yellow', link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?color=60` },
  ],
  EcoCollection: [
    { title: 'Yes', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?eco_collection=1` },
    { title: 'No', count: 23, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?eco-collection=0` },
  ],
  ErinRecommends: [
    { title: 'Yes', count: 5, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?erin_recommends=1` },
    { title: 'No', count: 19, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?erin_recommends=0` },
  ],
  Material: [
    { title: 'Cocona® performance fabric', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?material=142` },
    { title: 'Cotton', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?material=33` },
    { title: 'Fleece', count: 4, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?material=144` },
    { title: 'Hemp', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?material=145` },
    { title: 'LumaTech™', count: 6, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?material=147` },
    { title: 'Mesh', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?material=36` },
    { title: 'Lycra®', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?material=148` },
    { title: 'Nylon', count: 5, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?material=37` },
    { title: 'Polyester', count: 15, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?material=38` },
    { title: 'Rayon', count: 8, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?material=39` },
    { title: 'Spandex', count: 11, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?material=150` },
    { title: 'Organic Cotton', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?material=153` },
    { title: 'CoolTech™', count: 7, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?material=155` },
    { title: 'Linen', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?material=157` },
    { title: 'Wool', count: 9, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?material=158` },
  ],
  New: [
    { title: 'Yes', count: 7, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?new=1` },
    { title: 'No', count: 17, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?new=0` },
  ],
  Pattern: [
    { title: 'Solid', count: 24, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?pattern=196` },
    { title: 'Striped', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?pattern=198` },
  ],
  PerformanceFabric: [
    { title: 'Yes', count: 7, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?performance_fabric=1` },
    { title: 'No', count: 17, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?performance_fabric=0` },
  ],
  Price: [
    { title: '$20.00 - $29.99', count: 6, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?price=20-30` },
    { title: '$30.00 - $39.99', count: 10, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?price=30-40` },
    { title: '$40.00 - $49.99', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?price=40-50` },
    { title: '$50.00 - $59.99', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?price=50-60` },
    { title: '$60.00 and above', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?price=60-` },
  ],
  Sale: [
    { title: 'Yes', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?sale=1` },
    { title: 'No', count: 21, link: `${HeaderLinks.Topnav.MenSubMenu.Bottoms}?sale=0` },
  ],
};

export const Products: Product[] = [...Shorts, ...Pants];
