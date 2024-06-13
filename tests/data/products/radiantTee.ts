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
    thumbnails: ['/w/s/ws12-orange_main_2.jpg', '/w/s/ws12-orange_back_2.jpg'],
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
  description:
    "So light and comfy, you'll love the Radiant Tee's organic fabric, feel, performance and style. You may never want to stop moving in this shirt.\n\n• Salmon soft scoop neck tee.\n• Athletic, semi-form fit.\n• Flat seams prevent chafing.\n• 67% Organic Cotton / 28% Hemp / 5% Spandex.",
  additionalInfo: 'Style\tTee\nMaterial\tHemp, Spandex, Organic Cotton\nPattern\tSolid\nClimate\tIndoor, Warm',
  reviewDetails: [
    {
      title: 'cool and dry',
      rating: '60%',
      reviewText:
        "What I rally love here is that it does the job of keeping me cool and dry. I'm a big guy and sweat A LOT! Even after a day of gulf, I'm still dry and comfortable. The problem is that the sleeves are very tight - actually bought a second shirt because i split the armpit/sleeve area of the first. Do yourself a favor and order a size bigger.",
      reviewer: 'Lakeisha',
      date: '3/11/23',
    },
    {
      title: 'Not great',
      rating: '40%',
      reviewText:
        "Not great - buttons are too small and hurt my fingers trying to button it. I've seen better designs...",
      reviewer: 'Collette',
      date: '3/11/23',
    },
    {
      title: 'What a versatile shirt!',
      rating: '80%',
      reviewText:
        "What a versatile shirt! Not only does it feel very soft compared to my old worn out polos, but it also does the job promised. I like going out after my gamefor drinks so I look good then too and don't need to change into something fresh.",
      reviewer: 'Adaline',
      date: '3/11/23',
    },
  ],
};
