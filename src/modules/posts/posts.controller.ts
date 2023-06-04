import { Controller } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { BaseController } from '../base/base.controller';
import { BaseService } from '../base/base.service';
import { PostModel } from './post.model';

@Controller('posts')
export class PostsController extends BaseController<
  PostModel,
  CreatePostDto,
  UpdatePostDto
> {
  constructor(
    private readonly postService: BaseService<
      PostModel,
      CreatePostDto,
      UpdatePostDto
    >,
  ) {
    super(postService);
  }
}

