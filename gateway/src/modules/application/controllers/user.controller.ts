import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from '../services/user.service';
import { ClientProxy } from '@nestjs/microservices';

// @UseGuards(AuthGuard)
// @Controller('applications/cascade')
// @ApiTags('Cascade Apis')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService,@Inject('USER_SERVICE') private client: ClientProxy) {}

  @Get()
  getHello() {
	return this.client.send({cmd: 'GET_USER'}, {
		username: 'ductm'
	})
  }

  // @Post()
  // @UsePipes(new ValidationPipe({transform: true, disableErrorMessages: false}))
	// async save(
	// 	@CurrentUser()
	// 	currentUser: {name: string | undefined; email: string; roles: string[]},
	// 	@Body() newCascade: CascadeDto,
	// ): Promise<CascadeDto> {
	// 	const rs = await this.cascadeService.save(newCascade, currentUser)
	// 	return rs
	// }
}
