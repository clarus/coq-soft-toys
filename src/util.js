// @flow

export function priceToString(price: number): string {
  const cents = price % 100;
  const euros = Math.round((price - cents) / 100);

  return `${euros},${String(100 + cents).slice(1)}`;
}
