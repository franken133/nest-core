import { Privilege } from './privilege.entity';
import { AdminUserRole } from './admin.user.role.entity';
import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { RolePrivilege } from './role.privilege.entity';

@Injectable()
export class RoleService {

  getPrivilegeList(userId: string) {
    return getRepository(AdminUserRole).find({ userId }).then(adminUserRole => {
      // console.log('adminUserRole is ', adminUserRole);
      return getRepository(RolePrivilege)
        .createQueryBuilder()
        .where('role_id in (:...roleIds)', { roleIds: adminUserRole.map(x => x.roleId) }).getMany();
    }).then(rolePrivileges => {
      // console.log('rolePrivileges is ', rolePrivileges);
      return getRepository(Privilege).createQueryBuilder().where('id in (:...privIds)', { privIds: rolePrivileges.map(x => x.privId) }).getMany();
    });
  }
}
