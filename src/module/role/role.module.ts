import { Privilege } from './privilege.entity';
import { AdminUserRole } from './admin.user.role.entity';
import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './role.entity';
import { RolePrivilege } from './role.privilege.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminUserRole, Privilege, Role, RolePrivilege])],
  providers: [RoleService],
  exports: [RoleService]
})
export class RoleModule {}
