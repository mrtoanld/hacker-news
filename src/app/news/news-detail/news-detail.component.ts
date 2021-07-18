import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { NewsArticle } from '../interface/news.interface';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  article$: Observable<NewsArticle>;

  constructor(
    private readonly newsService: NewsService
  ) { }

  ngOnInit(): void {
    const selectedNewsUrl = this.newsService.selectedNewsUrl;
    this.article$ = this.newsService.getNewDetail(selectedNewsUrl);
  }

}
