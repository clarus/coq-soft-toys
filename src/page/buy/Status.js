// @flow
import React, {PureComponent} from "react";
import * as Type from "../../type.js";

type Props = {
  buyStatus: Type.BuyStatus,
};

export default class BuyStatus extends PureComponent<Props> {
  render() {
    const {buyStatus} = this.props;

    switch (buyStatus.type) {
      case "Nothing":
        return null;
      case "Loading":
        return <p>Please wait...</p>;
      case "Error":
        return <p>An error happened: {buyStatus.message}</p>;
      default:
        return buyStatus;
    }
  }
}
