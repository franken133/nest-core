import { DBEntity } from '../db.entity';
import { Column, Entity } from 'typeorm';

@Entity('privilege', { schema: 'vone' })
export class Privilege extends DBEntity {

    @Column('varchar', {
        nullable: false,
        length: 100,
        name: 'priv_code',
        comment: '权限编码，大写',
    })
    privCode: string;

    @Column('varchar', {
        nullable: true,
        name: 'priv_desc',
        comment: '权限说明，可以为空',
    })
    privDesc: string | null;

}
