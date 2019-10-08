// @flow
import React, {PureComponent} from "react";
import Products from "./Products.js";
import * as Type from "../../type.js";

type Props = {
  onSelectProduct: (id: string) => Promise<void>,
  skus: Type.Skus,
};

export default class Home extends PureComponent<Props> {
  render() {
    const {onSelectProduct, skus} = this.props;

    return (
      <>
        <div className="content">
          <h1>Welcome</h1>
        </div>
        <Products onSelectProduct={onSelectProduct} skus={skus} />
      </>
    );
  }
}
