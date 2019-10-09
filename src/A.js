// @flow
import React, {type Node, PureComponent} from "react";
import * as Route from "./route.js";

type Props = {
  children?: Node,
  className: string,
  onChangeRoute: (route: Route.t) => void,
  route: Route.t,
};

export default class A extends PureComponent<Props> {
  handleSelect = (event: SyntheticEvent<*>): void => {
    const {onChangeRoute, route} = this.props;

    event.preventDefault();
    onChangeRoute(route);
  };

  render() {
    const {children, className, route} = this.props;

    return (
      <a
        className={className}
        href={Route.toUrl(route)}
        onClick={this.handleSelect}
      >
        {children}
      </a>
    );
  }
}
