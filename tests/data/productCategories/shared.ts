export type ProductCategoryExpectedText = {
  Breadcrumbs: string;
  Title: string;
  ProductCount: string;
};

export type FilterCategory = {
  title: string;
  options: Filter[];
};

type Filter = {
  title: string;
  count?: number;
  link: string;
};
