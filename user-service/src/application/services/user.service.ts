import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO, UserDTO } from 'lib';
import { Users } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users) private readonly userRepository: Repository<Users>,
  ) {}

  async get(username: string): Promise<UserDTO> {
    const data = await this.userRepository.findOne({
      where: {
        username,
      },
    });

    const dataMapper: UserDTO = {
      username: data.username,
      email: data.email
    }

    return {
      ...dataMapper
    };
  }

  async create(dto: CreateUserDTO): Promise<Users> {
    const newUser = await this.userRepository.create({
      id: uuidv4(),
      ...dto,
    });

    return await this.userRepository.save(newUser);
  }

  update(): string {
    return 'Hello World!';
  }
  delete(): string {
    return 'Hello World!';
  }
}
