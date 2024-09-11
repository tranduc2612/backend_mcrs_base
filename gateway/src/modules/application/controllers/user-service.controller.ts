import { Body, Controller, Get, Inject, Param, Post, Res, UseInterceptors } from '@nestjs/common';
import { AppService } from '../services/user-service.service';
import { ClientProxy } from '@nestjs/microservices';
import { Response } from 'express';
import { TransformInterceptor } from 'src/interceptors/transform.interceptor';
import { CreateUserDTO } from 'lib';

// @UseGuards(AuthGuard)
// @Controller('applications/cascade')
// @ApiTags('Cascade Apis')
@Controller("user")
@UseInterceptors(new TransformInterceptor())
export class AppController {
  constructor(private readonly userService: AppService) {}

@Get(":username")
getUser(@Param("username") username: string) {
	return this.userService.get(username);  
}

@Post()
createUser(@Body() dto: CreateUserDTO) {
	return this.userService.create(dto); 
}

//   @Post()
//   @UsePipes(new ValidationPipe({transform: true, disableErrorMessages: false}))
// 	async save(
// 		@CurrentUser()
// 		currentUser: {name: string | undefined; email: string; roles: string[]},
// 		@Body() newCascade: CascadeDto,
// 	): Promise<CascadeDto> {
// 		const rs = await this.cascadeService.save(newCascade, currentUser)
// 		return rs
// 	}
}
