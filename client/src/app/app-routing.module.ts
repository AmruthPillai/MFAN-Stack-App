import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './pages/articles/articles.component';
import { SingleArticleComponent } from './pages/single-article/single-article.component';
import { CreateArticleComponent } from './pages/create-article/create-article.component';
import { EditArticleComponent } from './pages/edit-article/edit-article.component';

const routes: Routes = [
  {
    path: 'articles',
    component: ArticlesComponent,
    data: { title: 'List of Articles' }
  },
  {
    path: 'article/:id',
    component: SingleArticleComponent,
    data: { title: 'Show Article' }
  },
  {
    path: 'create-article',
    component: CreateArticleComponent,
    data: { title: 'Add Article' }
  },
  {
    path: 'edit-article/:id',
    component: EditArticleComponent,
    data: { title: 'Edit Article' }
  },
  {
    path: '',
    redirectTo: '/articles',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
