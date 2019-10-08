// @flow
import * as Type from "./type.js";

export type t = {
  basket: Type.Basket,
  buyStatus: Type.BuyStatus,
  skus: ?Type.Skus,
};

export const initialState: t = {
  basket: {},
  buyStatus: {type: "Nothing"},
  skus: null,
};
