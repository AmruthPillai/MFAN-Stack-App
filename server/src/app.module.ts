import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ArticleService } from './article/article.service';
import { ArticleModule } from './article/article.module';
import { articleProviders } from './article/article.providers';

@Module({
  imports: [DatabaseModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService, ArticleService, ...articleProviders],
})
export class AppModule {}
