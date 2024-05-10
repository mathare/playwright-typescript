export type CollectionExpectedText = {
  Breadcrumbs: string;
  Title: string;
  PromoBlocks: string[];
  ProductsGrid: Record<string, string>;
};

export type ShoppingOptions = {
  title: string;
  subtitle: string;
  categories: ShoppingOptionCategory[];
};

type ShoppingOptionCategory = {
  title: string;
  link: string;
  count: number;
};

export type Filter = {
  title: string;
  categories: FilterCategory[];
};

type FilterCategory = {
  title: string;
  link: string;
};
