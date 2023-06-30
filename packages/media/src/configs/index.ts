import dotenv from 'dotenv';

dotenv.config();

const config: { port: number; mongo_uri: string } = {
  port: Number(process.env.PORT),
  mongo_uri: process.env.MONGO_URI as string,
};

export default config;
