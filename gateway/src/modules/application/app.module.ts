import { Module } from '@nestjs/common';
import { AppService } from './services/user-service.service';
import { AppController } from './controllers/user-service.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TCP_SERVICES_KEYS } from 'lib';

@Module({
  imports: [ClientsModule.register([
    {
      name: TCP_SERVICES_KEYS.USER_SERVICE_KEY,
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 3002
      }
    }
  ])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
