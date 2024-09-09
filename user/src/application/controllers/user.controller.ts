import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Request,
  Res,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { Response } from 'express';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('user/:username')
  async getHello(@Param('username') username: string, @Res() res: Response) {
    const hasAccess = false;
    // if (!hasAccess) {
    //   throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    // }
    const data = await this.userService.getUserByUsername(username);
    return res.status(200).json({
      data: data,
      message: 'Get User successfully',
    });
  }
}
