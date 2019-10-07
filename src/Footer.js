// @flow
import React, {PureComponent} from "react";

type Props = {};

export default class Footer extends PureComponent<Props> {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>
              <span aria-label="rooster" role="img">
                🐓
              </span>
              &nbsp;Coq&nbsp;Soft&nbsp;Toys
            </strong>{" "}
            by&nbsp;
            <a href="http://guillaume.claret.me">Guillaume&nbsp;Claret</a>.
            Sources are on&nbsp;
            <a href="https://github.com/clarus/coq-soft-toys">GitHub</a> (
            <a href="https://en.wikipedia.org/wiki/MIT_License">MIT</a>{" "}
            license).
          </p>
        </div>
      </footer>
    );
  }
}
