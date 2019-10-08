// @flow
import React, {PureComponent} from "react";
import classNames from "classnames";
import A from "./A.js";
import Basket from "./Basket.js";
import * as Route from "./route.js";
import * as Type from "./type.js";

type Props = {
  basket: Type.Basket,
  onChangeRoute: (route: Route.t) => void,
  route: ?Route.t,
  skus: ?Type.Skus,
};

export default class NavBar extends PureComponent<Props> {
  render() {
    const {basket, onChangeRoute, route, skus} = this.props;

    return (
      <nav
        className="navbar has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <A
              className="navbar-item"
              onChangeRoute={onChangeRoute}
              route={{type: "Home"}}
            >
              <strong>
                <span aria-label="rooster" role="img">
                  🐓
                </span>
                &nbsp;Coq&nbsp;Soft&nbsp;Toys
              </strong>
            </A>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              aria-expanded="false"
              aria-label="menu"
              className="navbar-burger burger"
              data-target="navbarBasicExample"
              role="button"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              {skus && <Basket basket={basket} skus={skus} />}
            </div>
            <div className="navbar-end">
              <A
                className={classNames("navbar-item", {
                  "is-active": route && route.type === "About",
                })}
                onChangeRoute={onChangeRoute}
                route={{type: "About"}}
              >
                About
              </A>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
