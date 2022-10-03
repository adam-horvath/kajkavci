export interface Concert {
  month: number;
  day: string;
  location: string;
  isoDate?: string;
  country?: Country;
}

export enum Country {
  HR = 'HR',
  AT = 'AT',
  SK = 'SK',
}

export interface Concerts {
  [key: string]: Concert[];
}
