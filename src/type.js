// @flow

export type Basket = {
  [id: string]: number,
};

export type Sku = {
  attributes: {
    name: string,
  },
  id: string,
  image: string,
  price: number,
};

export type Skus = Sku[];
