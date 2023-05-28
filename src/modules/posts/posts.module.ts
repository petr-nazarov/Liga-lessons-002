import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModel, PostSchema } from './post.model';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: PostModel.name, schema: PostSchema }]),
  ],

  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
