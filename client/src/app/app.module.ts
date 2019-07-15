import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material.module';

import { AppComponent } from './app.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { SingleArticleComponent } from './pages/single-article/single-article.component';
import { CreateArticleComponent } from './pages/create-article/create-article.component';
import { EditArticleComponent } from './pages/edit-article/edit-article.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    SingleArticleComponent,
    CreateArticleComponent,
    EditArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
