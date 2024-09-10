import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { Users } from 'src/entities/user.entity';

const TypeOrmConFig = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    type: 'mysql',
    host: configService.get('DB_HOST'),
    port: +configService.get('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_DATABASE'),
    entities: [join(process.cwd(), 'dist/**/*.entity.js')],
    synchronize: true,
  }),
  inject: [ConfigService],
});

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmConFig,
    TypeOrmModule.forFeature([Users]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
