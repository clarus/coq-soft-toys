import React, {PureComponent} from "react";

export default class Product extends PureComponent {
  handleBuy = () => {
    const {id, onBuy} = this.props;

    onBuy(id);
  };

  priceToString(price) {
    const cents = price % 100;
    const euros = Math.round((price - cents) / 100);

    return `${euros},${String(100 + cents).slice(1)} €`;
  }

  render() {
    const {disabled, image, name, price} = this.props;

    return (
      <li>
        {name}
        <img alt="article" src={image} />
        {this.priceToString(price)}
        <button disabled={disabled} onClick={this.handleBuy}>
          Buy
        </button>
      </li>
    );
  }
}
