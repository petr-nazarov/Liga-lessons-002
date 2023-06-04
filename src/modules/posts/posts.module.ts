import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModel, PostSchema } from './post.model';
import { BaseService } from '../base/base.service';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: PostModel.name, schema: PostSchema }]),
  ],
  controllers: [PostsController],
  providers: [
    {
      provide: BaseService,
      useClass: PostsService,
    },
  ],
})
export class PostsModule { }
