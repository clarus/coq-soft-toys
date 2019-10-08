// @flow
import React, {PureComponent} from "react";
import BasketElement from "./BasketElement.js";
import * as Type from "./type.js";

type Props = {
  basket: Type.Basket,
  skus: Type.Skus,
};

export default class Basket extends PureComponent<Props> {
  render() {
    const {basket, skus} = this.props;
    const numberOfElements = Object.keys(basket).reduce(
      (quantity, id) => quantity + basket[id],
      0,
    );

    if (numberOfElements === 0) {
      return <div className="navbar-item">Basket (empty)</div>;
    }

    return (
      <div className="navbar-item has-dropdown is-hoverable">
        <div className="navbar-link">Basket&nbsp;({numberOfElements})</div>
        <div className="navbar-dropdown has-text-centered">
          {Object.keys(basket).map(id => {
            const quantity = basket[id];
            const sku = skus.find(sku => sku.id === id);

            if (sku) {
              const {
                attributes: {name},
                image,
                price,
              } = sku;

              return (
                <BasketElement
                  key={id}
                  image={image}
                  name={name}
                  price={price}
                  quantity={quantity}
                />
              );
            }

            return null;
          })}
          <hr />
          <button className="button is-primary">Order</button>
        </div>
      </div>
    );
  }
}
