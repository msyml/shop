import http from '../utils/http';

const defaultHttp = http("");

export function getProductList(params: any) {
  return defaultHttp.get('/api/product/list', { params: params });
}
