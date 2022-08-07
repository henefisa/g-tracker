import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GithubOauthStrategy } from './strategy/github-oauth.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, GithubOauthStrategy],
})
export class AuthModule {}
