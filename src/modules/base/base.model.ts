import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export abstract class BaseModel {
  @Prop()
  name: string;
}

