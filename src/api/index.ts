import http from '../utils/http';
import {getDefaultBaseUrl} from '../utils/env';

const defaultBaseUrl = getDefaultBaseUrl();

console.log("defaultBaseUrl",defaultBaseUrl);

const defaultHttp = http(defaultBaseUrl);

export function getProductList(params: any) {
  return defaultHttp.get('/api/product/list', { params: params });
}
