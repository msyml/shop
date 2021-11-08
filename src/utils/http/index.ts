import axios from 'axios';
import { messageError } from './checkStatus';

const serves = (serve: string) => {
  const service = axios.create({
    baseURL: serve,
    timeout: 1000,
    headers: {
      common: {
        Authorization: 'Bearer ' + localStorage.token,
      },
    },
  });

  service.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  service.interceptors.response.use(
    (response) => {
      if (response.status === 299) {
        return Promise.reject(response);
      }
      return response;
    },
    (error) => {
      messageError(error.response.status, error.response.msg, {});
      return Promise.reject(error);
    }
  );

  return service;
}

export default serves;
