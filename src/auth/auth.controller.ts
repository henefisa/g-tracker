import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { GithubOAuthGuard } from './guard/github-oauth.guard';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/github')
  @UseGuards(GithubOAuthGuard)
  // eslint-disable-next-line
  async githubAuth() {}

  @Get('/github/callback')
  @UseGuards(GithubOAuthGuard)
  async githubAuthCallback(@Req() req: Request) {
    return req.user;
  }
}
