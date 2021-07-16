import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BestNewsListingComponent } from './best-news-listing/best-news-listing.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';


const routes: Routes = [
  {
    path: '',
    component: BestNewsListingComponent
  },
  {
    path: 'detail',
    component: NewsDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class NewsRoutingModule { }
