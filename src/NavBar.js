// @flow
import React, {PureComponent} from "react";

type Props = {};

export default class NavBar extends PureComponent<Props> {
  render() {
    return (
      <nav
        className="navbar has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <strong>
                <span aria-label="rooster" role="img">
                  🐓
                </span>
                &nbsp;Coq&nbsp;Soft&nbsp;Toys
              </strong>
            </a>
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
              <a
                className="navbar-item"
                href="https://github.com/clarus/coq-soft-toys"
              >
                GitHub
              </a>
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
