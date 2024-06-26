import { Product } from '../products';
import { CollectionExpectedText, Filter, ShoppingOptions } from './shared';
import { ProductDetails as Bags } from '../productCategories/gearBags';
import { ProductDetails as Equipment } from '../productCategories/gearFitnessEquipment';
import { Links as HeaderLinks } from '../pageHeader';

export const ExpectedText: CollectionExpectedText = {
  Breadcrumbs: 'Home  Gear',
  Title: 'Gear',
  PromoBlocks: [
    'Sprite Yoga Companion Kit\nSave up to 20% on a bundle!\nShop Yoga Kit',
    'Loosen Up\nExtend your training with yoga straps, tone bands,\nand jump ropes\nShop Fitness',
    'Here’s to you!\n$4 Luma water bottle\n(save 70%)\nEnter promo code H2O\nat check out',
    'Tote, cart or carry\nLuma bags go the distance\nShop Bags',
    'Let’s get after it!\nLuma gym equipment fits your goals and style\nShop Equipment',
    'Luma watches\nKeeping pace has never been more stylish\nShop Watches',
  ],
  ProductsGrid: {
    Title: 'Hot Sellers',
    Subtitle: 'Favorites from Luma shoppers',
  },
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
  },
  PromoBlocks: [
    HeaderLinks.Topnav.Gear,
    HeaderLinks.Topnav.GearSubMenu.FitnessEquipment,
    HeaderLinks.Topnav.GearSubMenu.FitnessEquipment,
    HeaderLinks.Topnav.GearSubMenu.Bags,
    HeaderLinks.Topnav.GearSubMenu.FitnessEquipment,
    HeaderLinks.Topnav.GearSubMenu.Watches,
  ],
};

export const Options: ShoppingOptions = {
  title: 'Shop By',
  subtitle: 'Category',
  categories: [
    {
      title: 'Bags',
      link: HeaderLinks.Topnav.GearSubMenu.Bags,
      count: 14,
    },
    {
      title: 'Fitness Equipment',
      link: HeaderLinks.Topnav.GearSubMenu.FitnessEquipment,
      count: 11,
    },
    {
      title: 'Watches',
      link: HeaderLinks.Topnav.GearSubMenu.Watches,
      count: 9,
    },
  ],
};

export const Filters: Filter[] = [
  {
    title: '',
    categories: [
      { title: 'Bags', link: HeaderLinks.Topnav.GearSubMenu.Bags },
      { title: 'Fitness Equipment', link: HeaderLinks.Topnav.GearSubMenu.FitnessEquipment },
      { title: 'Watches', link: HeaderLinks.Topnav.GearSubMenu.Watches },
    ],
  },
];

export const Products: Product[] = [Bags.Fusion, Bags.PushIt, Equipment.WaterBottle, Equipment.SpriteKit];
