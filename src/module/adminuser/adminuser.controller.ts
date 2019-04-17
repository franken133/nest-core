import { AdminUser } from './adminuser.entity';
import { AdminuserParam } from './adminuser.param';
import { AdminuserService } from './adminuser.service';
import { AuthService } from './../auth/auth.service';
import {
  Controller,
  UseGuards,
  Post,
  Body,
  Get,
  Req,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import * as bcrypt from 'bcrypt';
import { ResponseData } from '../response.data';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';

@ApiUseTags('后台用户管理')
@Controller('adminuser')
export class AdminuserController {
  constructor(
    private authService: AuthService,
    private adminuserService: AdminuserService,
  ) { }

  @Post('login')
  @ApiOperation({ title: '登录', description: '用户登录后会在cookie里写入jwt token' })
  async login(@Body() loginParam: AdminuserParam, @Req() req) {
    // const passowrd = bcrypt.hashSync('abcd1234', 10);
    // tslint:disable-next-line:no-console
    // console.log('password is', passowrd);
    const user = await this.adminuserService.getOne({
      login: loginParam.userName,
    });
    if (!user || user.length < 1) {
      return new ResponseData(null, '登录失败，账户或者密码错误', -1);
    }
    const checked = bcrypt.compareSync(loginParam.password, user[0].password);
    if (checked) {
      const token = await this.authService.signIn({
        userName: loginParam.userName,
        id: user[0].id,
      });
      if (loginParam.rememberMe) {
        req.res.cookie('secret_token', token, { maxAge: 1000 * 60 * 60 * 24 * 7 });
      } else {
        req.res.cookie('secret_token', token);
      }
      return new ResponseData(user);
    } else {
      return new ResponseData(null, '登录失败，账户或者密码错误', -1);
    }
  }

  @UseGuards(JwtAuthGuard)
  // 暂时禁用接口级别的权限教研
  // @AccessPriv('GET_USER_INFO')
  @Get('info')
  // 使用了全局的class serilizer
  // @UseInterceptors(ClassSerializerInterceptor)
  @ApiOperation({ title: '获取用户信息' })
  getInfo(@Req() req): AdminUser {
    return req.user.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('list')
  @ApiOperation({ title: '获取管理员账号列表' })
  async getList() {
    return new ResponseData(await this.adminuserService.list());
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ title: '登出', description: '登出，清除cookie' })
  @Get('logout')
  logout(@Req() req) {
    req.res.clearCookie('secret_token');
    return new ResponseData(null, '登出成功!');
  }
}
