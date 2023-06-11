import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UsersModule, JwtModule.register({
    secret: 'secret123432',
  })],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
