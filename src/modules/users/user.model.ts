import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseModel } from '../base/base.model';
import { JwtPayload } from '../auth/jwt-payload.type';
import { PostModel } from '../posts/post.model';

export type UserDocument = HydratedDocument<UserModel>;

const allowedRoles = ['admin', 'user'] as const;
export type Role = (typeof allowedRoles)[number];

const allowedPermissions = [
  'read-posts',
  'create-posts',
  'update-posts',
  'delete-posts',
] as const;
export type Permission = (typeof allowedPermissions)[number];

type Entity = PostModel | UserModel;
type ACLEntry = {
  permission: Permission;
  condition?: (requestor: JwtPayload, entity: Entity) => boolean;
};
const acl: Record<Role, Array<ACLEntry>> = {
  admin: [
    { permission: 'read-posts' },
    { permission: 'create-posts' },
    { permission: 'update-posts' },
    { permission: 'delete-posts' },
  ],
  user: [
    { permission: 'read-posts' },
    { permission: 'create-posts' },
    {
      permission: 'update-posts',
      condition: (requestor, entity: PostModel) =>
        requestor._id.toString() === entity.authorId.toString(),
    },
    {
      permission: 'delete-posts',
      condition: (requestor, entity: PostModel) =>
        requestor._id.toString() === entity.authorId.toString(),
    },
  ],
};

const canI = (
  requestor: JwtPayload,
  permission: Permission,
  entity: Entity,
) => {
  for( const role of requestor.roles) {
    const permisisonInRole = acl[role].find(el => el.permission === permission);
    if (!permisisonInRole) continue;
    if (!permisisonInRole.condition) return true;
    if (permisisonInRole.condition(requestor, entity)) return true;
  }
  return false;

};

@Schema()
export class UserModel extends BaseModel {
  @Prop()
  username: string;
  @Prop()
  password: string;

  @Prop()
  roles: Role[];
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
