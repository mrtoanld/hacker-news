import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewsArticle } from '../interface/news.interface';

const queryArticleListing = gql`
  query ArticleListing {
    articles {
        title
        url
        coverImageUrl
        content
        description
        subtitle
    }
  }
`;

const queryArticleDetail = gql`
  query ArticleDetail($url: String!) {
    article(url: $url) {
        title
        url
        coverImageUrl
        content
        description
        subtitle
    }
  }
`;

@Injectable()
export class NewsGqlService {

  constructor(
    private readonly apollo: Apollo
  ) { }

  public getBestNews(): Observable<NewsArticle[]> {
    return this.apollo
      .watchQuery({
        query: queryArticleListing,
        fetchPolicy: 'network-only',
      })
      .valueChanges
      .pipe(
        map(({data}: any) => data.articles)
      );
  }

  public getNewDetail(url: string): Observable<NewsArticle> {
    return this.apollo
      .watchQuery({
        query: queryArticleDetail,
        variables: {
          url
        },
        fetchPolicy: 'network-only',
      })
      .valueChanges
      .pipe(map(({data}: any) => data.article));
  }
}
