import { Random } from 'mockjs';
import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from './util';

const addressList = (pageSize: number) => {
  const res: any[] = [];
  for (let i = 0; i < pageSize; i++) {
    res.push({
      id: '@integer(10,99999)',
      name: '@cword(3)',
      title: '@cword(2)',
      city: '@county(true)',
      address: '@cword(3)',
      image: Random.image('4*4', Random.color(), Random.color(), Random.first()),
    });
  }
  return res;
};

const addressDetail = (id: string) => {
  return {
    id,
    name: '@cword(3)',
    title: '@cword(2)',
    city: '@county(true)',
    address: '@cword(3)',
    image: Random.image('4*4', Random.color(), Random.color(), Random.first()),
  };
};

export default [
  {
    url: '/api/address/list',
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 30 } = query;
      const list = addressList(Number(pageSize));
      return resultSuccess({
        page: Number(page),
        pageSize: Number(pageSize),
        pageCount: 50,
        list,
      });
    },
  },
  {
    url: '/api/address/detail',
    method: 'get',
    response: ({ query }) => {
      const { id = 1 } = query;
      const detail = addressDetail(id);
      return resultSuccess({
        ...detail,
      });
    },
  },
] as MockMethod[];
