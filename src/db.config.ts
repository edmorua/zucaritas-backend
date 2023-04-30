import { Sequelize } from 'sequelize-typescript';
import envVars from './envVars';

const { DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } = envVars;
const sequelize = new Sequelize({
	dialect: 'postgres',
	username: DB_USER,
	password: DB_PASSWORD,
	logging: true,
	port: DB_PORT,
	host: DB_HOST,
	models: [__dirname + '/models/**.model.ts'],
	sync: { force: true }
});
export default sequelize;
