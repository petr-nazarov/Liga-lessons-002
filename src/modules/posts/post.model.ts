import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<PostModel>;

@Schema()
export class PostModel {
  @Prop()
  name: string;
}

export const PostSchema = SchemaFactory.createForClass(PostModel);
