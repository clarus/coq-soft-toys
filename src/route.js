// @flow

export type t =
  | {
      type: "About",
    }
  | {
      type: "Home",
    }
  | {
      type: "PaymentFailure",
    }
  | {
      type: "PaymentSuccess",
    }
  | {
      type: "Order",
    };

export function fromUrl(url: string): ?t {
  switch (url) {
    case "/":
      return {type: "Home"};
    case "/about":
      return {type: "About"};
    case "/payment-failure":
      return {type: "PaymentFailure"};
    case "/payment-success":
      return {type: "PaymentSuccess"};
    case "/order":
      return {type: "Order"};
    default:
      return null;
  }
}

export function toUrl(route: t): string {
  switch (route.type) {
    case "About":
      return "/about";
    case "Home":
      return "/";
    case "PaymentFailure":
      return "/payment-failure";
    case "PaymentSuccess":
      return "/payment-success";
    case "Order":
      return "/order";
    default:
      return route;
  }
}
