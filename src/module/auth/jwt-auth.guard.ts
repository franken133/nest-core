import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  Logger,
  ForbiddenException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  private accessPriv: string;
  constructor(private readonly reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    // add your custom authentication logic here
    // for example, call super.logIn(request) to establish a session.
    this.accessPriv = this.reflector.get<string>('accessPriv', context.getHandler());
    Logger.log('访问需要的权限:' + this.accessPriv, JwtAuthGuard.name);
    return super.canActivate(context);
  }

  handleRequest(err, user) {
    if (err) {
      Logger.error('权限访问错误:', JSON.stringify(err), JwtAuthGuard.name);
      throw err;
    }
    if (!user) {
      throw new UnauthorizedException('获取不到用户信息');
    }
    if (!this.accessPriv) {
      return user;
    }
    // 获取用户的所有权限
    const userPriv = user.userPriv;
    if (!userPriv || (!userPriv.includes(this.accessPriv))) {
      // 用户不包含所需的权限
      throw new ForbiddenException('用户无权调用此服务');
    }
    return user;
  }
}
