// @flow
import React, {PureComponent} from "react";
import OrderForm from "./Form.js";
import OrderProducts from "./Products.js";
import OrderStatus from "./Status.js";
import * as State from "./state.js";
import * as Type from "../../type.js";
import * as Util from "../../util.js";

type Props = {
  basket: Type.Basket,
  onSelectOrder: () => void,
  onSetState: (state: State.t) => void,
  skus: Type.Skus,
  state: State.t,
};

export default class Order extends PureComponent<Props> {
  handleSetFields = (fields: State.Fields): void => {
    const {onSetState, state} = this.props;

    onSetState({...state, fields});
  };

  render() {
    const {
      basket,
      onSelectOrder,
      state: {fields, status},
      skus,
    } = this.props;
    const totalPrice = Object.keys(basket).reduce((price, id: string) => {
      const quantity = basket[id];
      const sku = skus.find(sku => sku.id === id);

      if (sku) {
        return price + quantity * sku.price;
      }

      return price;
    }, 0);

    return (
      <>
        <div className="content">
          <h1>Order</h1>
          <OrderStatus status={status} />
          <div className="columns">
            <div className="column">
              <h2>Basket</h2>
              <OrderProducts basket={basket} skus={skus} />
              <p>
                <strong>Total:</strong> {Util.priceToString(totalPrice)}&nbsp;€
              </p>
            </div>
            <div className="column">
              <h2>Contact</h2>
              <OrderForm
                fields={fields}
                onSelectOrder={onSelectOrder}
                onSetFields={this.handleSetFields}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
