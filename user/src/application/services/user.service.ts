import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users) private readonly userRepository: Repository<Users>,
  ) {}
  
  async getUserByUsername(username: string): Promise<Users> {
    const data = await this.userRepository.findOne({
      where: {
        username
      },
    });
    return data;
  }
  getListUser(): string {
    return 'Hello World!';
  }
  updateUser(): string {
    return 'Hello World!';
  }
  deleteUser(): string {
    return 'Hello World!';
  }
}
