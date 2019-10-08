// @flow
import React, {PureComponent} from "react";
import BasketItem from "./BasketItem.js";
import * as Route from "./route.js";
import * as State from "./state.js";
import * as Type from "./type.js";

type Props = {
  basket: Type.Basket,
  onChangeRoute: (route: Route.t) => void,
  skus: Type.Skus,
};

export default class Basket extends PureComponent<Props> {
  handleSelectOrder = (): void => {
    const {onChangeRoute} = this.props;

    onChangeRoute({type: "Order"});
  };

  render() {
    const {basket, skus} = this.props;
    const numberOfElements = Object.keys(basket).reduce(
      (quantity, id: string) => quantity + basket[id],
      0,
    );

    if (numberOfElements === 0) {
      return <div className="navbar-item">Basket (empty)</div>;
    }

    return (
      <div className="navbar-item has-dropdown is-hoverable">
        <div className="navbar-link" onClick={this.handleSelectOrder}>
          Basket&nbsp;({numberOfElements})
        </div>
        <div className="navbar-dropdown has-text-centered">
          {State.getBasketItems(basket, skus).map(basketItem => (
            <BasketItem key={basketItem.id} {...basketItem} />
          ))}
          <hr />
          <button
            className="button is-primary"
            onClick={this.handleSelectOrder}
          >
            Order
          </button>
        </div>
      </div>
    );
  }
}
