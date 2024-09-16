import { HttpException, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { transformRequest } from 'src/utils/request.helper';
import { TCP_MESSAGES, UserDTO, TCP_SERVICES_KEYS, CreateUserDTO, LoginDTO, RegisterDTO } from 'lib';

@Injectable()
export class AuthService {
  constructor(@Inject(TCP_SERVICES_KEYS.AUTH_SERVICE_KEY) private client: ClientProxy) {}

  async login(payload: LoginDTO) {
    return transformRequest<UserDTO>(this.client,TCP_MESSAGES.AUTH_SERVICE.LOGIN_USER,{
		...payload
	})
  }


  async register(payload: RegisterDTO) {
    return transformRequest<UserDTO>(this.client,TCP_MESSAGES.AUTH_SERVICE.REGISTER_USER,{
		...payload
	})
  }
}
