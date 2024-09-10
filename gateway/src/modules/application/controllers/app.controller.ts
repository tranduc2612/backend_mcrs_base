import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';

// @UseGuards(AuthGuard)
// @Controller('applications/cascade')
// @ApiTags('Cascade Apis')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
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
