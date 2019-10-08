// @flow

export type Fields = {
  acceptConditions: boolean,
  city: string,
  country: string,
  email: string,
  firstName: string,
  lastName: string,
  street: string,
  zipCode: string,
};

export type Status =
  | {
      type: "Error",
      message: string,
    }
  | {
      type: "Loading",
    }
  | {
      type: "Nothing",
    };

export type t = {
  fields: Fields,
  status: Status,
};

export const initialState: t = {
  fields: {
    acceptConditions: false,
    city: "",
    country: "",
    email: "",
    firstName: "",
    lastName: "",
    street: "",
    zipCode: "",
  },
  status: {type: "Nothing"},
};

export type InputName =
  | "city"
  | "country"
  | "email"
  | "firstName"
  | "lastName"
  | "street"
  | "zipCode";

export function setInputField(
  fields: Fields,
  inputName: InputName,
  value: string,
): Fields {
  switch (inputName) {
    case "city":
      return {...fields, city: value};
    case "country":
      return {...fields, country: value};
    case "email":
      return {...fields, email: value};
    case "firstName":
      return {...fields, firstName: value};
    case "lastName":
      return {...fields, lastName: value};
    case "street":
      return {...fields, street: value};
    case "zipCode":
      return {...fields, zipCode: value};
    default:
      return inputName;
  }
}
