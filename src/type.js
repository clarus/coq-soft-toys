// @flow

export type Basket = {
  [id: string]: number,
};

export type BuyStatus =
  | {
      type: "Error",
      message: string,
    }
  | {
      type: "Loading",
    }
  | {
      type: "Nothing",
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
