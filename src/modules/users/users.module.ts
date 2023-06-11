import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserModel, UserSchema } from './user.model';
import { BaseService } from '../base/base.service';
import { PostsService } from '../posts/posts.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserModel.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [
    {
      provide: BaseService,
      useClass: UsersService,
    },
  ],
})
export class UsersModule {}
