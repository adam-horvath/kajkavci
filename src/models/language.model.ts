export interface Language {
  flag: string;
  code: SupportedLanguage;
  label: string;
}

export enum SupportedLanguage {
  HU = 'hu',
  HR = 'hr',
}
