import { Colors } from './shared';

export const ExpectedText = {
  PromoBlocks: [
    'New Luma Yoga Collection Get fit and look fab in new seasonal styles Shop New Yoga',
    '20% OFF Luma pants when you shop today* Shop Pants',
    'Even more ways to mix and match Buy 3 Luma tees get a 4th free Shop Tees',
    'Take it from Erin Luma founder Erin Renny shares her favorites! Shop Erin Recommends',
    'Science meets performance Wicking to raingear, Luma covers you Shop Performance',
    'Twice around, twice as nice Find conscientious, comfy clothing in our eco-friendly collection Shop Eco-Friendly',
  ],
  ContentHeading: 'Hot Sellers Here is what`s trending on Luma right now',
};

const Sizes = ['XS', 'S', 'M', 'L', 'XL'];

export const ProductItemDetails = {
  Products: [
    {
      title: 'Radiant Tee',
      rating: '60%',
      reviews: '3 Reviews',
      price: 'As low as $22.00',
      sizes: Sizes,
      colors: [Colors.ElectricBlue, Colors.Orange, Colors.Pink],
    },
    {
      title: 'Breathe-Easy Tank',
      rating: '70%',
      reviews: '2 Reviews',
      price: 'As low as $34.00',
      sizes: Sizes,
      colors: [Colors.Pink, Colors.White, Colors.Yellow],
    },
    {
      title: 'Argus All-Weather Tank',
      price: 'As low as $22.00',
      sizes: Sizes,
      colors: [Colors.MidGrey],
    },
    {
      title: 'Hero Hoodie',
      price: 'As low as $54.00',
      sizes: Sizes,
      colors: [Colors.Black, Colors.MidGrey, Colors.Green],
    },
    {
      title: 'Fusion Backpack',
      rating: '67%',
      reviews: '3 Reviews',
      price: '$59.00',
    },
    {
      title: 'Push It Messenger Bag',
      rating: '67%',
      reviews: '3 Reviews',
      price: '$45.00',
    },
  ],
};
