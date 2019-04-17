import { AdminuserController } from './adminuser.controller';
import { AuthModule } from './../auth/auth.module';
import { Module } from '@nestjs/common';
import { AdminuserService } from './adminuser.service';

@Module({
  imports: [AuthModule],
  controllers: [AdminuserController],
  providers: [AdminuserService],
})
export class AdminuserModule {}
