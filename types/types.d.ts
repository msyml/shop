// 按钮类型
interface ButtonType {
  type: string;
  label: string;
  path?: string;
  action?: string;
}

interface Result<T> {
  code: number;
  result: T;
  message: string;
  type: string;
}

interface PageResult<T> {
    list: T[],
    page: number;
    pageCount: number;
    pageSize: number;
}
