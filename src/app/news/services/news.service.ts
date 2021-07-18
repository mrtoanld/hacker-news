import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NewsArticle } from '../interface/news.interface';
import { NewsGqlService } from './news-gql.service';

@Injectable()
export class NewsService {
  private readonly SELECTED_NEW_URL = 'SELECTED_NEW_URL';

  public set selectedNewsUrl(url: string) {
    localStorage.setItem('SELECTED_NEW_URL', url);
  }

  public get selectedNewsUrl(): string {
    return localStorage.getItem('SELECTED_NEW_URL');
  }

  constructor(
    private readonly newsGqlService: NewsGqlService
  ) { }

  public getBestNews(): Observable<NewsArticle[]> {
    return this.newsGqlService.getBestNews();
  }

  public getNewDetail(url: string): Observable<NewsArticle> {
    return this.newsGqlService.getNewDetail(url);
  }
}
