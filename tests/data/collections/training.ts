import { Product } from '../products';
import { CollectionExpectedText, Filter, ShoppingOptions } from './shared';
import { Links as HeaderLinks } from '../pageHeader';

export const ExpectedText: CollectionExpectedText = {
  Breadcrumbs: 'Home  Training',
  Title: 'Training',
  PromoBlocks: [
    'Motivate yourself.\nReach goals.\nBoost ambition.\nMax fitness.\nUpgrade lifestyle.',
    'Before creating Luma, pro trainer Erin Renny helped world-class athletes reach peak fitness\nHand-selected by Erin, our training downloads reflect a commitment to yoga, health and wellness.',
    'Download\nTraining on demand\nLuma downloads to inspire and challenge.\nYour space, your pace\nVideos',
  ],
  ProductsGrid: {
    Title: 'Top Videos',
    Subtitle: 'Stream free with subscription',
  },
};

export const Links = {
  Breadcrumbs: {
    Home: '/',
  },
  PromoBlocks: [
    HeaderLinks.Topnav.Training,
    '/collections/erin-recommends.html',
    HeaderLinks.Topnav.TrainingSubMenu.VideoDownload,
  ],
};

export const Options: ShoppingOptions = {
  title: 'Shop By',
  subtitle: 'Category',
  categories: [
    {
      title: 'Video Download',
      link: HeaderLinks.Topnav.TrainingSubMenu.VideoDownload,
      count: 0,
    },
  ],
};

export const Filters: Filter[] = [];

export const Products: Product[] = [];
