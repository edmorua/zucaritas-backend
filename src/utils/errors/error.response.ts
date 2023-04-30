import express from 'express';
import { CODES_RESPONSE } from '../constants/codes';

export class ErrorResponse extends Error {
	statusCode = CODES_RESPONSE.INTERNAL_ERROR;

	constructor(statusCode: number, message: string) {
		super(message);
		this.statusCode = statusCode;

		Object.setPrototypeOf(this, ErrorResponse.prototype);
	}

	getErrorCode() {
		return this.statusCode;
	}

	getErrorMessage() {
		return this.message;
	}
}

export function reportError(error: unknown, res: express.Response) {
	if (error instanceof ErrorResponse) {
		return res.status(error.statusCode).json({ message: error.message });
	}
	const errorType = error as Error;
	return res
		.status(CODES_RESPONSE.INTERNAL_ERROR)
		.json({ message: errorType?.message || 'internal server error' });
}
