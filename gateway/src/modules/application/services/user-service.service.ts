import { HttpException, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { transformRequest } from 'src/utils/request.helper';
import { TCP_MESSAGES, UserDTO, TCP_SERVICES_KEYS, CreateUserDTO } from 'lib';

@Injectable()
export class UserService {
  constructor(@Inject(TCP_SERVICES_KEYS.USER_SERVICE_KEY) private client: ClientProxy) {}

  async get(username: string) {
    return transformRequest<UserDTO>(this.client,TCP_MESSAGES.USER_SERVICE.GET_USER,{
		username
	})
  }

  async create(dto: CreateUserDTO) {
    return transformRequest<UserDTO>(this.client,TCP_MESSAGES.USER_SERVICE.CREATE_USER,{
      ...dto
	  })
  }

  // save(
  // 	newCascade: CascadeDto,
  // 	currentUser: {name: string | undefined; email: string; roles: string[]},
  // ): Promise<CascadeDto> {
  // 	return transformRequest<CascadeDto>(
  // 		this.clientProxy,
  // 		TCP_MESSAGES.CASCADE.CREATE,
  // 		{applicationDto: newCascade, user: currentUser},
  // 	)
  // }
}
