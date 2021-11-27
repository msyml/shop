export interface Option {
  icon: string;
  label: string;
  path: string;
}


export interface Order {
  id: string;
  name: string;
  number: number | string;
  type: number | string;
  count: number;
  orderTime: Date;
}

export interface GoingType {
  icon: string;
  desc: string;
}

export interface Address {
  id: string;
  address: string;
  title: string;
  name: string;
  city: string;
  image: string;
}
