import { HttpStatusCode } from '@angular/common/http';

export interface BaseApiResponseStruct<T> {
	statusCode: HttpStatusCode;
	result: boolean;
	data: T;
	error?: { [key: string]: any };
	path: string;
	timestamp: string;
	createdBy: string;
}
