import { Controller, Get, Headers, Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/me')
  @ApiBearerAuth('default')
  async me(@Headers() headers) {
    return headers;
    //return await this.authService.me();
  }

  @Post('register')
  async register(@Body() authDto: AuthDto) {
    return await this.authService.register(authDto);
  }

  @Post('login')
  async login(@Body() authDto: AuthDto) {
    return await this.authService.login(authDto);
  }
}
function me(): any {
  throw new Error('Function not implemented.');
}
