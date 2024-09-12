import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConFig } from 'src/configs/mysqlDB.config';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';

@Module({
  imports: [TypeOrmModule.forRootAsync(TypeOrmConFig)],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
