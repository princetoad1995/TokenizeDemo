export interface MarketProps {
  title: string;
  list: MarketItemProps[];
}

export interface MarketItemProps {
  id: string;
  marketId: string;
  marketName: string;
  baseCurrency: string;
  marketCurrency: string;
  marketCurrencyLong: string;
  ceiling: string;
  floor: string;
  baseIncrement: null;
  quoteIncrement: null;
  baseMinSize: null;
  baseMaxSize: null;
  tradingStatus: string;
  listRoles: null;
  baseCurrencyTruncate: number;
  priceTruncate: number;
  quoteCurrencyTruncate: number;
  lastPrice: number;
  openPrice: number;
}

export interface SummaryProps {
  marketId: number;
  market: string;
  askPrice: number;
  bidPrice: number;
  lastPrice: number;
  openPrice: number;
  prevPrice: number;
  high: number;
  low: number;
  volume: number;
  listRoles: null;
}
