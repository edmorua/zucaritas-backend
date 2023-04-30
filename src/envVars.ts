import dotenv from 'dotenv';

type ENV_VARS = {
  NODE_ENV: string;
  PORT: number;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_HOST: string;
  DB_NAME: string;
  DB_PORT: number;
  SECRET_KEY: string;
	SALT_ROUND: number;
};
const env = process.env.NODE_ENV!;
dotenv.config({ path: `.env.${env}` });

const envVars: ENV_VARS = {
	NODE_ENV: process.env.NODE_ENV!,
	PORT: Number.parseInt(process.env.PORT!, 10),
	DB_USER: process.env.DB_USER!,
	DB_PASSWORD: process.env.DB_PASSWORD!,
	DB_HOST: process.env.DB_HOST!,
	DB_NAME: process.env.DB_NAME!,
	DB_PORT: Number.parseInt(process.env.DB_PORT!, 10),
	SECRET_KEY: process.env.SECRET_KEY!,
	SALT_ROUND: Number.parseInt(process.env.SALT_ROUND!, 10)
};

export default envVars;
