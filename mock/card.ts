import { Random } from 'mockjs';
import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from './util';

const cardList = (pageSize: number) => {
  const res: any[] = [];
  for (let i = 0; i < pageSize; i++) {
    res.push({
      id: '@integer(10,99999)',
      name: '@word(4,8)',
      number: '@integer(1000000000000000,9999999999999999)',
      isCheck: '@boolean',
      image: Random.image('4*4', Random.color(), Random.color(), Random.first()),
    });
  }
  return res;
};

export default [
  {
    url: '/api/card/list',
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 30 } = query;
      const list = cardList(Number(pageSize));
      return resultSuccess({
        page: Number(page),
        pageSize: Number(pageSize),
        pageCount: 50,
        list,
      });
    },
  },
] as MockMethod[];
