import { Component, Input, OnInit } from '@angular/core';
import { NewsArticle } from '../interface/news.interface';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  @Input() article: NewsArticle;

  public readonly DEFAULT_IMAGE = '/assets/img/hacker_news.png';

  constructor() { }

  ngOnInit(): void {
  }

}
