import { BeforeInsert, BeforeUpdate, BeforeRemove, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsOptional, IsInt, Min } from 'class-validator';
import { Transform } from 'class-transformer';
import * as moment from 'moment';

export class DBEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  id: number;

  @Column('datetime', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'gmt_create',
    comment: '创建时间',
  })
  @Transform(value => moment(value).format('YYYY-MM-DD HH:mm:ss'), { toPlainOnly: true })
  gmtCreate: Date;

  @Column('datetime', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'gmt_modified',
    comment: '修改时间',
  })
  @Transform(value => moment(value).format('YYYY-MM-DD HH:mm:ss'), { toPlainOnly: true })
  gmtModified: Date;

  @BeforeInsert()
  beforeInsert() {
    this.id = null;
  }

  @BeforeUpdate()
  beforeUpdate() {
    if (!this.id || this.id < 1) {
      throw new Error('无效的update id');
    }
  }

  @BeforeRemove()
  beforeRemove() {
    if (!this.id || this.id < 1) {
      throw new Error('无效的delete id');
    }
  }
}
