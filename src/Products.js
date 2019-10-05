// @flow
import React, {PureComponent} from "react";
import Product from "./Product.js";
import * as Type from "./type.js";

type Props = {
  disabled: boolean,
  onBuy: (id: string) => Promise<void>,
  skus: Type.Sku[],
};

export default class Products extends PureComponent<Props> {
  render() {
    const {disabled, onBuy, skus} = this.props;

    return (
      <ul>
        {skus.map(sku => (
          <Product
            disabled={disabled}
            id={sku.id}
            image={sku.image}
            key={sku.id}
            name={sku.attributes.name}
            onBuy={onBuy}
            price={sku.price}
          />
        ))}
      </ul>
    );
  }
}
