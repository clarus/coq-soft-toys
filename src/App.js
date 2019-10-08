// @flow
import React, {Component} from "react";
import AppIndex from "./AppIndex.js";
import "./style.sass";
import configPublic from "./config/public.json";
import * as Route from "./route.js";
import * as State from "./state.js";

type Props = {
  onRender: () => void,
};

export default class App extends Component<Props, State.t> {
  state: State.t = State.initialState;

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

  handleChangeRoute = (route: Route.t): void => {
    const {onRender} = this.props;

    window.history.pushState({}, "", Route.toUrl(route));
    onRender();
  };

  handleSetState = (state: State.t): void => {
    this.setState(state);
  };

  async componentDidMount(): Promise<void> {
    const skus = await (await fetch("http://localhost:4000/skus")).json();

    this.setState({skus: skus.data});
  }

  render() {
    const route = Route.fromUrl(window.location.pathname);

    return (
      <AppIndex
        onChangeRoute={this.handleChangeRoute}
        onSetState={this.handleSetState}
        route={route}
        state={this.state}
      />
    );
  }
}
