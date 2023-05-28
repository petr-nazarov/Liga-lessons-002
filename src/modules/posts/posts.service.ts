import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostModel } from './post.model';
@Injectable()
export class PostsService {
  constructor(
    @InjectModel(PostModel.name) private readonly postModel: Model<PostModel>,
  ) { }

  async create(createPostDto: CreatePostDto) {
    const createdPost = new this.postModel(createPostDto);
    return await createdPost.save();
  }

  async findAll() {
    return await this.postModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
