import { Body, Controller, Get, HttpException, HttpStatus, UseFilters } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { MessagePattern, Transport } from '@nestjs/microservices';
import { LoginDTO, RegisterDTO, TCP_MESSAGES } from 'lib';
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern({cmd: TCP_MESSAGES.AUTH_SERVICE.LOGIN_USER}, Transport.TCP)
  login(@Body() payload: LoginDTO) {
    const {username, password} = payload;
    if(username && password){
      return this.authService.authentication(payload); 
    }
  }

  @MessagePattern({cmd: TCP_MESSAGES.AUTH_SERVICE.REGISTER_USER}, Transport.TCP)
  register(@Body() payload: RegisterDTO) {
    const {username, password} = payload;
    if(username && password){
      return this.authService.registration(payload); 
    }
  }

  @MessagePattern({cmd: TCP_MESSAGES.AUTH_SERVICE.REFRESH_TOKEN}, Transport.TCP)
  refreshToken(@Body() refreshToken: string) {
    // const {username, password} = payload;
    // if(username && password){
    //   return this.authService.registration(payload); 
    // }
  }
}
