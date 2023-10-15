export default function imputeMissingVals(stockPrices: (number | null)[]): number[] {
  const imputedPrices: number[] = [];
  let previousPrice: number | null = null;

  for (const price of stockPrices) {
    if (price !== null && !isNaN(price)) {
      previousPrice = price;
      imputedPrices.push(price);
    } else if (previousPrice !== null) {
      imputedPrices.push(previousPrice);
    }
  }

  return imputedPrices;
}
