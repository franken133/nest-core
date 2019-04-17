import { LoggingRequestInterceptor } from './interceptor/logging.request.interceptor';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app/app.module';
// import * as csurf from 'csurf';
import * as helmet from 'helmet';
import * as cookieParse from 'cookie-parser';
import { Logger } from '@nestjs/common';
import { json } from 'body-parser';
import { ValidationPipe } from '@nestjs/common/pipes';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  // 使用cors
  const app = await NestFactory.create(AppModule);
  // app.enableCors(); // 开启跨域
  app.use(cookieParse());
  app.use(helmet());
  app.use(json({ limit: '50mb' }));
  // Cross-site request forgery (known as CSRF or XSRF)
  // app.use(csurf({ cookie: true })); // csrf的配置必须要放在cookie或者是session的后面
  app.useGlobalInterceptors(new LoggingRequestInterceptor());
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));
  app.setGlobalPrefix('admin');

  const isProduction = process.env.NODE_ENV;
  if (isProduction !== 'production') {
    const options = new DocumentBuilder()
      .setTitle('Nest Core')
      .setDescription('The Nest Core API description')
      .setVersion('1.0')
      // .addTag('adminuser')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
  }

  // 可以从config读取port
  const port = 3000;
  await app.listen(port);
  Logger.log(`server started in port ${port}`, 'NestApplication');
}
bootstrap();
