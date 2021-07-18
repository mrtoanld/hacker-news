import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestNewsListingComponent } from './best-news-listing/best-news-listing.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsCardComponent } from './news-card/news-card.component';
import { NewsService } from './services/news.service';
import { NewsGqlService } from './services/news-gql.service';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule,
    MatIconModule
  ],
  declarations: [
    BestNewsListingComponent,
    NewsDetailComponent,
    NewsCardComponent
  ],
  providers: [
    NewsGqlService,
    NewsService
  ]
})
export class NewsModule { }
