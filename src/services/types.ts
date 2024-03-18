export interface RequestConfig<T> {
  method: string;
  url: string;
  data?: T;
}

export interface ResponseErrorProps {
  error: any; // depend on the response from BE. We don't have a common
  isError: boolean;
  statusCode: number;
}
