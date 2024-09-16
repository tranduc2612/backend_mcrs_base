import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConFig } from 'src/configs/mysqlDB.config';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { Users } from './entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/utils/local.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync(TypeOrmConFig),
    TypeOrmModule.forFeature([Users]),
    JwtModule.register({
      secret: 'your_secret_key',  // Nên lưu trong biến môi trường
      signOptions: { expiresIn: '1h' },
    }),
    PassportModule
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AppModule {}
