import { Role } from '../users/user.model'; 


export type JwtPayload = {
  _id: string;
  username: string;
  iat: number;
  exp: number;
  roles: Role[];
};
