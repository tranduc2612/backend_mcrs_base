import { Module } from '@nestjs/common';
import { AppService } from './services/user.service';
import { AppController } from './controllers/user.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [ClientsModule.register([
    {
      name: 'USER_SERVICE',
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
