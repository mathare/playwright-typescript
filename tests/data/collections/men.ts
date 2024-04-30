import { Product } from '../products';
import { CollectionExpectedText } from './shared';
import * as Hoodies from '../productCategories/menHoodies';
import * as Pants from '../productCategories/menPants';
import * as Shorts from '../productCategories/menShorts';
import * as Tanks from '../productCategories/menTanks';
import { Links as HeaderLinks } from '../pageHeader';

export const ExpectedText: CollectionExpectedText = {
  Breadcrumbs: 'Home  Men',
  Title: 'Men',
  PromoBlocks: [
    'Luma’s Performance Fabric collection\nGoing the extra mile just got extra comfortable\nShop Performance',
    'Save up to $24!\nBuy 3 Luma tees, get 4 instead\nShop Tees',
    'Last chance\nfor pants\nTake\n20% OFF\nand save bigtime*\nShop Pants',
    'Luma shorts\nCool it now\nShop Shorts',
    'Luma tees\nGrab a tee or two!\nShop Tees',
    'Luma hoodies\nDress for fitness\nShop Hoodies',
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
    HeaderLinks.Topnav.Men,
    HeaderLinks.Topnav.MenSubMenu.Tees,
    HeaderLinks.Topnav.MenSubMenu.Pants,
    HeaderLinks.Topnav.MenSubMenu.Shorts,
    HeaderLinks.Topnav.MenSubMenu.Tees,
    HeaderLinks.Topnav.MenSubMenu.HoodiesSweatshirts,
  ],
};

export const Products: Product[] = [Tanks.Products[5], Hoodies.Products[6], Shorts.Products[9], Pants.Products[9]];
