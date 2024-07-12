export const Sizes = ['XS', 'S', 'M', 'L', 'XL'];

export const Colors = {
  Black: 'rgb(0, 0, 0)',
  Blue: 'rgb(24, 87, 247)',
  Brown: 'rgb(148, 84, 84)',
  DarkGrey: 'rgb(51, 51, 51)',
  Green: 'rgb(83, 168, 40)',
  Gray: 'rgb(143, 143, 143)',
  Lavender: 'rgb(206, 100, 212)',
  LightGrey: 'rgb(240, 240, 240)',
  Orange: 'rgb(235, 103, 3)',
  Purple: 'rgb(239, 61, 255)',
  Red: 'rgb(255, 0, 0)',
  White: 'rgb(255, 255, 255)',
  Yellow: 'rgb(255, 213, 0)',
  Swatch: {
    Selected: 'rgb(255, 85, 1)',
    Size: {
      Hovered: 'rgb(153, 153, 153)',
      NotSelected: 'rgb(148, 148, 148)',
    },
    Color: {
      Hovered: 'rgb(195, 64, 0)',
    },
  },
};

export const SwatchOutlineStyles = {
  Sizes: {
    Selected: `${Colors.Swatch.Selected} solid 2px`,
    NotSelected: `${Colors.Swatch.Size.NotSelected} none 0px`,
    Hovered: `${Colors.Swatch.Size.Hovered} solid 1px`,
  },
  Colors: {
    Selected: `${Colors.Swatch.Selected} solid 2px`,
    Hovered: `${Colors.Swatch.Color.Hovered} solid 2px`,
  },
};

type Review = {
  title: string;
  rating: string;
  reviewText: string;
  reviewer: string;
  date: string;
};

export type Product = {
  name: string;
  rating?: string;
  reviews?: string;
  price: string;
  inStock?: boolean;
  sku?: string;
  sizes?: string[];
  colors?: string[];
  link: string;
  images?: Record<string, string | string[]>;
  description?: string;
  additionalInfo?: string;
  reviewDetails?: Review[];
};
