import { MenuService } from './menu.service';
import { AdminUser } from './../adminuser/adminuser.entity';
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ResponseData } from '../response.data';

@Controller('menu')
export class MenuController {

  constructor(private readonly service: MenuService) {}

  @ApiUseTags('菜单管理')
  @ApiOperation({ title: '获取用户可访问菜单', description: '根据用户id获取此用户可访问的所有菜单数据' })
  @Get('userMenuData')
  @UseGuards(JwtAuthGuard)
  async getUserMenuData(@Req() req) {
    const user: AdminUser = req.user.user;
    const menus = await this.service.getMenuDataByUserId(user.id);
    return new ResponseData(menus);
  }
}
