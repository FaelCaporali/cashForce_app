import App from './src/app';
import * as dotenv from 'dotenv';

dotenv.config();

const server = new App();

server.listen(Number(process.env.API_PORT) || 8001);

export default server;