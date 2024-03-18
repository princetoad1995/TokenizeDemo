export function calculatePercentageChange(
  lastPrice: number,
  openPrice: number,
): string {
  if (!openPrice) {
    return '0';
  }
  const percentageChange = ((lastPrice - openPrice) / openPrice) * 100;
  return percentageChange > 0
    ? '+' + percentageChange.toFixed(2)
    : percentageChange.toFixed(2);
}
