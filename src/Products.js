import React, {PureComponent} from "react";
import Product from "./Product.js";

export default class Products extends PureComponent {
  render() {
    const {disabled, onBuy, skus} = this.props;

    return (
      <ul>
        {skus.map(sku =>
          <Product
            disabled={disabled}
            id={sku.id}
            image={sku.image}
            key={sku.id}
            name={sku.attributes.name}
            onBuy={onBuy}
            price={sku.price}
          />
        )}
      </ul>
    );
  }
}
