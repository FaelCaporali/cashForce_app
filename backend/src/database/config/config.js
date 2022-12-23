/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv')
  .config({
    path: require('path')
      .resolve(__dirname, '../../../.env'),
  });

const config = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || undefined,
  database: process.env.DB_NAME || 'app-db',
  host: process.env.HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = config;
