import { Colors, Product, Sizes } from '../products';

export const ProductDetails: Product = {
  name: 'Radiant Tee',
  rating: '60%',
  reviews: '3 Reviews',
  price: 'As low as $22.00',
  inStock: true,
  sku: 'WS12',
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
};
