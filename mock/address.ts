import { Random } from 'mockjs';
import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from './util';

const addressList = (pageSize: number) => {
  const res: any[] = [];
  for (let i = 0; i < pageSize; i++) {
    res.push({
      id: '@integer(10,99999)',
      name: '@cword(3)',
      address: '@county(true)',
      image: Random.image('4*4', Random.color(), Random.color(), Random.first()),
    });
  }
  return res;
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
] as MockMethod[];
