import { AuthPayload } from './auth.payload';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      // 从request header字段secret_token获取jwt token
      // jwtFromRequest: ExtractJwt.fromHeader('secret_token'),
      jwtFromRequest: ExtractJwt.fromExtractors([req => {
        // console.log('req cookie is', JSON.stringify(req.cookies));
        return req.cookies.secret_token;
      }]),
      // 用于token签名的附加信息,这里的值和auth module里定义的值保持一致
      secretOrKey: 'unistore',
    });
  }

  /**
   * jwt passport 调用validate方法来判断是否授权用户进行接口调用
   * @param payload
   */
  async validate(payload: AuthPayload) {
    Logger.log(`payload is ${JSON.stringify(payload)}`, 'JwtStrategy');
    const user = await this.authService.validateUser(payload.id);
    if (!user) {
      throw new UnauthorizedException('不存在的用户信息');
    }
    return user;
  }
}
