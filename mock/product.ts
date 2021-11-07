import { Random } from 'mockjs'
import { resultSuccess } from './util';

const productList = (pageSize) => {
    const res: any[] = [];
    for (let i = 0; i < pageSize; i++) {
        res.push({
            id: '@integer(10,99999)',
            name: '@cname',
            image: Random.image('400*400',Random.color(), Random.color(), Random.first())
        })
    }
    return res;
}

export default [
    {
        uri: 'api/product/list',
        timeout: 1000,
        method: 'get',
        response:({ query }) => {
            const {page = 1, pageSize = 10} = query;
            const list = productList(Number(pageSize));
            return resultSuccess({
                page: Number(page),
                pageSize: Number(pageSize),
                pageCount: 50,
                list
            })
        }
    }
]