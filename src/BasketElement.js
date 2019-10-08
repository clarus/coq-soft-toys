// @flow
import React, {PureComponent} from "react";
import * as Util from "./util.js";

type Props = {
  image: string,
  name: string,
  price: number,
  quantity: number,
};

export default class BasketElement extends PureComponent<Props> {
  render() {
    const {image, name, price, quantity} = this.props;

    return (
      <div className="media" style={{minWidth: 200}}>
        <figure className="media-left">
          <p className="image">
            <img alt="article preview" src={image} />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <small>x{quantity}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="content">
            <p>
              <small>{Util.priceToString(price * quantity)}&nbsp;€</small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
