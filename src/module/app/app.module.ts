import { MenuModule } from './../menu/menu.module';
import { AdminuserModule } from './../adminuser/adminuser.module';
import { ConfigProvider } from './../../config/config.provider';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(ConfigProvider.getConfig('db')), AdminuserModule, MenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
