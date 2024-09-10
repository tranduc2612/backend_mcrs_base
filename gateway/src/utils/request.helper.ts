import {HttpException} from '@nestjs/common'
import {ClientProxy} from '@nestjs/microservices'
import {firstValueFrom} from 'rxjs'

export async function transformRequest<T>(
	tcpService: ClientProxy,
	tcpKey: string,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
	param: any | undefined = {},
): Promise<T> {
	try {
		const tcpResponse = await tcpService.send(tcpKey, param || {})
		const response = await firstValueFrom(tcpResponse)
		return response as T
	} catch (error) {
		const {status, message} = error
		throw new HttpException(message, status)
	}
}
