import { Links as HeaderLinks } from '../pageHeader';
import { Colors, Product } from '../products';
import { FilterCategory, ProductCategoryExpectedText } from './shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Men  Bottoms  Pants',
  Title: 'Pants',
  ProductCount: '12 Items',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Men: HeaderLinks.Topnav.Men,
    Bottoms: HeaderLinks.Topnav.MenSubMenu.Bottoms,
  },
};

export const Filters: FilterCategory[] = [
  {
    title: 'STYLE',
    options: [
      { title: 'Base Layer', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?style_bottom=104` },
      {
        title: 'Compression',
        count: 1,
        link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?style_bottom=107`,
      },
      { title: 'Leggings', count: 4, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?style_bottom=108` },
      { title: 'Sweatpants', count: 8, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?style_bottom=112` },
      {
        title: 'Track Pants',
        count: 10,
        link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?style_bottom=114`,
      },
      {
        title: 'Workout Pants',
        count: 11,
        link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?style_bottom=115`,
      },
    ],
  },
  {
    title: 'SIZE',
    options: [
      { title: '32', link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?size=175` },
      { title: '33', link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?size=176` },
      { title: '34', link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?size=177` },
      { title: '36', link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?size=178` },
    ],
  },
  {
    title: 'CLIMATE',
    options: [
      { title: 'All-Weather', count: 7, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?climate=201` },
      { title: 'Cold', count: 6, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?climate=202` },
      { title: 'Cool', count: 11, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?climate=203` },
      { title: 'Indoor', count: 4, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?climate=204` },
      { title: 'Mild', count: 4, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?climate=205` },
      { title: 'Rainy', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?climate=206` },
      { title: 'Spring', count: 7, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?climate=207` },
      { title: 'Windy', count: 9, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?climate=209` },
      { title: 'Wintry', count: 10, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?climate=210` },
    ],
  },
  {
    title: 'COLOR',
    options: [
      { title: 'Black', link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?color=49` },
      { title: 'Blue', link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?color=50` },
      { title: 'Brown', link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?color=51` },
      { title: 'Gray', link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?color=52` },
      { title: 'Green', link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?color=53` },
      { title: 'Orange', link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?color=56` },
      { title: 'Purple', link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?color=57` },
      { title: 'Red', link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?color=58` },
    ],
  },
  {
    title: 'ECO COLLECTION',
    options: [
      { title: 'Yes', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?eco_collection=1` },
      { title: 'No', count: 11, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?eco_collection=0` },
    ],
  },
  {
    title: 'ERIN RECOMMENDS',
    options: [
      { title: 'Yes', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?erin_recommends=1` },
      { title: 'No', count: 9, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?erin_recommends=0` },
    ],
  },
  {
    title: 'MATERIAL',
    options: [
      {
        title: 'Cocona® performance fabric',
        count: 2,
        link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?material=142`,
      },
      { title: 'Cotton', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?material=33` },
      { title: 'Fleece', count: 4, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?material=144` },
      { title: 'Hemp', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?material=145` },
      { title: 'LumaTech™', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?material=147` },
      { title: 'Nylon', count: 1, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?material=37` },
      { title: 'Polyester', count: 7, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?material=38` },
      { title: 'Rayon', count: 4, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?material=39` },
      { title: 'Spandex', count: 7, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?material=150` },
      { title: 'Organic Cotton', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?material=153` },
      { title: 'CoolTech™', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?material=155` },
      { title: 'Wool', count: 7, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?material=158` },
    ],
  },
  {
    title: 'NEW',
    options: [
      { title: 'Yes', count: 5, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?new=1` },
      { title: 'No', count: 7, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?new=0` },
    ],
  },
  {
    title: 'PATTERN',
    options: [{ title: 'Solid', count: 12, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?pattern=196` }],
  },
  {
    title: 'PERFORMANCE FABRIC',
    options: [
      { title: 'Yes', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?performance_fabric=1` },
      { title: 'No', count: 9, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?performance_fabric=0` },
    ],
  },
  {
    title: 'PRICE',
    options: [
      { title: '$20.00 - $29.99', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?price=20-30` },
      { title: '$30.00 - $39.99', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?price=30-40` },
      { title: '$40.00 - $49.99', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?price=40-50` },
      { title: '$50.00 - $59.99', count: 3, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?price=50-60` },
      { title: '$60.00 and above', count: 2, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?price=60-` },
    ],
  },
  {
    title: 'SALE',
    options: [{ title: 'No', count: 12, link: `${HeaderLinks.Topnav.MenSubMenu.BottomsSubMenu.Pants}?sale=0` }],
  },
];

const Sizes = ['32', '33', '34', '36'];

export const ProductDetails: Record<string, Product> = {
  Cronus: {
    name: 'Cronus Yoga Pant',
    price: 'As low as $38.40',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Red],
    link: '/cronus-yoga-pant.html',
  },
  Aether: {
    name: 'Aether Gym Pant',
    price: 'As low as $59.20',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Brown, Colors.Green],
    link: '/aether-gym-pant.html',
  },
  Orestes: {
    name: 'Orestes Yoga Pant',
    price: 'As low as $52.80',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Green],
    link: '/orestes-yoga-pant.html',
  },
  Livingston: {
    name: 'Livingston All-Purpose Tight',
    price: 'As low as $60.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Red],
    link: '/livingston-all-purpose-tight.html',
  },
  Zeppelin: {
    name: 'Zeppelin Yoga Pant',
    price: 'As low as $65.60',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Red],
    link: '/zeppelin-yoga-pant.html',
  },
  Thorpe: {
    name: 'Thorpe Track Pant',
    price: 'As low as $54.40',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Purple],
    link: '/thorpe-track-pant.html',
  },
  Mithra: {
    name: 'Mithra Warmup Pant',
    price: 'As low as $22.40',
    sizes: Sizes,
    colors: [Colors.Gray, Colors.Green, Colors.Orange],
    link: '/mithra-warmup-pant.html',
  },
  Kratos: {
    name: 'Kratos Gym Pant',
    rating: '73%',
    reviews: '3 Reviews',
    price: 'As low as $45.60',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Green],
    link: '/kratos-gym-pant.html',
  },
  Supernova: {
    name: 'Supernova Sport Pant',
    rating: '87%',
    reviews: '3 Reviews',
    price: 'As low as $36.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Gray, Colors.Green],
    link: '/supernova-sport-pant.html',
  },
  Geo: {
    name: 'Geo Insulated Jogging Pant',
    rating: '70%',
    reviews: '2 Reviews',
    price: 'As low as $40.80',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Red],
    link: '/geo-insulated-jogging-pant.html',
  },
  Viktor: {
    name: 'Viktor LumaTech™ Pant',
    rating: '47%',
    reviews: '3 Reviews',
    price: 'As low as $36.80',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Gray, Colors.Red],
    link: '/viktor-lumatech-trade-pant.html',
  },
  Caesar: {
    name: 'Caesar Warm-Up Pant',
    rating: '47%',
    reviews: '3 Reviews',
    price: 'As low as $28.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Gray, Colors.Purple],
    link: '/caesar-warm-up-pant.html',
  },
};

export const Products = [
  ProductDetails.Cronus,
  ProductDetails.Aether,
  ProductDetails.Orestes,
  ProductDetails.Livingston,
  ProductDetails.Zeppelin,
  ProductDetails.Thorpe,
  ProductDetails.Mithra,
  ProductDetails.Kratos,
  ProductDetails.Supernova,
  ProductDetails.Geo,
  ProductDetails.Viktor,
  ProductDetails.Caesar,
];
