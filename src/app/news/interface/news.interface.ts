export interface NewsArticle {
  content: string;
  coverImageUrl?: string;
  description: NewsDescription | string;
  subtitle: string;
  title: string;
  url: string;
}

export interface NewsDescription {
  point: string;
  actionDate: string;
  noOfComment: string;
}
