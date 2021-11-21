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
  list: T[];
  page: number;
  pageCount: number;
  pageSize: number;
}

interface Category {
  id: string;
  name: string;
  image: string;
}

interface Product {
  id: string;
  name: string;
  count: number;
  image: string;
  price: number;
  unit: string;
}
