import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/application/app.module';
import { env } from 'configs/env.config';

async function bootstrap() {
  console.log(env.APP.GATEWAY.HOST) 
  const app = await NestFactory.create(AppModule);
  await app.listen(env.APP.GATEWAY.PORT);
}
bootstrap();
