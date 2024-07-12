import { Links as HeaderLinks } from '../pageHeader';
import { Product } from '../products';
import { FilterCategory, ProductCategoryExpectedText } from './shared';

export const ExpectedText: ProductCategoryExpectedText = {
  Breadcrumbs: 'Home  Gear  Bags',
  Title: 'Bags',
  ProductCount: 'Items 1-12 of 14',
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
    Gear: HeaderLinks.Topnav.Gear,
  },
};

export const Filters: FilterCategory[] = [
  {
    title: 'STYLE',
    options: [
      { title: 'Backpack', count: 4, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?style_bags=24` },
      { title: 'Luggage', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?style_bags=25` },
      { title: 'Duffel', count: 2, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?style_bags=26` },
      { title: 'Messenger', count: 4, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?style_bags=27` },
      { title: 'Laptop', count: 6, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?style_bags=28` },
      { title: 'Exercise', count: 6, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?style_bags=29` },
      { title: 'Tote', count: 4, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?style_bags=30` },
    ],
  },
  {
    title: 'ACTIVITY',
    options: [
      { title: 'Yoga', count: 6, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?activity=8` },
      { title: 'Gym', count: 9, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?activity=11` },
      { title: 'Hiking', count: 4, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?activity=18` },
      { title: 'Overnight', count: 4, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?activity=19` },
      { title: 'School', count: 6, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?activity=20` },
      { title: 'Trail', count: 2, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?activity=21` },
      { title: 'Travel', count: 5, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?activity=22` },
      { title: 'Urban', count: 5, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?activity=23` },
    ],
  },
  {
    title: 'ERIN RECOMMENDS',
    options: [{ title: 'Yes', count: 3, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?erin_recommends=1` }],
  },
  {
    title: 'FEATURES',
    options: [
      { title: 'Wheeled', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?features_bags=70` },
      { title: 'Hydration Pocket', count: 2, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?features_bags=71` },
      { title: 'Audio Pocket', count: 6, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?features_bags=72` },
      { title: 'Flapover', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?features_bags=73` },
      { title: 'Waterproof', count: 8, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?features_bags=74` },
      { title: 'Lightweight', count: 10, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?features_bags=75` },
      { title: 'TSA Approved', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?features_bags=76` },
      { title: 'Reflective', count: 5, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?features_bags=77` },
      { title: 'Laptop Sleeve', count: 7, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?features_bags=78` },
      { title: 'Lockable', count: 6, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?features_bags=79` },
    ],
  },
  {
    title: 'MATERIAL',
    options: [
      { title: 'Burlap', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?material=31` },
      { title: 'Canvas', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?material=32` },
      { title: 'Cotton', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?material=33` },
      { title: 'Leather', count: 2, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?material=35` },
      { title: 'Mesh', count: 3, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?material=36` },
      { title: 'Nylon', count: 11, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?material=37` },
      { title: 'Polyester', count: 11, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?material=38` },
      { title: 'Rayon', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?material=39` },
      { title: 'Suede', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?material=41` },
    ],
  },
  {
    title: 'NEW',
    options: [{ title: 'Yes', count: 3, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?new=1` }],
  },
  {
    title: 'PERFORMANCE FABRIC',
    options: [{ title: 'Yes', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?performance_fabric=1` }],
  },
  {
    title: 'PRICE',
    options: [
      { title: '$20.00 - $29.99', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?price=20-30` },
      { title: '$30.00 - $39.99', count: 7, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?price=30-40` },
      { title: '$40.00 - $49.99', count: 4, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?price=40-50` },
      { title: '$50.00 - $59.99', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?price=50-60` },
      { title: '$70.00 and above', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?price=70-` },
    ],
  },
  {
    title: 'SALE',
    options: [{ title: 'Yes', count: 3, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?sale=1` }],
  },
  {
    title: 'STRAP/HANDLE',
    options: [
      { title: 'Adjustable', count: 11, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?strap_bags=61` },
      { title: 'Cross Body', count: 4, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?strap_bags=62` },
      { title: 'Detachable', count: 2, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?strap_bags=63` },
      { title: 'Double', count: 9, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?strap_bags=64` },
      { title: 'Padded', count: 7, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?strap_bags=65` },
      { title: 'Shoulder', count: 7, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?strap_bags=66` },
      { title: 'Single', count: 4, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?strap_bags=67` },
      { title: 'Telescoping', count: 1, link: `${HeaderLinks.Topnav.GearSubMenu.Bags}?strap_bags=68` },
    ],
  },
];

export const ProductDetails: Record<string, Product> = {
  PushIt: {
    name: 'Push It Messenger Bag',
    rating: '67%',
    reviews: '3 Reviews',
    inStock: true,
    sku: '24-WB04',
    price: '$45.00',
    link: '/push-it-messenger-bag.html',
    images: { default: '/w/b/wb04-blue-0.jpg' },
    description:
      "The name says so, but the Push It Messenger Bag is much more than a busy commuter's tote. It's a closet away from home when you're pedaling from class or work to gym and back or home again. It's the perfect size and shape for laptop, folded clothes, even extra shoes.\n\nAdjustable crossbody strap.\nTop handle.\nZippered interior pocket.\nSecure clip closures.\nDurable fabric construction.",
    additionalInfo:
      'Activity\tYoga, School, Urban\nStyle\tMessenger, Laptop\nMaterial\tNylon, Polyester\nStrap/Handle\tAdjustable, Cross Body, Detachable, Padded, Shoulder, Single\nFeatures\tWaterproof, Lightweight, Laptop Sleeve, Lockable',
    reviewDetails: [
      {
        title: 'I bike four miles a day to work and back',
        rating: '80%',
        reviewText:
          "I bike four miles a day to work and back and I love this thing. It's a good size and it's pretty comfortable to wear across my back while I ride. So far I have not noticed much wear and tear on the fabric and I've had it for 6 months.",
        reviewer: 'Sadye',
        date: '3/11/23',
      },
      {
        title: 'I would love this bag EXCEPT . . .',
        rating: '60%',
        reviewText:
          "I would love this bag EXCEPT with the case on my Iphone won't fit in the cell phone pocket! Why make a pocket for cell phones if it's not going to fit an Iphone.",
        reviewer: 'Adena',
        date: '3/11/23',
      },
      {
        title: "it's really ugly,",
        rating: '60%',
        reviewText:
          "Its fine I guess but it's really ugly, I picked out a really cute bag for college but my mom got me this one instead.",
        reviewer: 'Tracee',
        date: '3/11/23',
      },
    ],
  },
  Overnight: {
    name: 'Overnight Duffle',
    rating: '60%',
    reviews: '3 Reviews',
    price: '$45.00',
    link: '/overnight-duffle.html',
  },
  Driven: {
    name: 'Driven Backpack',
    rating: '90%',
    reviews: '2 Reviews',
    price: '$36.00',
    link: '/driven-backpack.html',
  },
  Endeavor: {
    name: 'Endeavor Daytrip Backpack',
    rating: '73%',
    reviews: '3 Reviews',
    price: '$33.00',
    link: '/endeavor-daytrip-backpack.html',
  },
  Savvy: {
    name: 'Savvy Shoulder Tote',
    rating: '80%',
    reviews: '2 Reviews',
    price: 'Special Price\n$24.00 Regular Price $32.00',
    link: '/savvy-shoulder-tote.html',
  },
  Compete: {
    name: 'Compete Track Tote',
    rating: '70%',
    reviews: '2 Reviews',
    price: '$32.00',
    link: '/compete-track-tote.html',
  },
  Voyage: {
    name: 'Voyage Yoga Bag',
    rating: '67%',
    reviews: '3 Reviews',
    price: '$32.00',
    link: '/voyage-yoga-bag.html',
  },
  Impulse: {
    name: 'Impulse Duffle',
    rating: '80%',
    reviews: '3 Reviews',
    price: '$74.00',
    link: '/impulse-duffle.html',
  },
  Fusion: {
    name: 'Fusion Backpack',
    rating: '67%',
    reviews: '3 Reviews',
    inStock: true,
    sku: '24-MB02',
    price: '$59.00',
    link: '/fusion-backpack.html',
    images: { default: '/m/b/mb02-gray-0.jpg', thumbnails: ['/m/b/mb02-gray-0.jpg', '/m/b/mb02-blue-0.jpg'] },
    description: `With the Fusion Backpack strapped on, every trek is an adventure - even a bus ride to work. That's partly because two large zippered compartments store everything you need, while a front zippered pocket and side mesh pouches are perfect for stashing those little extras, in case you change your mind and take the day off.\n\nDurable nylon construction.\n2 main zippered compartments.\n1 exterior zippered pocket.\nMesh side pouches.\nPadded, adjustable straps.\nTop carry handle.\nDimensions: 18" x 10" x 6".`,
    additionalInfo:
      'Activity\tYoga, Hiking, School\nStyle\tBackpack, Laptop\nMaterial\tBurlap, Nylon, Polyester\nStrap/Handle\tAdjustable, Double, Padded\nFeatures\tHydration Pocket, Audio Pocket, Waterproof, Lightweight',
    reviewDetails: [
      {
        title: "I've had this thing for really long",
        rating: '100%',
        reviewText:
          "I've had this thing for a really long time and it barely shows any signs of wear and tear. It's really big, too! I've taken it on day trips as well as short vacations and usually have no trouble finding room for my stuff.",
        reviewer: 'Herb',
        date: '3/11/23',
      },
      {
        title: 'Decent bag',
        rating: '60%',
        reviewText:
          "Decent bag. I keep my stuff in it for work and the gym. It's nice and roomy. I wish it had a more sophisticated design, though. Kinda looks like it's for kids.",
        reviewer: 'Craig',
        date: '3/11/23',
      },
      {
        title: 'Screwed up my back',
        rating: '40%',
        reviewText:
          'I can\'t believe they\'re claiming these straps are "padded." Wearing this thing to class for a semester totally screwed up my back, and my shoulders would start to ache after a few minutes where the straps dug in.',
        reviewer: 'Orville',
        date: '3/11/23',
      },
    ],
  },
  Rival: {
    name: 'Rival Field Messenger',
    rating: '70%',
    reviews: '2 Reviews',
    price: '$45.00',
    link: '/rival-field-messenger.html',
  },
  Wayfarer: {
    name: 'Wayfarer Messenger Bag',
    rating: '67%',
    reviews: '3 Reviews',
    price: '$45.00',
    link: '/wayfarer-messenger-bag.html',
  },
  Crown: {
    name: 'Crown Summit Backpack',
    rating: '67%',
    reviews: '3 Reviews',
    price: '$38.00',
    link: '/crown-summit-backpack.html',
  },
  Strive: {
    name: 'Strive Shoulder Pack',
    rating: '90%',
    reviews: '2 Reviews',
    price: '$32.00',
    link: '/strive-shoulder-pack.html',
  },
  Joust: {
    name: 'Joust Duffle Bag',
    rating: '50%',
    reviews: '2 Reviews',
    price: '$34.00',
    link: '/joust-duffle-bag.html',
  },
};

export const Products = [
  ProductDetails.PushIt,
  ProductDetails.Overnight,
  ProductDetails.Driven,
  ProductDetails.Endeavor,
  ProductDetails.Savvy,
  ProductDetails.Compete,
  ProductDetails.Voyage,
  ProductDetails.Impulse,
  ProductDetails.Fusion,
  ProductDetails.Rival,
  ProductDetails.Wayfarer,
  ProductDetails.Crown,
  ProductDetails.Strive,
  ProductDetails.Joust,
];
