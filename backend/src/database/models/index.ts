import { Sequelize, Options } from 'sequelize';
import config from '../config/config';

export default new Sequelize(config as Options);
