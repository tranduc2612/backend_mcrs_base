import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/application/app.module';
import { env } from 'configs/env.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('listen port ' + env.APP.GATEWAY.PORT + "...")
}
bootstrap();
