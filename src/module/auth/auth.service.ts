import { AdminUser } from './../adminuser/adminuser.entity';
import { AuthPayload } from './auth.payload';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { RoleService } from '../role/role.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly roleService: RoleService,
  ) { }

  async signIn(payload: AuthPayload): Promise<string> {
    // In the real-world app you shouldn't expose this method publicly
    // instead, return a token once you verify user credentials
    return this.jwtService.sign(payload, { expiresIn: '7 days' });
  }

  async validateUser(userId: number): Promise<any> {
    const user = await getRepository(AdminUser).findOne(userId);
    if (!user) {
      return null;
    }
    const userPriv = (await this.roleService.getPrivilegeList(String(userId))).map(x => x.privCode);
    return { user, userPriv };
  }
}
