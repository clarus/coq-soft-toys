// @flow
import React, {PureComponent} from "react";

type Props = {};

export default class NotFound extends PureComponent<Props> {
  render() {
    return (
      <>
        <div className="content">
          <h1>Page Not Found</h1>
          <p>
            Get back to the <a href="/">home</a> and start again.
          </p>
        </div>
      </>
    );
  }
}
