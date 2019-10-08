// @flow
import React, {PureComponent} from "react";
import Product from "./Product.js";
import * as Type from "../../type.js";

type Props = {
  onSelectProduct: (id: string) => Promise<void>,
  skus: Type.Sku[],
};

export default class Products extends PureComponent<Props> {
  render() {
    const {onSelectProduct, skus} = this.props;

    return (
      <>
        {skus.map(sku => (
          <Product
            id={sku.id}
            image={sku.image}
            key={sku.id}
            name={sku.attributes.name}
            onSelectProduct={onSelectProduct}
            price={sku.price}
          />
        ))}
      </>
    );
  }
}
