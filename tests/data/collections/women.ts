import { Product } from '../products';
import { CollectionExpectedText } from './shared';
import * as Hoodies from '../productCategories/womenHoodies';
import * as Pants from '../productCategories/womenPants';
import * as Tanks from '../productCategories/womenTanks';
import * as Tees from '../productCategories/womenTees';

export const ExpectedText: CollectionExpectedText = {
  Breadcrumbs: 'Home  Women',
  Title: 'Women',
  PromoBlocks: [
    'New Luma Yoga Collection\nYoga is ancient\nClothing shouldn’t be\nShop New Yoga',
    'You can’t have too many tees\n4 tees for the price of 3. Right now\nWomen’s Tees',
    'Hot pants\nHot deals\n20% OFF\nLuma pants when you shop today*\nShop Pants',
    'What would Erin wear?\nIt’s no secret: see Luma founder Erin Renny’s wardrobe go-to’s\nShop Erin Recommends\t',
    'Luma pants\nPants for yoga, gym and outdoors\nShop Pants',
    'Luma shorts\nExercise comfort\nShop Shorts',
    'Luma Bras\nTanks\nStock up for summer!\nShop Now',
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
};

export const Products: Product[] = [Tees.Products[2], Tanks.Products[0], Hoodies.Products[7], Pants.Products[1]];
