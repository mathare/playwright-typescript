import { Links as HeaderLinks } from '../pageHeader';
import { Colors, Product, Sizes } from '../products';
import { FilterCategory, ProductCategoryExpectedText } from './shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Women  Tops  Tees',
  Title: 'Tees',
  ProductCount: '12 Items',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Women: HeaderLinks.Topnav.Women,
    Tops: HeaderLinks.Topnav.WomenSubMenu.Tops,
  },
};

export const Filters: FilterCategory[] = [
  {
    title: 'STYLE',
    options: [
      { title: 'Tee', count: 12, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?style_general=135` },
    ],
  },
  {
    title: 'SIZE',
    options: [
      { title: 'XS', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?size=166` },
      { title: 'S', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?size=167` },
      { title: 'M', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?size=168` },
      { title: 'L', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?size=169` },
      { title: 'XL', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?size=170` },
    ],
  },
  {
    title: 'CLIMATE',
    options: [
      { title: 'Indoor', count: 12, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?climate=204` },
      { title: 'Warm', count: 12, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?climate=208` },
    ],
  },
  {
    title: 'COLOR',
    options: [
      { title: 'Black', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?color=49` },
      { title: 'Blue', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?color=50` },
      { title: 'Gray', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?color=52` },
      { title: 'Green', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?color=53` },
      { title: 'Orange', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?color=56` },
      { title: 'Purple', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?color=57` },
      { title: 'Red', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?color=58` },
      { title: 'White', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?color=59` },
      { title: 'Yellow', link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?color=60` },
    ],
  },
  {
    title: 'ECO COLLECTION',
    options: [
      { title: 'Yes', count: 4, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?eco_collection=1` },
      { title: 'No', count: 8, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?eco_collection=0` },
    ],
  },
  {
    title: 'ERIN RECOMMENDS',
    options: [
      { title: 'Yes', count: 2, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?erin_recommends=1` },
      { title: 'No', count: 10, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?erin_recommends=0` },
    ],
  },
  {
    title: 'MATERIAL',
    options: [
      {
        title: 'Cocona® performance fabric',
        count: 2,
        link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?material=142`,
      },
      { title: 'Cotton', count: 4, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?material=33` },
      { title: 'Hemp', count: 2, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?material=145` },
      { title: 'Lycra®', count: 2, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?material=148` },
      { title: 'Polyester', count: 5, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?material=38` },
      { title: 'Spandex', count: 2, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?material=150` },
      { title: 'HeatTec®', count: 2, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?material=151` },
      { title: 'EverCool™', count: 2, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?material=152` },
      { title: 'Organic Cotton', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?material=153` },
      { title: 'TENCEL', count: 1, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?material=154` },
    ],
  },
  {
    title: 'NEW',
    options: [
      { title: 'Yes', count: 4, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?new=1` },
      { title: 'No', count: 8, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?new=0` },
    ],
  },
  {
    title: 'PATTERN',
    options: [{ title: 'Solid', count: 12, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?pattern=196` }],
  },
  {
    title: 'PERFORMANCE FABRIC',
    options: [
      { title: 'Yes', count: 4, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?performance_fabric=1` },
      { title: 'No', count: 8, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?performance_fabric=0` },
    ],
  },
  {
    title: 'PRICE',
    options: [
      { title: '$20.00 - $29.99', count: 8, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?price=20-30` },
      { title: '$30.00 - $39.99', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?price=30-40` },
      { title: '$40.00 and above', count: 1, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?price=40-` },
    ],
  },
  {
    title: 'SALE',
    options: [
      { title: 'Yes', count: 3, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?sale=1` },
      { title: 'No', count: 9, link: `${HeaderLinks.Topnav.WomenSubMenu.TopsSubMenu.Tees}?sale=0` },
    ],
  },
];

export const ProductDetails: Record<string, Product> = {
  Desiree: {
    name: 'Desiree Fitness Tee',
    rating: '73%',
    reviews: '3 Reviews',
    price: 'As low as $24.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Orange, Colors.Yellow],
    link: '/desiree-fitness-tee.html',
  },
  Gwyn: {
    name: 'Gwyn Endurance Tee',
    rating: '87%',
    reviews: '3 Reviews',
    price: 'As low as $24.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Green, Colors.Yellow],
    link: '/gwyn-endurance-tee.html',
  },
  Radiant: {
    name: 'Radiant Tee',
    rating: '60%',
    reviews: '3 Reviews',
    price: 'As low as $22.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Orange, Colors.Purple],
    link: '/radiant-tee.html',
    images: {
      default: '/w/s/ws12-orange_main_2.jpg',
      colors: ['/w/s/ws12-blue_main_1.jpg', '/w/s/ws12-orange_main_1.jpg', '/w/s/ws12-purple_main_1.jpg'],
      // The tee has 2 different images for the size options
      sizes: [
        '/w/s/ws12-blue_main_1.jpg',
        '/w/s/ws12-blue_main_1.jpg',
        '/w/s/ws12-blue_main_2.jpg',
        '/w/s/ws12-blue_main_2.jpg',
        '/w/s/ws12-blue_main_2.jpg',
      ],
    },
  },
  Diva: {
    name: 'Diva Gym Tee',
    rating: '87%',
    reviews: '3 Reviews',
    price: 'As low as $32.00',
    sizes: Sizes,
    colors: [Colors.Green, Colors.Orange, Colors.Yellow],
    link: '/diva-gym-tee.html',
  },
  Karissa: {
    name: 'Karissa V-Neck Tee',
    rating: '80%',
    reviews: '3 Reviews',
    price: 'As low as $32.00',
    sizes: Sizes,
    colors: [Colors.Green, Colors.Red, Colors.Yellow],
    link: '/karissa-v-neck-tee.html',
  },
  Tiffany: {
    name: 'Tiffany Fitness Tee',
    rating: '73%',
    reviews: '3 Reviews',
    price: 'As low as $28.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Red, Colors.White],
    link: '/tiffany-fitness-tee.html',
  },
  Minerva: {
    name: 'Minerva LumaTech™ V-Tee',
    rating: '47%',
    reviews: '3 Reviews',
    price: 'As low as $32.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.Blue, Colors.Red],
    link: '/minerva-lumatech-trade-v-tee.html',
  },
  Juliana: {
    name: 'Juliana Short-Sleeve Tee',
    rating: '60%',
    reviews: '2 Reviews',
    price: 'As low as $42.00',
    sizes: Sizes,
    colors: [Colors.Black, Colors.White, Colors.Yellow],
    link: '/juliana-short-sleeve-tee.html',
  },
  Elisa: {
    name: 'Elisa EverCool™ Tee',
    price: 'As low as $29.00',
    sizes: Sizes,
    colors: [Colors.Grey, Colors.Purple, Colors.Red],
    link: '/elisa-evercool-trade-tee.html',
  },
  Layla: {
    name: 'Layla Tee',
    rating: '60%',
    reviews: '2 Reviews',
    price: 'As low as $29.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Red],
    link: '/layla-tee.html',
  },
  Iris: {
    name: 'Iris Workout Top',
    rating: '60%',
    reviews: '4 Reviews',
    price: 'As low as $29.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Red],
    link: '/iris-workout-top.html',
  },
  Gabrielle: {
    name: 'Gabrielle Micro Sleeve Top',
    rating: '73%',
    reviews: '3 Reviews',
    price: 'As low as $28.00',
    sizes: Sizes,
    colors: [Colors.Blue, Colors.Green, Colors.Red],
    link: '/gabrielle-micro-sleeve-top.html',
  },
};

export const Products = [
  ProductDetails.Desiree,
  ProductDetails.Gwyn,
  ProductDetails.Radiant,
  ProductDetails.Diva,
  ProductDetails.Karissa,
  ProductDetails.Tiffany,
  ProductDetails.Minerva,
  ProductDetails.Juliana,
  ProductDetails.Elisa,
  ProductDetails.Layla,
  ProductDetails.Iris,
  ProductDetails.Gabrielle,
];
