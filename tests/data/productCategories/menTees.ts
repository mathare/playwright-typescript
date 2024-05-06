import { Links as HeaderLinks } from '../pageHeader';
import { Colors, Product, Sizes } from '../products';
import { Filter, FilterOptions, ProductCategoryExpectedText } from './shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Men  Tops  Tees',
  Title: 'Tees',
  Filters: [...FilterOptions],
  ProductCount: '12 Items',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Men: HeaderLinks.Topnav.Men,
    Tops: HeaderLinks.Topnav.MenSubMenu.Tops,
  },
};

export const Filters: Record<string, Filter[]> = {
  Style: [{ title: 'Tee', count: 12, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?style_general=135` }],
  Size: [
    { title: 'XS', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?size=166` },
    { title: 'S', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?size=167` },
    { title: 'M', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?size=168` },
    { title: 'L', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?size=169` },
    { title: 'XL', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?size=170` },
  ],
  Climate: [
    { title: 'All-Weather', count: 12, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?climate=201` },
    { title: 'Cool', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?climate=203` },
    { title: 'Indoor', count: 12, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?climate=204` },
    { title: 'Warm', count: 12, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?climate=208` },
  ],
  Color: [
    { title: 'Black', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?color=49` },
    { title: 'Blue', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?color=50` },
    { title: 'Brown', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?color=51` },
    { title: 'Gray', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?color=52` },
    { title: 'Green', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?color=53` },
    { title: 'Orange', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?color=56` },
    { title: 'Purple', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?color=57` },
    { title: 'Red', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?color=58` },
    { title: 'White', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?color=59` },
    { title: 'Yellow', link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?color=60` },
  ],
  EcoCollection: [
    { title: 'Yes', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?eco_collection=1` },
    { title: 'No', count: 11, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?eco-collection=0` },
  ],
  ErinRecommends: [
    { title: 'Yes', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?erin_recommends=1` },
    { title: 'No', count: 9, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?erin_recommends=0` },
  ],
  Material: [
    {
      title: 'Cocona® performance fabric',
      count: 4,
      link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?material=142`,
    },
    { title: 'Cotton', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?material=33` },
    { title: 'LumaTech™', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?material=147` },
    { title: 'Lycra®', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?material=148` },
    { title: 'Polyester', count: 8, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?material=38` },
    { title: 'Rayon', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?material=39` },
    { title: 'HeatTec®', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?material=151` },
    { title: 'EverCool™', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?material=152` },
    { title: 'Organic Cotton', count: 6, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?material=153` },
  ],
  New: [
    { title: 'Yes', count: 4, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?new=1` },
    { title: 'No', count: 8, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?new=0` },
  ],
  Pattern: [{ title: 'Solid', count: 12, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?pattern=196` }],
  PerformanceFabric: [
    { title: 'Yes', count: 4, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?performance_fabric=1` },
    { title: 'No', count: 8, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?performance_fabric=0` },
  ],
  Price: [
    { title: '$20.00 - $29.99', count: 9, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?price=20-30` },
    { title: '$30.00 and above', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?price=30-` },
  ],
  Sale: [
    { title: 'Yes', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?sale=1` },
    { title: 'No', count: 10, link: `${HeaderLinks.Topnav.MenSubMenu.TopsSubMenu.Tees}?sale=0` },
  ],
};

export const Products: Product[] = [
  {
    title: 'Strike Endurance Tee',
    rating: '65%',
    reviews: '4 Reviews',
    price: 'As low as $39.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Red],
    link: '/strike-endurance-tee.html',
  },
  {
    title: 'Deion Long-Sleeve EverCool™ Tee',
    rating: '67%',
    reviews: '3 Reviews',
    price: 'As low as $39.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Green, Colors.White],
    link: '/deion-long-sleeve-evercool-trade-tee.html',
  },
  {
    title: 'Logan HeatTec® Tee',
    rating: '60%',
    reviews: '3 Reviews',
    price: 'As low as $24.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Red],
    link: '/logan-heattec-reg-tee.html',
  },
  {
    title: 'Ryker LumaTech™ Tee (V-neck)',
    rating: '90%',
    reviews: '2 Reviews',
    price: 'As low as $28.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Grey],
    link: '/ryker-lumatech-trade-tee-v-neck.html',
  },
  {
    title: 'Aero Daily Fitness Tee',
    rating: '80%',
    reviews: '3 Reviews',
    price: 'As low as $24.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Brown, Colors.Yellow],
    link: '/aero-daily-fitness-tee.html',
  },
  {
    title: 'Zoltan Gym Tee',
    rating: '70%',
    reviews: '2 Reviews',
    price: 'As low as $29.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Yellow],
    link: '/zoltan-gym-tee.html',
  },
  {
    title: 'Balboa Persistence Tee',
    rating: '60%',
    reviews: '2 Reviews',
    price: 'As low as $29.00',
    sizes: Sizes,
    colors: [Colors.Grey, Colors.Green, Colors.Orange],
    link: '/balboa-persistence-tee.html',
  },
  {
    title: 'Atomic Endurance Running Tee (Crew-Neck)',
    rating: '53%',
    reviews: '3 Reviews',
    price: 'As low as $29.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Red],
    link: '/atomic-endurance-running-tee-crew-neck.html',
  },
  {
    title: 'Atomic Endurance Running Tee (V-neck)',
    rating: '80%',
    reviews: '3 Reviews',
    price: 'As low as $28.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Yellow],
    link: '/atomic-endurance-running-tee-v-neck.html',
  },
  {
    title: 'Ryker LumaTech™ Tee (Crew-neck)',
    rating: '73%',
    reviews: '3 Reviews',
    price: 'As low as $32.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Red],
    link: '/ryker-lumatech-trade-tee-crew-neck.html',
  },
  {
    title: 'Helios EverCool™ Tee',
    rating: '80%',
    reviews: '3 Reviews',
    price: 'As low as $24.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Purple],
    link: '/helios-evercool-trade-tee.html',
  },
  {
    title: 'Gobi HeatTec® Tee',
    rating: '67%',
    reviews: '3 Reviews',
    price: 'As low as $29.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Orange, Colors.Red],
    link: '/gobi-heattec-reg-tee.html',
  },
];
