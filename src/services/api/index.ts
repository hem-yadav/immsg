import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getApiHost } from './getApiHost'

export interface IRequest<T = any> {
    url: string;
    body?: T;
    cancelToken?: any;
    options?: AxiosRequestConfig;
}
  

const initialAxios = Axios.create({
  baseURL: getApiHost(),
  withCredentials: true,
});

initialAxios.interceptors.request.use((config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

initialAxios.interceptors.response.use((response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const Api = {
  post: <TRequest = any, TResponse = any>({
    url,
    body,
    cancelToken,
    options = {},
  }: IRequest<TRequest>): Promise<AxiosResponse<TResponse>> =>
    initialAxios.post(url, body, { ...options, cancelToken }),

  delete: ({ url, body }: IRequest): Promise<any> =>
    initialAxios.delete(url, {data: body}),

  get: <T = any>({ url, options }: IRequest): Promise<AxiosResponse<T>> =>
    initialAxios.get(url, options).catch((error) => ({ hasError: true, ...error })),

  put: <TRequest = any, TResponse = any>({
    url,
    body,
    options = {},
  }: IRequest<TRequest>): Promise<AxiosResponse<TResponse>> =>
    initialAxios.put(url, body, options),

  patch: <T>({ url, body, options = {} }: IRequest): Promise<AxiosResponse<T>> =>
    initialAxios.patch(url, body, options),
};

export default Api;
