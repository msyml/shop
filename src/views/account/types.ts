export interface Option {
  icon: string;
  label: string;
  path: string;
}

export interface Card {
  id: string;
  number: number | string;
  image: string;
  name: string;
  isCheck: boolean;
}
