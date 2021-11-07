import Mock from 'mockjs';

export function resultSuccess(result, {message = 'ok'} = {}){
    return Mock.mock({
        code: 200,
        result,
        message,
        type: 'success'
    })
}