// @flow
import React, {PureComponent} from "react";
import Header from "./Header.js";
import Products from "./Products.js";
import configPublic from "./config/public.json";
import * as Type from "./type.js";

type Props = {};

type Skus =
  | {
      type: "Loaded",
      value: Type.Sku[],
    }
  | {
      type: "Loading",
    };

type State = {
  buyStatus: Type.BuyStatus,
  skus: Skus,
};

export default class App extends PureComponent<Props, State> {
  state: State = {
    buyStatus: {type: "Nothing"},
    skus: {type: "Loading"},
  };

  handleBuy = async (id: string): Promise<void> => {
    this.setState({buyStatus: {type: "Loading"}});

    // eslint-disable-next-line no-undef
    const stripe = Stripe(configPublic.stripe.key);
    const result = await stripe.redirectToCheckout({
      cancelUrl: `${configPublic.stripe.url.root}/cancel`,
      items: [{sku: id, quantity: 1}],
      successUrl: `${configPublic.stripe.url.root}/success`,
    });

    if (result.error) {
      this.setState({
        buyStatus: {
          type: "Error",
          message: result.error.message,
        },
      });
    }
  };

  async componentDidMount(): Promise<void> {
    const skus = await (await fetch("http://localhost:4000/skus")).json();

    this.setState({
      skus: {
        type: "Loaded",
        value: skus.data,
      },
    });
  }

  render() {
    const {buyStatus, skus} = this.state;

    return (
      <div>
        <Header buyStatus={buyStatus} />
        {skus.type === "Loaded" ? (
          <Products
            disabled={buyStatus.type !== "Nothing"}
            onBuy={this.handleBuy}
            skus={skus.value}
          />
        ) : (
          "Loading products..."
        )}
      </div>
    );
  }
}
