// @flow
import React, {PureComponent} from "react";

type Props = {
  id: string,
  image: string,
  name: string,
  onSelectProduct: (id: string) => Promise<void>,
  price: number,
};

export default class Product extends PureComponent<Props> {
  handleSelect = () => {
    const {id, onSelectProduct} = this.props;

    onSelectProduct(id);
  };

  priceToString(price: number): string {
    const cents = price % 100;
    const euros = Math.round((price - cents) / 100);

    return `${euros},${String(100 + cents).slice(1)} €`;
  }

  render() {
    const {image, name, price} = this.props;

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
              <button className="button is-primary" onClick={this.handleSelect}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
