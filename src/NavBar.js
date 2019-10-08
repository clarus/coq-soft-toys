// @flow
import React, {PureComponent} from "react";
import classNames from "classnames";
import A from "./A.js";
import * as Route from "./route.js";

type Props = {
  onChangeRoute: (route: Route.t) => void,
  route: ?Route.t,
};

export default class NavBar extends PureComponent<Props> {
  render() {
    const {onChangeRoute, route} = this.props;

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
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary" href="/signup">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light" href="/login">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
