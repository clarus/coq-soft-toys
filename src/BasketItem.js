// @flow
import React, {PureComponent} from "react";
import * as State from "./state.js";
import * as Util from "./util.js";

type Props = State.BasketItem;

export default class BasketItem extends PureComponent<Props> {
  render() {
    const {image, name, price, quantity} = this.props;

    return (
      <div className="media" style={{minWidth: 250}}>
        <figure className="media-left" style={{marginLeft: 20}}>
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
        <div className="media-right" style={{marginRight: 20}}>
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
