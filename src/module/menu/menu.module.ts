import { AuthModule } from './../auth/auth.module';
import { Module } from '@nestjs/common';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';

@Module({
  imports: [AuthModule],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
