import http from '@/utils/http';
import { getDefaultBaseUrl } from '@/utils/env';

const defaultBaseUrl = getDefaultBaseUrl();

const defaultHttp = http(defaultBaseUrl);

export async function getProductList(params: any) {
  const res = await defaultHttp.get('/api/product/list', { params: params });
  return res.data;
}

export async function getProductDetail(params: any) {
  const res = await defaultHttp.get('/api/product/detail', { params: params });
  return res.data;
}

export async function getCategoryList(params: any) {
  const res = await defaultHttp.get('/api/category/list', { params: params });
  return res.data;
}

export async function getCardList(params: any) {
  const res = await defaultHttp.get('/api/card/list', { params: params });
  return res.data;
}

export async function getOrderList(params: any) {
  const res = await defaultHttp.get('/api/order/list', { params: params });
  return res.data;
}
