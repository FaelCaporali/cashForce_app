/* eslint-disable @typescript-eslint/no-var-requires */
const config = {
  username: 'root',
  password: '123456',
  database: 'cashForce_dev',
  host: 'localhost',
  port: 3002,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = config;
