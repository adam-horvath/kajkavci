export interface News {
  titleHu: string;
  titleHr: string;
  descriptionHu: string;
  descriptionHr: string;
  imgUrls?: string[];
  portrait?: 'true';
  wide?: 'true';
  small?: 'true';
}

export interface NewsResponse {
  news: News[]
}