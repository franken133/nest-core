import { Column, Entity } from 'typeorm';
import { DBEntity } from '../db.entity';

@Entity('role_privilege', { schema: 'vone' })
export class RolePrivilege extends DBEntity {

    @Column('bigint', {
        nullable: false,
        name: 'priv_id',
    })
    privId: string;

    @Column('bigint', {
        nullable: false,
        name: 'role_id',
    })
    roleId: string;

}
