import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from './util';

const orderList = (pageSize: number) => {
  const res: any[] = [];
  for (let i = 0; i < pageSize; i++) {
    res.push({
      id: '@integer(10,99999)',
      name: '@word(4,8)',
      number: '@integer(1,100)',
      type: '@integer(1,2)',
      count: '@integer(100,999)',
      orderTime: '@date("yyyy-MM-dd")',
    });
  }
  return res;
};

export default [
  {
    url: '/api/order/list',
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 30 } = query;
      const list = orderList(Number(pageSize));
      return resultSuccess({
        page: Number(page),
        pageSize: Number(pageSize),
        pageCount: 50,
        list,
      });
    },
  },
] as MockMethod[];
