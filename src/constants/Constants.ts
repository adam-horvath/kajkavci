export interface BreakPoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export const breakpoints: BreakPoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export enum BreakPoint {
  XS = 0,
  SM = 576,
  MD = 768,
  LG = 992,
  XL = 1200,
}

export enum Size {
  XS = 'XS',
  SM = 'SM',
  MD = 'MD',
  LG = 'LG',
  XL = 'XL',
}
