import React, {PureComponent} from "react";
import Header from "./Header.js";
import Product from "./Product.js";
import keys from "./keys.json";
import products from "./products.json";

// eslint-disable-next-line no-undef
const stripe = Stripe(keys.stripe);

export default class App extends PureComponent {
  state = {
    buyStatus: {type: "Nothing"},
  };

  handleBuy = async (id) => {
    this.setState({buyStatus: {type: "Loading"}});

    const result = await stripe.redirectToCheckout({
      items: [
        {sku: id, quantity: 1}
      ],
      successUrl: "https://example.com/success",
      cancelUrl: "https://example.com/cancel",
    });

    if (result.error) {
      this.setState({
        buyStatus: {
          type: "Error",
          message: result.error.message,
        }
      });
    }
  };

  render() {
    const {buyStatus} = this.state;

    return (
      <div>
        <Header buyStatus={buyStatus} />
        <ul>
          {products.map(product =>
            <Product
              disabled={buyStatus.type !== "Nothing"}
              id={product.id}
              image={product.image}
              key={product.id}
              name={product.name}
              onBuy={this.handleBuy}
              price={product.price}
            />
          )}
        </ul>
      </div>
    );
  }
}
