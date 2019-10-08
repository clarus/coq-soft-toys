// @flow
import * as OrderState from "./page/order/state.js";
import * as Type from "./type.js";

export type t = {
  basket: Type.Basket,
  order: OrderState.t,
  skus: ?Type.Skus,
};

export const initialState: t = {
  basket: {},
  order: OrderState.initialState,
  skus: null,
};

export type BasketItem = {
  id: string,
  image: string,
  name: string,
  price: number,
  quantity: number,
};

export function getBasketItems(
  basket: Type.Basket,
  skus: Type.Skus,
): BasketItem[] {
  return Object.keys(basket).reduce((accumulator, id: string) => {
    const quantity = basket[id];
    const sku = skus.find(sku => sku.id === id);

    if (sku) {
      const {
        attributes: {name},
        image,
        price,
      } = sku;

      return [...accumulator, {id, image, name, price, quantity}];
    }

    return accumulator;
  }, []);
}
