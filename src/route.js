// @flow

export type t =
  | {
      type: "About",
    }
  | {
      type: "Buy",
    }
  | {
      type: "Home",
    }
  | {
      type: "PaymentFailure",
    }
  | {
      type: "PaymentSuccess",
    };

export function fromUrl(url: string): ?t {
  switch (url) {
    case "/":
      return {type: "Home"};
    case "/about":
      return {type: "About"};
    case "/buy":
      return {type: "Buy"};
    case "/payment-failure":
      return {type: "PaymentFailure"};
    case "/payment-success":
      return {type: "PaymentSuccess"};
    default:
      return null;
  }
}

export function toUrl(route: t): string {
  switch (route.type) {
    case "About":
      return "/about";
    case "Buy":
      return "/buy";
    case "Home":
      return "/";
    case "PaymentFailure":
      return "/payment-failure";
    case "PaymentSuccess":
      return "/payment-success";
    default:
      return route;
  }
}
