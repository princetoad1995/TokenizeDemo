import { MarketProps, SummaryProps } from '@/models';
import ApiClient from '../ApiClient';

class UserServices {
  public static async getMarkets() {
    try {
      const response: MarketProps[] = await ApiClient.get(
        '/mobile-api/market/getmarkets',
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  public static async getSummaries() {
    try {
      const response: SummaryProps[] = await ApiClient.get(
        '/public/v1/market/get-summaries',
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default UserServices;
