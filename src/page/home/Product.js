// @flow
import React, {PureComponent} from "react";
import * as Util from "../../util.js";

type Props = {
  id: string,
  image: string,
  name: string,
  onSelectProduct: (id: string, action: "Add" | "Remove") => void,
  price: number,
  quantity: number,
};

export default class Product extends PureComponent<Props> {
  handleAdd = () => {
    const {id, onSelectProduct} = this.props;

    onSelectProduct(id, "Add");
  };

  handleRemove = () => {
    const {id, onSelectProduct} = this.props;

    onSelectProduct(id, "Remove");
  };

  render() {
    const {image, name, price, quantity} = this.props;

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
              <h2>
                {name}
                {quantity !== 0 && <small>&nbsp;(x{quantity})</small>}
              </h2>
              <p>{Util.priceToString(price)}&nbsp;€</p>
              <button
                className="button is-danger"
                disabled={quantity === 0}
                onClick={this.handleRemove}
              >
                Remove
              </button>
              <button className="button is-primary" onClick={this.handleAdd}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
