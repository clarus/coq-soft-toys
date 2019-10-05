// @flow
import React, {PureComponent} from "react";

type Props = {
  disabled: boolean,
  id: string,
  image: string,
  name: string,
  onBuy: (id: string) => Promise<void>,
  price: number,
};

export default class Product extends PureComponent<Props> {
  handleBuy = () => {
    const {id, onBuy} = this.props;

    onBuy(id);
  };

  priceToString(price: number): string {
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
