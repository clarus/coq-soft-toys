// @flow
import React, {PureComponent} from "react";
import Footer from "./Footer.js";
import NavBar from "./NavBar.js";
import About from "./page/about/Index.js";
import Home from "./page/home/Index.js";
import NotFound from "./page/not-found/Index.js";
import PaymentFailure from "./page/payment-failure/Index.js";
import PaymentSuccess from "./page/payment-success/Index.js";
import Order from "./page/order/Index.js";
import * as OrderState from "./page/order/state.js";
import * as Route from "./route.js";
import * as State from "./state.js";
import * as Type from "./type.js";

type Props = {
  onChangeRoute: (route: Route.t) => void,
  route: ?Route.t,
  onSetState: (state: State.t) => void,
  state: State.t,
};

export default class AppIndex extends PureComponent<Props> {
  handleSelectProduct = (id: string, action: "Add" | "Remove"): void => {
    const {onSetState, state} = this.props;
    const quantity = (state.basket[id] || 0) + (action === "Add" ? +1 : -1);
    const basket = {...state.basket, [id]: quantity};
    const basketWithoutEmpty = Object.keys(basket).reduce(
      (accumulator, id) => ({
        ...accumulator,
        ...(basket[id] ? {[id]: basket[id]} : {}),
      }),
      {},
    );

    onSetState({
      ...state,
      basket: basketWithoutEmpty,
    });
  };

  handleSetState = (order: OrderState.t): void => {
    const {onSetState, state} = this.props;

    onSetState({...state, order});
  };

  renderContent(skus: Type.Skus) {
    const {
      route,
      state: {basket, order},
    } = this.props;

    if (!route) {
      return <NotFound />;
    }

    switch (route.type) {
      case "About":
        return <About />;
      case "Order":
        return (
          <Order
            basket={basket}
            onSetState={this.handleSetState}
            skus={skus}
            state={order}
          />
        );
      case "Home":
        return (
          <Home
            basket={basket}
            onSelectProduct={this.handleSelectProduct}
            skus={skus}
          />
        );
      case "PaymentFailure":
        return <PaymentFailure />;
      case "PaymentSuccess":
        return <PaymentSuccess />;
      default:
        return route;
    }
  }

  renderLoader() {
    return (
      <div className="content">
        <progress className="progress is-primary" max="100">
          Loading...
        </progress>
      </div>
    );
  }

  render() {
    const {
      onChangeRoute,
      route,
      state: {basket, skus},
    } = this.props;

    return (
      <>
        <NavBar
          basket={basket}
          onChangeRoute={onChangeRoute}
          route={route}
          skus={skus}
        />
        <section className="section">
          <div className="container">
            {skus ? this.renderContent(skus) : this.renderLoader()}
          </div>
        </section>
        <Footer />
      </>
    );
  }
}
