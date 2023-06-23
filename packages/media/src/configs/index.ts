import dotenv from 'dotenv';

dotenv.config();

const config: { port: number } = {
  port: Number(process.env.PORT),
};

export default config;
