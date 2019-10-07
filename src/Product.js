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
      <div className="box">
        <div className="columns" style={{alignItems: "center"}}>
          <div className="column">
            <div className="content has-text-centered">
              <img alt="article" src={image} style={{maxHeight: 400}} />
            </div>
          </div>
          <div className="column" style={{justifyContent: "left"}}>
            <div className="content has-text-centered-mobile">
              <h2>{name}</h2>
              <p>{this.priceToString(price)}</p>
              <button
                className="button is-primary"
                disabled={disabled}
                onClick={this.handleBuy}
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
