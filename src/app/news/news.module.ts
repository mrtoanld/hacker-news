import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestNewsListingComponent } from './best-news-listing/best-news-listing.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsRoutingModule } from './news-routing.module';



@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  declarations: [
    BestNewsListingComponent,
    NewsDetailComponent
  ],
})
export class NewsModule { }
