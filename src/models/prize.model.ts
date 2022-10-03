export interface Prizes {
  [key: string]: Prize[];
}

export interface Prize {
  month: number;
  day: string;
  location: string;
  titleKey: string;
  images: string[];
}
