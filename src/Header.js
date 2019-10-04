import React, {PureComponent} from "react";

export default class Header extends PureComponent {
  render() {
    const {buyStatus} = this.props;

    switch (buyStatus.type) {
      case "Nothing":
        return null;
      case "Loading":
        return <p>Veuillez patienter...</p>;
      case "Error":
        return <p>Une erreur est survenue: {buyStatus.message}</p>
    }
  }
}
