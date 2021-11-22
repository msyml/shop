import { Random } from 'mockjs';
import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from './util';

const productList = (pageSize: number) => {
  const res: any[] = [];
  for (let i = 0; i < pageSize; i++) {
    res.push({
      id: '@integer(10,99999)',
      name: '@cword(1,3)',
      count: '@integer(1,10)',
      unit: 'kg',
      price: '@float(0,10,2,2)',
      image: Random.image('8*8', Random.color(), Random.color(), Random.first()),
    });
  }
  return res;
};

const productDetail = (id: string) => {
  return {
    id: id,
    desc: '@paragraph',
    name: '@cword(1,3)',
    count: '@integer(1,10)',
    unit: 'kg',
    isFavorite: Random.boolean(),
    price: '@float(0,10,2,2)',
    image: Random.image('8*8', Random.color(), Random.color(), Random.first()),
  };
};

export default [
  {
    url: '/api/product/list',
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 10 } = query;
      const list = productList(Number(pageSize));
      return resultSuccess({
        page: Number(page),
        pageSize: Number(pageSize),
        pageCount: 50,
        list,
      });
    },
  },
  {
    url: '/api/product/detail',
    method: 'get',
    response: ({ query }) => {
      const { id = 1 } = query;
      const detail = productDetail(id);
      return resultSuccess({
        ...detail,
      });
    },
  },
] as MockMethod[];
