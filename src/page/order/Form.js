// @flow
import React, {PureComponent} from "react";
import Input from "./Input.js";
import * as State from "./state.js";

type Props = {
  fields: State.Fields,
  onSetFields: (fields: State.Fields) => void,
};

export default class OrderForm extends PureComponent<Props> {
  handleChangeConditions = (): void => {
    const {fields, onSetFields} = this.props;

    onSetFields({...fields, acceptConditions: !fields.acceptConditions});
  };

  handleChangeInput = (inputName: State.InputName, value: string): void => {
    const {fields, onSetFields} = this.props;

    onSetFields(State.setInputField(fields, inputName, value));
  };

  render() {
    const {fields} = this.props;

    return (
      <>
        <Input
          id="firstName"
          name="First name"
          onChange={this.handleChangeInput}
          value={fields.firstName}
        />
        <Input
          id="lastName"
          name="Last name"
          onChange={this.handleChangeInput}
          value={fields.lastName}
        />
        <Input
          id="email"
          name="Email"
          onChange={this.handleChangeInput}
          value={fields.email}
        />
        <hr />
        <Input
          id="street"
          name="Street"
          onChange={this.handleChangeInput}
          value={fields.street}
        />
        <Input
          id="city"
          name="City"
          onChange={this.handleChangeInput}
          value={fields.city}
        />
        <Input
          id="zipCode"
          name="Zip code"
          onChange={this.handleChangeInput}
          value={fields.zipCode}
        />
        <Input
          id="country"
          name="Country"
          onChange={this.handleChangeInput}
          value={fields.country}
        />
        <hr />
        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input
                checked={fields.acceptConditions}
                onChange={this.handleChangeConditions}
                type="checkbox"
              />
              &nbsp;I agree to the terms and conditions
            </label>
          </div>
        </div>
      </>
    );
  }
}
