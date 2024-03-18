import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ResponseErrorProps } from './types';
import DeviceInfo from 'react-native-device-info';
import Config from 'react-native-config';

class ApiClient {
  private instance: AxiosInstance;
  private token: string | null | undefined;

  constructor() {
    this.instance = axios.create({
      baseURL: Config.API_URL,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Accept: 'application/json, text/plain, */*',
        'TOK-DEVICE-ID': DeviceInfo.getDeviceId(),
      },
    });
    this.instance.interceptors.request.use(
      this.handleRequest,
      this.handleRequestError,
    );
    this.instance.interceptors.response.use(
      this.handleResponse,
      this.handleErrorResponse,
    );
  }

  private handleRequest = async (config: any) => {
    const userAgent = await DeviceInfo.getUserAgent();
    config.headers['user-agent'] = userAgent;
    if (this.token) {
      config.headers.Authorization = `Bearer ${this.token}`;
    }

    return config;
  };

  private handleRequestError = async (error: any) => {
    return Promise.reject(error);
  };

  private handleResponse = async (response: AxiosResponse) => {
    return response.data.data;
  };

  private handleErrorResponse = async (responseError: any) => {
    if (responseError.response) {
      // this is response error from server
      const errorData = responseError.response.data as ResponseErrorProps;
      return Promise.reject(errorData);
    }
    return Promise.reject(responseError);
  };

  public setToken(token: string) {
    this.token = token;
  }

  public getToken() {
    return this.token;
  }

  public async post<T, K>(url: string, data?: T): Promise<K> {
    try {
      const response = await this.instance.post(url, data);
      if ((response as any)?.token) {
        this.setToken((response as any)?.token);
      }
      return response as K;
    } catch (error) {
      throw error;
    }
  }

  public async get<T>(url: string) {
    try {
      const response = await this.instance.get(url);
      return response as T;
    } catch (error) {
      throw error;
    }
  }

  public async put<T, K>(url: string, data?: T) {
    const config = {
      method: 'put',
      url: url,
      data: data,
    };
    try {
      const response = await this.instance.request(config);
      return response as K;
    } catch (error) {
      throw error;
    }
  }

  public async delete<T, K>(url: string, data?: T) {
    const config = {
      method: 'delete',
      url: url,
      data: data,
    };
    try {
      const response = await this.instance.request(config);
      return response as K;
    } catch (error) {
      throw error;
    }
  }
}

export default new ApiClient();
