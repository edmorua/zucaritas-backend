import express from 'express';
import bodyParser from 'body-parser';
import envVars from './envVars';
import sequelize from './db.config';
import { API_VERSION } from './utils/constants/codes';
import { MAIN_PATHS } from './utils/constants/main.path';
import clientRoute from './routes/client.route';
const app = express();
app.use(bodyParser.json());

const { PORT } = envVars;
const exitNumber = 1;

async function init() {
	try {
		await sequelize.sync();
		console.log('Successfully connected to database');
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	} catch (error) {
		console.error('error initializing', error);
		process.exit(exitNumber);
	}
}

init();

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.use(`/api/${API_VERSION}${MAIN_PATHS.CLIENT}`, clientRoute);


