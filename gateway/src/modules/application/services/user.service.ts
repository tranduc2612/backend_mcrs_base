import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
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
