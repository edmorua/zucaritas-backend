import express from 'express';
import { CODES_RESPONSE } from '../utils/constants/codes';
import clientService from '../services/client.service';
import { reportError } from '../utils/errors/error.response';

class ClientController {
	async create(req: express.Request, res: express.Response) {
		const data = req.body;
		try {
			if(!data) {
				return res
					.status(CODES_RESPONSE.NOT_FOUND)
					.json({ message: 'No data found in the request' });
			}
			const newClient = await clientService.create(data);
			return res.status(CODES_RESPONSE.CREATED).json(newClient);
		} catch (error) {
			reportError(error,res);
		}
	}
}

export default new ClientController();
