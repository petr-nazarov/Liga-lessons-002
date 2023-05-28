import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './modules/posts/posts.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:password@localhost:7500'),
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
