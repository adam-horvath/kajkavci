export interface News {
  titleHu: string;
  titleHr: string;
  descriptionHu: string;
  descriptionHr: string;
  imgUrls?: string[];
  portrait?: 'true';
}

export interface NewsResponse {
  news: News[]
}