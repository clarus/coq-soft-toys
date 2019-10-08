// @flow
import React, {PureComponent} from "react";
import * as State from "../../state.js";
import * as Type from "../../type.js";
import * as Util from "../../util.js";

type Props = {
  basket: Type.Basket,
  skus: Type.Skus,
};

export default class OrderProducts extends PureComponent<Props> {
  render() {
    const {basket, skus} = this.props;

    return (
      <ul>
        {State.getBasketItems(basket, skus).map(
          ({id, name, price, quantity}) => (
            <li key={id}>
              <strong>{name}</strong>&nbsp;x{quantity}:{" "}
              {Util.priceToString(price * quantity)}&nbsp;€
            </li>
          ),
        )}
      </ul>
    );
  }
}
