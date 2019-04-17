import { Column, Entity} from 'typeorm';
import { DBEntity } from '../db.entity';

@Entity('user_menu', {schema: 'vone' } )
export class UserMenu extends DBEntity {

    @Column('bigint', {
        nullable: false,
        name: 'menu_id',
        })
    menuId: number;

    @Column('bigint', {
        nullable: false,
        name: 'user_id',
        })
    userId: number;

}
