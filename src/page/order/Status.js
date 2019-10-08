// @flow
import React, {PureComponent} from "react";
import * as State from "./state.js";

type Props = {
  status: State.Status,
};

export default class OrderStatus extends PureComponent<Props> {
  render() {
    const {status} = this.props;

    switch (status.type) {
      case "Nothing":
        return null;
      case "Loading":
        return <p>Please wait...</p>;
      case "Error":
        return <p>An error happened: {status.message}</p>;
      default:
        return status;
    }
  }
}
