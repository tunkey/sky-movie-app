import axios from 'axios';

import { API } from '../constants/api';

const { HOST, KEY } = API;

const TIMEOUT = 1 * 60 * 1000;
axios.defaults.timeout = TIMEOUT;
axios.defaults.baseURL = HOST;

const setupAxiosInterceptors = onUnauthenticated => {
  const onRequestSuccess = config => {
    config.params = { ...config.params, api_key: KEY };
    return config;
  };
  const onResponseSuccess = response => response;
  const onResponseError = err => {
    const status = err.status || (err.response ? err.response.status : 0);
    if (status === 403 || status === 401) {
      onUnauthenticated();
    }
    return Promise.reject(err);
  };
  axios.interceptors.request.use(onRequestSuccess);
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

export default setupAxiosInterceptors;
