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

  async doOrder(): Promise<void> {
    // this.setState({orderStatus: {type: "Loading"}});
    const {
      basket,
      order: {
        fields: {email},
      },
      skus,
    } = this.state;

    if (skus) {
      // eslint-disable-next-line no-undef
      const stripe = Stripe(configPublic.stripe.key);
      const items = State.getBasketItems(basket, skus).map(
        ({id, quantity}) => ({quantity, sku: id}),
      );
      const result = await stripe.redirectToCheckout({
        cancelUrl: `${configPublic.stripe.url.root}/cancel`,
        customerEmail: email,
        items,
        successUrl: `${configPublic.stripe.url.root}/success`,
      });

      if (result.error) {
        // this.setState({
        //   orderStatus: {
        //     type: "Error",
        //     message: result.error.message,
        //   },
        // });
      }
    }
  }

  handleSelectOrder = (): void => {
    this.doOrder();
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
        onSelectOrder={this.handleSelectOrder}
        onSetState={this.handleSetState}
        route={route}
        state={this.state}
      />
    );
  }
}
