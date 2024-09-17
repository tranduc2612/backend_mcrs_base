import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/application/app.module';
import { env } from 'configs/env.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(env.APP.GATEWAY.PORT);
  console.log(env.APP.SECRET_KEY) 
}
bootstrap();
