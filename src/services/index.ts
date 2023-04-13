import axios, { AxiosRequestConfig } from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const getRequest = (url: string, config?: AxiosRequestConfig) => {
  return axios.get(url, config);
};
