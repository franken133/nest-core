import { UserMenu } from './user.menu.entity';
import { Menu } from './menu.entity';
import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';

@Injectable()
export class MenuService {

  async getMenuDataByUserId(id: number) {
    // 获取所有可访问的menu id
    const userMenus = await getRepository(UserMenu).find({ userId: id });
    if (!userMenus) {
      return {};
    }
    // 获取所有一级menu信息
    const menus = await getRepository(Menu)
      .createQueryBuilder()
      .where('id in (:...menuIds)', { menuIds: userMenus.map(item => item.menuId) })
      .orderBy('is_leaf', 'ASC')
      .getMany();

    // 获取所有子菜单
    for (const item of menus) {
      if (!item.isLeaf) {
        const subMenu = await getRepository(Menu).createQueryBuilder().where('parent_id = :parentId', { parentId: item.id }).getMany();
        if (subMenu) {
          item.subMenu = subMenu;
        }
      }
    }
    return menus;
  }
}
