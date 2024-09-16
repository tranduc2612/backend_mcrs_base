import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { LoginDTO, RegisterDTO } from 'lib';
import { TransformInterceptor } from 'src/interceptors/transform.interceptor';
import { AuthService } from '../services/auth-service.service';

// @UseGuards(AuthGuard)
// @Controller('applications/cascade')
// @ApiTags('Cascade Apis')
@Controller("auth")
@UseInterceptors(new TransformInterceptor())
export class AuthController {
  constructor(private readonly authService: AuthService) {}

@Post("login")
loginUser(@Body() dto: LoginDTO) {
	return this.authService.login(dto); 
}

@Post("register")
registerUser(@Body() dto: RegisterDTO) { 
	return this.authService.register(dto);
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
