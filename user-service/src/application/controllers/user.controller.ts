import {
  Body,
  Controller,
  Post,
  Res
} from '@nestjs/common';
import { MessagePattern, Transport } from '@nestjs/microservices';
import { Response } from 'express';
import { CreateUserDTO, TCP_MESSAGES } from 'lib';
import { UserService } from '../services/user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({cmd: TCP_MESSAGES.USER_SERVICE.GET_USER}, Transport.TCP)
  async getUser(@Body() payload) {
    console.log(payload)
    const data = await this.userService.get(payload.username);
    return data
  }

  @Post('create-user')
  async createUser(@Body() userDTO: CreateUserDTO, @Res() res: Response) {
    const data = await this.userService.create(userDTO);
    return res.status(201).json({
      data: data,
      message: 'Create user successfully',
    });
  }
}
