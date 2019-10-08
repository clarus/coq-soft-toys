// @flow
import React, {PureComponent} from "react";
import BuyStatus from "./Status.js";
import * as Type from "../../type.js";

type Props = {
  basket: Type.Basket,
  buyStatus: Type.BuyStatus,
  skus: Type.Skus,
};

export default class Buy extends PureComponent<Props> {
  render() {
    const {buyStatus} = this.props;

    return (
      <>
        <div className="content">
          <h1>Buy</h1>
          <BuyStatus buyStatus={buyStatus} />
        </div>
      </>
    );
  }
}
