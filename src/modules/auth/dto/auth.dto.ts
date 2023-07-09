import { z } from 'zod';
import { ApiProperty } from '@nestjs/swagger';

export const AuthDTOSchema = z.object({
  username: z.string().email(),
  password: z.string().min(8),
});


export class AuthDto implements z.infer<typeof AuthDTOSchema> {
  @ApiProperty({
    example: 'username',
    description: 'Username',
  })
  username: string;

  @ApiProperty({
    example: 'password',
    description: 'Password',
  })
  password: string;
}
