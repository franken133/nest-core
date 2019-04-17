import { Column, Entity, Index } from 'typeorm';
import { DBEntity } from '../db.entity';

@Entity('role', { schema: 'vone' })
@Index('uk_role_code', ['roleCode'], { unique: true })
@Index('uk_role_name', ['roleName'], { unique: true })
export class Role extends DBEntity {

    @Column('varchar', {
        nullable: false,
        unique: true,
        length: 100,
        name: 'role_name',
    })
    roleName: string;

    @Column('varchar', {
        nullable: false,
        unique: true,
        length: 50,
        name: 'role_code',
    })
    roleCode: string;

}
