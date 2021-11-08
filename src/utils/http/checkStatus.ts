
export function messageError(status: number, msg: string, message: any): void {
    switch (status) {
      case 400:
        message.error('错误请求');
        break;
      // 401: 未登录
      // 未登录则跳转登录页面，并携带当前页面的路径
      // 在登录成功后返回当前页面，这一步需要在登录页操作。
      case 401:
        message.error('未授权，请重新登录');
        break;
      case 403:
        message.error('拒绝通知');
        break;
      // 404请求不存在
      case 404:
        message.error('网络请求错误,未找到该资源!');
        break;
      case 405:
        message.error('网络请求错误,请求方法未允许!');
        break;
      case 408:
        message.error('网络请求超时!');
        break;
      case 500:
        message.error(msg);
        break;
      case 501:
        message.error('网络未实现!');
        break;
      case 502:
        message.error('网络错误!');
        break;
      case 503:
        message.error('服务不可用!');
        break;
      case 504:
        message.error('网络超时!');
        break;
      case 505:
        message.error('http版本不支持该请求!');
        break;
      default:
        message.error(msg);
    }
  }
  