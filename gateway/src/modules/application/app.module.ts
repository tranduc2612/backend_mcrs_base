import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppService } from './services/user-service.service';
import { AppController } from './controllers/user-service.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TCP_SERVICES_KEYS } from 'lib';
import { env } from 'configs/env.config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: TCP_SERVICES_KEYS.USER_SERVICE_KEY,
        transport: Transport.TCP,
        options: {
          host: env.APP.USER_SERVICE.HOST,
          port: env.APP.USER_SERVICE.PORT,
        },
      },
    ]),
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
