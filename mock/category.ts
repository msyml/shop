import { Random } from 'mockjs';
import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from './util';

const categoryList = (pageSize: number) => {
  const res: any[] = [];
  for (let i = 0; i < pageSize; i++) {
    res.push({
      id: '@integer(10,99999)',
      name: '@cname',
      image: Random.image('8*8', Random.color(), Random.color(), Random.first()),
    });
  }
  return res;
};

export default [
  {
    url: '/api/category/list',
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 10 } = query;
      const list = categoryList(Number(pageSize));
      return resultSuccess({
        page: Number(page),
        pageSize: Number(pageSize),
        pageCount: 50,
        list,
      });
    },
  },
] as MockMethod[];
