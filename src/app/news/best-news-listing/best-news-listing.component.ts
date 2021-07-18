import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { NewsArticle, NewsDescription } from '../interface/news.interface';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-best-news-listing',
  templateUrl: './best-news-listing.component.html',
  styleUrls: ['./best-news-listing.component.scss']
})
export class BestNewsListingComponent implements OnInit {
  articles$: Observable<NewsArticle[]>;

  private readonly NEWS_DETAIL_URL = 'hacker-news/detail';

  constructor(
    private readonly newsService: NewsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.articles$ = this.newsService.getBestNews()
      .pipe(
        map((articles: NewsArticle[]) => {
          return articles.map((a) => {
            const description = a.description as string;
            const [point, actionDate, noOfComment] = description.match(/\d+/g);
            a = { ...a, description: { point, actionDate, noOfComment } as NewsDescription };
            return a;
          });
        })
      );
  }

  public onCardClick(url: string): void {
    this.newsService.selectedNewsUrl = url;
    this.router.navigate([this.NEWS_DETAIL_URL]);
  }
}
