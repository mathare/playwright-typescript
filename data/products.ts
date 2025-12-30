export type Product = {
  id: number;
  title: string;
  imgSrc: string;
  description: string;
  price: number | string;
  shortName: string;
  restrictedPurchase: boolean;
};

export const PRODUCT_INFO: Product[] = [
  {
    id: 4,
    title: 'Sauce Labs Backpack',
    imgSrc: '/static/media/sauce-backpack-1200x1500.0a0b85a385945026062b.jpg',
    description:
      'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
    price: 29.99,
    shortName: 'Backpack',
    restrictedPurchase: false,
  },
  {
    id: 0,
    title: 'Sauce Labs Bike Light',
    imgSrc: '/static/media/bike-light-1200x1500.37c843b09a7d77409d63.jpg',
    description:
      "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.",
    price: 9.99,
    shortName: 'Bike Light',
    restrictedPurchase: false,
  },
  {
    id: 1,
    title: 'Sauce Labs Bolt T-Shirt',
    imgSrc: '/static/media/bolt-shirt-1200x1500.c2599ac5f0a35ed5931e.jpg',
    description:
      'Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.',
    price: 15.99,
    shortName: 'Bolt T-Shirt',
    restrictedPurchase: true,
  },
  {
    id: 5,
    title: 'Sauce Labs Fleece Jacket',
    imgSrc: '/static/media/sauce-pullover-1200x1500.51d7ffaf301e698772c8.jpg',
    description:
      "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.",
    price: 49.99,
    shortName: 'Fleece Jacket',
    restrictedPurchase: true,
  },
  {
    id: 2,
    title: 'Sauce Labs Onesie',
    imgSrc: '/static/media/red-onesie-1200x1500.2ec615b271ef4c3bc430.jpg',
    description:
      "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.",
    price: 7.99,
    shortName: 'Onesie',
    restrictedPurchase: false,
  },
  {
    id: 3,
    title: 'Test.allTheThings() T-Shirt (Red)',
    imgSrc: '/static/media/red-tatt-1200x1500.30dadef477804e54fc7b.jpg',
    description:
      'This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.',
    price: 15.99,
    shortName: 'Red T-Shirt',
    restrictedPurchase: true,
  },
  {
    id: 6,
    title: 'ITEM NOT FOUND',
    imgSrc: '/static/media/sl-404.168b1cce10384b857a6f.jpg',
    description:
      "We're sorry, but your call could not be completed as dialled. Please check your number, and try your call again. If you are in need of assistance, please dial 0 to be connected with an operator. This is a recording. 4 T 1.",
    price: '√-1',
    shortName: 'Invalid Product',
    restrictedPurchase: false,
  },
];
