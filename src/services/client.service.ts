import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { CLIENT_INTERFACE } from '../interfaces/client.interface';
import envVars from '../envVars';
import Client from '../models/client.model';
import { CODES_RESPONSE } from '../utils/constants/codes';

type LoginClient = {
	clientId: number;
	email: string;
	name: string;
	username: string;
	role: string;
	token: string;
	phone: string;
	gender?: string;
}
class ClientService {

	async create(client: CLIENT_INTERFACE): Promise<LoginClient> {
		try {
			const clientToSave = { ...client };
			clientToSave.password = await bcrypt.hash(clientToSave.password, envVars.SALT_ROUND);
			const newClient = await Client.create({ ...clientToSave });
			const {
				email,
				role,
				gender,
				name,
				username,
				phone
			} = newClient.toJSON() as CLIENT_INTERFACE;
			const token = jwt.sign({
				id: newClient.id,
				email,
				role,
				gender,
				name,
				username
			}, envVars.SECRET_KEY);
			return {
				clientId: newClient.id,
				email,
				role,
				gender,
				name,
				username,
				phone,
				token
			};
 		} catch (error) {
			const typeError = error as Error & { status: number};
			throw {
				status: typeError?.status || CODES_RESPONSE.INTERNAL_ERROR,
				message: typeError?.message
			};
		}
	}
}

export default new ClientService();
