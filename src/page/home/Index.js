// @flow
import React, {PureComponent} from "react";
import Products from "./Products.js";
import * as Type from "../../type.js";

type Props = {
  basket: Type.Basket,
  onSelectProduct: (id: string, action: "Add" | "Remove") => void,
  skus: Type.Skus,
};

export default class Home extends PureComponent<Props> {
  render() {
    const {basket, onSelectProduct, skus} = this.props;

    return (
      <>
        <div className="content">
          <h1>Welcome</h1>
        </div>
        <Products
          basket={basket}
          onSelectProduct={onSelectProduct}
          skus={skus}
        />
      </>
    );
  }
}
