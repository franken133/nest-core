import { Column, Entity } from 'typeorm';
import { DBEntity } from '../db.entity';

@Entity('admin_user_role', { schema: 'vone' })
export class AdminUserRole extends DBEntity {

    @Column('bigint', {
        nullable: false,
        name: 'user_id',
    })
    userId: string;

    @Column('bigint', {
        nullable: false,
        name: 'role_id',
    })
    roleId: string;

}
