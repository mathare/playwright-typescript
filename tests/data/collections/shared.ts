export type CollectionExpectedText = {
  Breadcrumbs: string;
  Title: string;
  PromoBlocks: string[];
  ProductsGrid: Record<string, string>;
};

export type Filter = {
  title: string;
  categories: FilterCategory[];
};

type FilterCategory = {
  title: string;
  link: string;
};
