import { Sequelize } from 'sequelize';
import { DB_NAME, DB_HOST, DB_PASSWORD, DB_USERNAME } from '../configs';

let sequelizeConnection: Sequelize = new Sequelize('prepare', 'root', 'root', {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 3306, 
});

export default sequelizeConnection;
