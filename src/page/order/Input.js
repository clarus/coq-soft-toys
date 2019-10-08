// @flow
import React, {PureComponent} from "react";
import * as State from "./state.js";

type Props = {
  id: State.InputName,
  name: string,
  onChange: (inputName: State.InputName, value: string) => void,
  value: string,
};

export default class OrderInput extends PureComponent<Props> {
  handleChange = (event: SyntheticEvent<HTMLInputElement>): void => {
    const {id, onChange} = this.props;

    onChange(id, event.currentTarget.value);
  };

  render() {
    const {name, value} = this.props;

    return (
      <div className="field">
        <label className="label">{name}</label>
        <div className="control">
          <input
            className="input"
            onChange={this.handleChange}
            placeholder={name}
            type="text"
            value={value}
          />
        </div>
      </div>
    );
  }
}
