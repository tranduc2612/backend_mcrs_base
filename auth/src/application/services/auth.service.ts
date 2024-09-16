import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { LoginDTO, RegisterDTO } from 'lib';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Users } from '../entities/user.entity';
import { RpcBadRequestException } from 'src/exceptions/custom-rpc-exceptions';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users) private readonly userRepository: Repository<Users>,
    private readonly jwtService: JwtService,
  ) {} 
  async authentication({ username, password }: LoginDTO) {
    const dataUser = await this.validateUser(username, password);

    if (dataUser) {
      const token = this.createToken(dataUser);
      await this.userRepository.update(dataUser.id, {
        ...token,
      });
      return {
        ...dataUser,
        ...token
      };
    }

    throw new RpcBadRequestException('The username is not exist !');
  }

  async registration({ username, password, email }: RegisterDTO) {
    const dataUser = await this.validateUser(username, password);
    if (dataUser) {
      throw new RpcBadRequestException('The username is already exist !');
    }

    const hashedPassword = await this.hashPassword(password);
    const newUser = await this.userRepository.create({
      id: uuidv4(),
      username,
      password: hashedPassword,
      email,
    });

    const user = await this.userRepository.save(newUser);
    return user;
  }

  createToken(payload): { accessToken: string; refreshToken: string } {
    const { accessToken, refreshToken, ...data } = payload;
    const newAccessToken = this.jwtService.sign(data);
    const newRefreshToken = Math.random().toString();

    return {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    };
  }

  async validateUser(
    username: string,
    password: string,
  ): Promise<Omit<Users, 'password'>> {
    const user = await this.userRepository.findOne({
      where: {
        username,
      },
    });

    // So sánh mật khẩu đã mã hóa
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...data } = user;
      return data;
    }

    return null;
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  }
}
