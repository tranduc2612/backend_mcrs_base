import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Request,
  Res,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { Response } from 'express';
import { CreateUserDTO } from 'lib';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('user/:username')
  async getUser(@Param('username') username: string, @Res() res: Response) {
    const data = await this.userService.get(username);
    return res.status(200).json({
      data: data,
      message: 'Get User successfully',
    });
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
