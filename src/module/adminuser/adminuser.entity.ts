import { DBEntity } from '../db.entity';
import { Entity, Column, Index } from 'typeorm';
import { Exclude } from 'class-transformer';
import { IsMobilePhone, MaxLength } from 'class-validator';

@Entity('admin_user', { schema: 'vone' })
@Index('login_uk', ['login'], { unique: true })
export class AdminUser extends DBEntity {

  @Column('varchar', {
    nullable: false,
    unique: true,
    name: 'login',
    length: 255,
    comment: '用户登录账号',
  })
  @MaxLength(255)
  login: string;

  @Column('varchar', {
    nullable: true,
    name: 'password',
    length: 255,
    comment: '登录密码',
  })
  @Exclude({ toPlainOnly: true })
  @MaxLength(255)
  password: string | null;

  @Column('varchar', {
    nullable: true,
    length: 100,
    name: 'nick_name',
    comment: '姓名',
  })
  @MaxLength(100)
  nickName: string | null;

  @Column('varchar', {
    nullable: true,
    length: 50,
    name: 'gender',
    comment: '性别',
  })
  gender: string | null;

  @Column('varchar', {
    nullable: true,
    length: 100,
    name: 'phone',
    comment: '绑定电话号码',
  })
  @IsMobilePhone('zh-CN')
  phone: string | null;

  @Column('varchar', {
    nullable: false,
    length: 10,
    default: () => '\'N\'',
    name: 'status',
    comment: '用户状态 N-正常状态， O-下线状态， E-异常状态',
  })
  status: string;

  @Column('varchar', {
    nullable: true,
    length: 500,
    name: 'photo_img',
    comment: '头像',
  })
  photoImg: string | null;

  @Column('varchar', {
    nullable: true,
    length: 100,
    name: 'province',
    comment: '省份',
  })
  province: string | null;

  @Column('varchar', {
    nullable: true,
    length: 100,
    name: 'city',
    comment: '城市',
  })
  city: string | null;

  @Column('varchar', {
    nullable: true,
    length: 100,
    name: 'region',
    comment: '所属区域',
  })
  region: string | null;

  @Column('varchar', {
    nullable: true,
    name: 'address',
    comment: '详细地址',
  })
  address: string | null;
}
