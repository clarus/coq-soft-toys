import React, {PureComponent} from "react";

export default class Header extends PureComponent {
  render() {
    const {buyStatus} = this.props;

    switch (buyStatus.type) {
      case "Nothing":
        return null;
      case "Loading":
        return <p>Please wait...</p>;
      case "Error":
        return <p>An error happened: {buyStatus.message}</p>
      default:
        return buyStatus;
    }
  }
}
