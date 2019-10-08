// @flow
import React, {PureComponent} from "react";
import Footer from "./Footer.js";
import NavBar from "./NavBar.js";
import About from "./page/about/Index.js";
import Buy from "./page/buy/Index.js";
import Home from "./page/home/Index.js";
import NotFound from "./page/not-found/Index.js";
import PaymentFailure from "./page/payment-failure/Index.js";
import PaymentSuccess from "./page/payment-success/Index.js";
import * as Route from "./route.js";
import * as State from "./state.js";
import * as Type from "./type.js";

type Props = {
  onChangeRoute: (route: Route.t) => void,
  route: ?Route.t,
  state: State.t,
};

export default class AppIndex extends PureComponent<Props> {
  handleSelectProduct = async (id: string): Promise<void> => {
    console.log(id);
  };

  renderContent(skus: Type.Skus) {
    const {
      route,
      state: {basket, buyStatus},
    } = this.props;

    if (!route) {
      return <NotFound />;
    }

    switch (route.type) {
      case "About":
        return <About />;
      case "Buy":
        return <Buy basket={basket} buyStatus={buyStatus} skus={skus} />;
      case "Home":
        return <Home onSelectProduct={this.handleSelectProduct} skus={skus} />;
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
      state: {skus},
    } = this.props;

    return (
      <>
        <NavBar onChangeRoute={onChangeRoute} route={route} />
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
