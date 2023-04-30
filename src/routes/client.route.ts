import express from 'express';
import clientController from '../controllers/client.controller';

const clientRoute = express.Router();

clientRoute.post('/signup', async (req, res) => {
	return await clientController.create(req,res);
});

export default clientRoute;
