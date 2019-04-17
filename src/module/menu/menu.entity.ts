import { Column, Entity, Index } from 'typeorm';
import { DBEntity } from '../db.entity';
import { Exclude } from 'class-transformer';

@Entity('menu', { schema: 'vone' })
@Index('uk_name', ['name'], { unique: true })
export class Menu extends DBEntity {

    @Column('varchar', {
        nullable: false,
        unique: true,
        name: 'name',
    })
    name: string;

    @Column('varchar', {
        nullable: false,
        name: 'label',
    })
    label: string;

    @Column('varchar', {
        nullable: true,
        name: 'icon',
    })
    icon: string | null;

    @Column('varchar', {
        nullable: true,
        name: 'icon_theme',
    })
    iconTheme: string | null;

    @Column('varchar', {
        nullable: true,
        name: 'component',
    })
    component: string | null;

    @Column('bigint', {
        nullable: false,
        name: 'parent_id',
    })
    @Exclude()
    parentId: string;

    @Column('tinyint', {
        nullable: false,
        width: 1,
        default: () => '\'1\'',
        name: 'is_leaf',
    })
    @Exclude()
    isLeaf: boolean;

    subMenu: Menu[];

}
