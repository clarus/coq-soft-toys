// @flow
import React, {PureComponent} from "react";
import OrderForm from "./Form.js";
import OrderProducts from "./Products.js";
import OrderStatus from "./Status.js";
import * as State from "./state.js";
import * as Type from "../../type.js";

type Props = {
  basket: Type.Basket,
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
      state: {fields, status},
      skus,
    } = this.props;

    return (
      <>
        <div className="content">
          <h1>Order</h1>
          <OrderStatus status={status} />
          <div className="columns">
            <div className="column">
              <h2>Basket</h2>
              <OrderProducts basket={basket} skus={skus} />
            </div>
            <div className="column">
              <h2>Contact</h2>
              <OrderForm fields={fields} onSetFields={this.handleSetFields} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
