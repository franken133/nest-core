import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { AdminUser } from './adminuser.entity';

@Injectable()
export class AdminuserService {
  list(): any {
    return getRepository(AdminUser).createQueryBuilder().where('login != :login', { login: 'admin' }).getMany();
  }

  getOne(params) {
    return getRepository(AdminUser).find(params);
  }
}
